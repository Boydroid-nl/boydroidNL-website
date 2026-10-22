import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { platforms } from './i18n';

// Companies we work for. Only `current: true` clients appear in the logo carousel.
const clients = defineCollection({
  loader: file('src/content/clients.yaml'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image().optional(), // without a logo the name is shown as text
      url: z.string().url().optional(),
      current: z.boolean().default(true),
      order: z.number().default(100),
    }),
});

// Apps / portfolio items. One folder per app holding its images and a Markdown file per language: src/content/apps/<slug>/{nl,en}.md
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      client: z.string(),
      clientUrl: z.string().url().optional(),
      icon: image().optional(),
      cover: image().optional(),
      screenshots: z.array(image()).default([]),
      platforms: z.array(z.enum(platforms)).default([]),
      playStore: z.string().url().optional(),
      appStore: z.string().url().optional(),
      website: z.object({ label: z.string(), url: z.string().url() }).optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { clients, apps };
