import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema:( {image})=> z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        isDraft: z.boolean().default(false),
        author:reference('author'),
        tags: z.array(z.string()),
        //tags: reference('tags'),
        image: image().refine(img=>img.width<1200, {message: 'Image width must be lower than 1200px'}),
    }),
});

const authorCollection = defineCollection({
    type: 'data',
    schema:({image})=> z.object({
        name: z.string(),        
        avatar: image(),
        twitter: z.string(),
        linkedIn: z.string(),
        github:z.string(),
        bio:z.string(),
        subtitle:z.string(),
    }),
});

const tagCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.array(z.string()),
    }),
});



export const collections = {
    blog: blogCollection,
    author: authorCollection,
    tags: tagCollection,
  };