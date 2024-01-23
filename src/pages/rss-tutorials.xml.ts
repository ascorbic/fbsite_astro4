import rss from '@astrojs/rss';
import { allTutorialsSeries } from './tutorials/_tutorial_list';



export const get = () => rss({
  title: 'Fabop Biondi - Front-End Tutorials',
  description: 'Snippets and Tutorials aboutJavaScript, TypeScript, Angular, React and more...',
  site: 'https://fabiobiondi.dev',
  items: (allTutorialsSeries as any).map(post =>  ({
    link: import.meta.env.SITE + post.firstPost,
    title: post.title,
    pubDate: post.title,
  })),
  customData: `<language>en-us</language>`,
})