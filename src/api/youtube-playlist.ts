 export async function getYoutubePLaylist(playlistId: string, limit?: number) {
  // PLUioGv_6G9YK7m5HAN0sK-3Bti0ZVwjlT
  // API: https://developers.google.com/youtube/v3/docs/playlistItems/list?authuser=4
  const playlist = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=contentDetails&part=localizations&part=snippet&id=${playlistId}&key=${import.meta.env.YOUTUBE_API_KEY}`).then(res => res.json())
  const playlistItems = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=${playlistId}&maxResults=50&key=${import.meta.env.YOUTUBE_API_KEY}`).then(res => res.json())
    

  const playlistVideos: PlayListPlayerItem[] = playlistItems.items.map(item => {
    return {
      playlistId,
      youtubeId: item.contentDetails.videoId,
      text: item.snippet.title,
      description: item.snippet.description,
      imageSmall: item.snippet.thumbnails.medium?.url,
      imageBig:  item.snippet.thumbnails.default?.url,
      type: 'youtube-video',
      URL: null,
    }
  }).slice(0, limit || 4);

  

  const title = playlist.items[0].snippet.localized.title;
  const description = playlist.items[0].snippet.localized.description;

  return {
    title,
    description,
    items: playlistVideos
  }
}



export interface PlayListPlayerItem {
  id: string;
  youtubeId: string;
  text: string;
  description: string;
  imageSmall: string | null;
  imageBig: string | null;
  type: ContentType,
  URL: string | null;
}
export type ContentType = 'youtube-video' | 'intro' | 'article' | 'separator' | 'post'
