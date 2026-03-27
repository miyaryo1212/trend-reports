import { getCollection } from 'astro:content';
import type { GetStaticPaths } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

export const getStaticPaths: GetStaticPaths = async () => {
  const reports = await getCollection('reports');
  return reports.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
};

// mdast node to plain text
function toText(node: any): string {
  if (node.type === 'text') return node.value;
  if (node.type === 'inlineCode') return `\`${node.value}\``;
  if (node.type === 'link') {
    const text = (node.children || []).map(toText).join('');
    return `[${text}](${node.url})`;
  }
  if (node.type === 'strong') {
    return `**${(node.children || []).map(toText).join('')}**`;
  }
  if (node.type === 'emphasis') {
    return `*${(node.children || []).map(toText).join('')}*`;
  }
  if (node.children) return node.children.map(toText).join('');
  return node.value || '';
}

// Extract link from inline nodes
function extractLink(nodes: any[]): { text: string; url: string } | null {
  for (const node of nodes) {
    if (node.type === 'link') {
      return { text: (node.children || []).map(toText).join(''), url: node.url };
    }
    if (node.children) {
      const found = extractLink(node.children);
      if (found) return found;
    }
  }
  return null;
}

// Parse a blockquote into a reaction quote
function parseQuote(node: any): { text: string; author: string | null; source: { platform: string; url: string } | null } {
  const raw = (node.children || []).map(toText).join('\n').trim();

  // Pattern: "text — @author [Platform](url)" or "text — author [Platform](url)"
  const dashMatch = raw.match(/^([\s\S]+?)\s+—\s+@?(.+)$/);
  if (dashMatch) {
    const text = dashMatch[1].trim();
    const authorPart = dashMatch[2].trim();

    // Extract [Platform](url) from authorPart
    const linkMatch = authorPart.match(/^(.+?)\s*\[(.+?)\]\((.+?)\)$/);
    if (linkMatch) {
      return {
        text,
        author: linkMatch[1].trim(),
        source: { platform: linkMatch[2], url: linkMatch[3] },
      };
    }
    return { text, author: authorPart, source: null };
  }

  return { text: raw, author: null, source: null };
}

function parseBody(markdown: string) {
  const tree = unified().use(remarkParse).parse(markdown);
  const nodes = tree.children as any[];

  const sections: any[] = [];
  let i = 0;

  while (i < nodes.length) {
    const node = nodes[i];

    // H2: top-level section
    if (node.type === 'heading' && node.depth === 2) {
      const sectionTitle = toText(node);
      const topics: any[] = [];
      i++;

      while (i < nodes.length && !(nodes[i].type === 'heading' && nodes[i].depth === 2)) {
        // H3: topic
        if (nodes[i].type === 'heading' && nodes[i].depth === 3) {
          const topicTitle = toText(nodes[i]);
          const categories: any[] = [];
          const topicContent: string[] = [];
          const topicLinks: { text: string; url: string }[] = [];
          const topicItems: string[] = [];
          i++;

          while (i < nodes.length && !(nodes[i].type === 'heading' && (nodes[i].depth as number) <= 3)) {
            // H4: reaction category
            if (nodes[i].type === 'heading' && nodes[i].depth === 4) {
              const categoryName = toText(nodes[i]);
              const quotes: any[] = [];
              i++;

              while (i < nodes.length && !(nodes[i].type === 'heading' && (nodes[i].depth as number) <= 4)) {
                if (nodes[i].type === 'blockquote') {
                  quotes.push(parseQuote(nodes[i]));
                }
                i++;
              }

              categories.push({ type: categoryName, quotes });
            } else if (nodes[i].type === 'paragraph') {
              const text = toText(nodes[i]);
              topicContent.push(text);
              const link = extractLink(nodes[i].children || []);
              if (link && text.startsWith('[ソース')) {
                topicLinks.push(link);
              }
              i++;
            } else if (nodes[i].type === 'list') {
              for (const item of nodes[i].children || []) {
                topicItems.push(toText(item).trim());
              }
              i++;
            } else if (nodes[i].type === 'blockquote') {
              // Blockquote without H4 category (directly under H3)
              if (categories.length === 0) {
                categories.push({ type: null, quotes: [] });
              }
              categories[categories.length - 1].quotes.push(parseQuote(nodes[i]));
              i++;
            } else {
              i++;
            }
          }

          const topic: any = { topic: topicTitle };
          if (topicContent.length > 0) {
            topic.content = topicContent.filter(t => !t.startsWith('[ソース')).join('\n\n') || undefined;
          }
          if (topicItems.length > 0) topic.items = topicItems;
          if (topicLinks.length > 0) topic.sources = topicLinks;
          if (categories.length > 0) topic.reactions = categories;
          sections.push({ section: sectionTitle, topics: [...(sections.length > 0 && sections[sections.length - 1].section === sectionTitle ? sections.pop().topics : []), topic] });

        } else {
          // Content directly under H2 (e.g. ソース section with just links)
          if (nodes[i].type === 'list') {
            const items: any[] = [];
            for (const item of nodes[i].children || []) {
              const link = extractLink(item.children || []);
              if (link) {
                items.push(link);
              } else {
                items.push({ text: toText(item).trim(), url: null });
              }
            }
            // Merge into current section or create new
            const last = sections[sections.length - 1];
            if (last && last.section === sectionTitle) {
              last.items = items;
            } else {
              sections.push({ section: sectionTitle, items });
            }
          }
          i++;
        }
      }

      // If no topics were added for this section header
      if (!sections.some(s => s.section === sectionTitle)) {
        sections.push({ section: sectionTitle, topics: [] });
      }
    } else {
      i++;
    }
  }

  return sections;
}

export async function GET({ props }: { props: { entry: any } }) {
  const { entry } = props;
  const filePath = path.join(process.cwd(), 'src/content/reports', `${entry.id}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const body = raw.replace(/^---[\s\S]*?---\n*/, '');

  const json = {
    title: entry.data.title,
    channel: entry.data.channel,
    channelId: entry.data.channelId,
    date: entry.data.date.toISOString().slice(0, 10),
    summary: entry.data.summary ?? null,
    importance: entry.data.importance ?? null,
    features: entry.data.features,
    sections: parseBody(body),
  };

  return new Response(JSON.stringify(json, null, 2));
}
