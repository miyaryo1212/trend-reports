import { getCollection } from 'astro:content';
import type { GetStaticPaths, APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const getStaticPaths: GetStaticPaths = async () => {
  const reports = await getCollection('reports');
  return reports.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { entry } = props as { entry: any };
  const filePath = path.join(process.cwd(), 'src/content/reports', `${entry.id}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return new Response(raw, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
