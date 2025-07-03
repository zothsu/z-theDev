// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    img: z.string().optional(),
    status: z.enum(['Featured', 'Archive']),
  }),
})

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog-posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.union([z.string(), z.date()]),
    description: z.string(),
  }),
});

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects }
export const collections = { posts };
