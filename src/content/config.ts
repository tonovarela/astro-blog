import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema:( {image})=> z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
        image: image().refine(img=>img.width<1200, {message: 'Image width must be lower than 1200px'}),
    }),
});



export const collections = {
    blog: blogCollection,
  };