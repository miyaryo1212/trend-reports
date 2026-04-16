import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const reports = defineCollection({
  loader: glob({ base: './src/content/reports', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    channel: z.string(),
    channelId: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    importance: z.number().min(1).max(5).optional(),
    codex_review: z.string().optional(),
    codex_importance: z.number().min(1).max(5).optional(),
    features: z.array(z.string()).default([]),
  }),
});

export const collections = { reports };
