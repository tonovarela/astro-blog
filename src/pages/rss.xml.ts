import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export const GET: APIRoute = async({ site }) => {
    const blogPosts = await  getCollection('blog');

  
    return rss({
        stylesheet: '/styles/rss.xsl',
        title: 'Tonovarela  Blog',

        description: 'Un simple blog de astrojs',
        site :site ??'',

        items: blogPosts.map(({data,slug}:any) =>({
         title: data.title,
         pubDate:data.date,
         description:data.description,
         link:`posts/${slug}`,

        })),
        
        customData: `<language>en-mx</language>`,
      });
}