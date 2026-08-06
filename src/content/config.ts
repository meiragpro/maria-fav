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
    // The verdict. Set this explicitly — don't infer it from the star rating,
    // or the site can never actually say Skip.
    verdict: z.enum(['ship', 'skip']).optional(),
    // Position within a ranked comparison, e.g. the K-beauty serum trio.
    // Ranked posts sort ahead of unranked ones on the homepage.
    rank: z.number().int().min(1).optional(),
    // One line explaining why it landed at that position.
    rankNote: z.string().optional(),
    pubDate: z.date(),
    // Hide a draft from the homepage by setting draft: true
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
