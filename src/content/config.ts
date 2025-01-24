import { z, defineCollection } from "astro:content";

// blog
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    readTime: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ schema: blogSchema });

export const collections = {
    'blog': blogCollection,
}