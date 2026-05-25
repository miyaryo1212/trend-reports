import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://aitrends.miyaryo1212.com';

const CHANNEL_ORDER = [
  'Claude / Anthropic',
  'Codex / OpenAI',
  '生成AIトレンド総合',
  'GitHub急成長リポ',
  'LLM/NLP最新論文',
];

export const GET: APIRoute = async () => {
  const reports = await getCollection('reports');
  const sorted = reports.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const byChannel = new Map<string, typeof sorted>();
  for (const r of sorted) {
    const list = byChannel.get(r.data.channel) ?? [];
    list.push(r);
    byChannel.set(r.data.channel, list);
  }

  const channels = [
    ...CHANNEL_ORDER.filter((ch) => byChannel.has(ch)),
    ...[...byChannel.keys()].filter((ch) => !CHANNEL_ORDER.includes(ch)),
  ];

  const lines: string[] = [];
  lines.push('# AI Trend Reports');
  lines.push('');
  lines.push(
    '> 生成AI関連のトレンドを毎朝Claudeが自動調査・要約して公開しているサイト。Claude/Anthropic、Codex/OpenAI、生成AIトレンド総合、GitHub急成長リポ、LLM/NLP最新論文の各チャンネルをデイリー/ウィークリーで配信。'
  );
  lines.push('');
  lines.push(`サイト: ${SITE}`);
  lines.push('各レポートは `<report-url>source.md` でMarkdown原文、`<report-url>source.json` で構造化JSONも取得可能 (例: `/reports/2026-05-11-claude-anthropic/source.md`)。');
  lines.push('注目度は5段階 (★1〜★5) で、★3以上は要注目、★5は特に重要。');
  lines.push('');

  for (const ch of channels) {
    const list = byChannel.get(ch)!;
    lines.push(`## ${ch}`);
    lines.push('');
    for (const r of list) {
      const date = r.data.date.toISOString().slice(0, 10);
      const url = `${SITE}/reports/${r.id}/`;
      const stars = r.data.importance ? ` ★${r.data.importance}` : '';
      const summary = r.data.summary ? `: ${r.data.summary}` : '';
      lines.push(`- [${date}${stars} ${r.data.title}](${url})${summary}`);
    }
    lines.push('');
  }

  lines.push('## Optional');
  lines.push('');
  lines.push(`- [更新履歴](${SITE}/updates/): サイト機能の更新ログ`);
  lines.push(`- [プライバシーポリシー](${SITE}/privacy/)`);
  lines.push(`- [Cookieポリシー](${SITE}/cookies/)`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
