import rss from '@astrojs/rss';
import { getAllPosts } from 'src/api/blog-post.utils';

//const postImportResult = import.meta.glob('../posts/**/*.md', { eager: true });
const posts = import.meta.glob('./blog/**/*.{md,mdx}');


export const get = () => rss({
  title: 'Fabio Biondi - Front-End Tutorials',
  description: 'Snippets and Tutorials aboutJavaScript, TypeScript, Angular, React and more...',
  site: 'https://fabiobiondi.dev',
  items: posts,
  customData: `<language>en-us</language>`,
})