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
    features: z.array(z.string()).default([]),
  }),
});

export const collections = { reports };
