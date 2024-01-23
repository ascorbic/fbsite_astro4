export function getPosts(posts) {
  return posts.filter((post) =>  import.meta.env.DEV ? true : !post.frontmatter.draft);

}

/**
 * Sorted by last  day
 */
export function getAllPosts(posts, showDraft: boolean = false) {
  return posts
        .filter((p) => {
          // hide drafts
          if (!showDraft && p.frontmatter.draft) {
            return false;
          }
          // hide drafts in development mode
          return (import.meta.env.DEV ? true : !p.frontmatter.draft);
        })
        .sort(function(a, b) {
          const c: any = new Date(a.frontmatter.pubDate);
          const d: any = new Date(b.frontmatter.pubDate);
          return d-c;
      });
}