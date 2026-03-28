import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    sortDate: z.number().optional(),
    category: z.enum(['construction', 'architecture', 'community', 'maps']),
    image: z.string(),
    caption: z.string(),
    source: z.string().optional(),
    decade: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    location: z.string().optional(),
    time: z.string().optional(),
  }),
});

const newsletters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/newsletters' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    url: z.string().optional(),
    file: z.string().optional(),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    year: z.string(),
    sortOrder: z.number(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { archive, events, newsletters, timeline };
