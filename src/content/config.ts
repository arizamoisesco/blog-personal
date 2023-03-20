import { defineCollection } from "astro:content";
import { blogSchema, projectsSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});

const projects = defineCollection({
  schema: projectsSchema
})

export const collections = { blog, projects };
