
export async function getDevToArticles(limit?: number) {
  const devToArticlesFetch = await fetch("https://dev.to/api/articles/me", {
    headers: {
      "api-key": import.meta.env.API_KEY_DEV_TO,
    },
  })
  const res =  await devToArticlesFetch.json()
  return limit ? res.slice(0, limit) : res;
}
