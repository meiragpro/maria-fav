import { defineCollection, z } from 'astro:content';

// Schema for every product post. If you forget a required field,
// the build will tell you exactly which post and which field.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Path under /public, e.g. "/images/airfryer.jpg"
    image: z.string(),
    // Your Amazon affiliate link (from SiteStripe)
    amazonUrl: z.string().url(),
    price: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    pubDate: z.date(),
    // Hide a draft from the homepage by setting draft: true
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
