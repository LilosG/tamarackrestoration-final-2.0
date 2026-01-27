/**
 * Content Collections Configuration
 * ==================================
 * Defines schemas for blog posts and other content types
 */

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Tamarack Restoration'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum([
      'water-damage',
      'fire-damage',
      'mold',
      'flood',
      'insurance',
      'prevention',
      'tips',
      'news',
    ]),
    tags: z.array(z.string()).default([]),
    // Internal linking - connect to services and cities
    relatedServices: z.array(z.string()).default([]),
    relatedCities: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
