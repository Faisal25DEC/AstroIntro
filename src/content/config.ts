import { z, defineCollection, reference } from "astro:content";

export const collections = {
  docs: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(60, {
        message: "Title must be 60 characters or less.",
      }),
      description: z.string().max(160, {
        message: "Description must be 160 characters or less.",
      }),
      date: z.date(),
      author: z.string(),
    }),
  }),
};
