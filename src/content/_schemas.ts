import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;


export const projectsSchema = z
  .object({
    ogImage: z.string().optional(),
    title: z.string(),
    description: z.string(),
    technologies: z.string().optional(),
    projectSlug: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["software"]),
    repo: z.string().optional(),
    deployment: z.string().optional(),

  })
  .strict();

export type ProjectsFrontmatter = z.infer<typeof projectsSchema>;