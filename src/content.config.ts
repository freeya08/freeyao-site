import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.enum(['japan-life', 'dev-diary', 'games', 'music', 'novels', 'misc', 'vlog']),
			tags: z.array(z.string()).optional(),
			externalLink: z.string().url().optional(),
		}),
});

export const collections = { posts };
