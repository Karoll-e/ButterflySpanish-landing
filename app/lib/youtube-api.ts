import { YouTubeVideo, PlaylistResponse, Comment } from "../types/youtube";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UC9yudInUYzMh9H4gJs4DrHg";

function formatDuration(duration: string) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return "00:00";
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  let result = '';
  if (hours) result += `${hours}:`;
  result += `${minutes.padStart(2, '0')}:`;
  result += seconds.padStart(2, '0');
  
  return result;
}

function formatViewCount(viewCount: string) {
  const count = parseInt(viewCount);
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M views`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K views`;
  return `${count} views`;
}

function getThumbnailUrl(thumbnails: any): string {
  if (!thumbnails) return '';
  return thumbnails.high?.url || thumbnails.medium?.url || thumbnails.default?.url || '';
}

async function fetchVideoDetails(videoIds: string[]): Promise<PlaylistResponse> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(',')}&key=${YOUTUBE_API_KEY}`
  );
  return response.json();
}

function mapVideoData(item: any, videoDetails: any): YouTubeVideo {
  return {
    id: item.id?.videoId || item.snippet?.resourceId?.videoId,
    title: item.snippet.title,
    thumbnail: getThumbnailUrl(item.snippet.thumbnails),
    publishedAt: item.snippet.publishedAt,
    duration: videoDetails ? formatDuration(videoDetails.contentDetails.duration) : "00:00",
    views: videoDetails ? formatViewCount(videoDetails.statistics?.viewCount || '0') : "0 views",
  };
}

async function fetchVideos(endpoint: string, maxResults = 3): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) throw new Error('YouTube API key is not configured');

  try {
    const response = await fetch(`${endpoint}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`);
    const searchData = await response.json();

    if (!searchData.items?.length) return [];

    const videoIds = searchData.items.map((item: any) => 
      item.id?.videoId || item.snippet?.resourceId?.videoId
    );
    const videosData = await fetchVideoDetails(videoIds);

    if (!videosData.items?.length) return [];

    return searchData.items.map((item: any, index: number) => 
      mapVideoData(item, videosData.items[index])
    );
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

export async function getPopularVideos(maxResults = 3): Promise<YouTubeVideo[]> {
  return fetchVideos(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=viewCount&type=video`,
    maxResults
  );
}

export async function getNewestVideos(maxResults = 3): Promise<YouTubeVideo[]> {
  return fetchVideos(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video`,
    maxResults
  );
}

export async function getPlaylistVideos(playlistId: string, maxResults = 3): Promise<YouTubeVideo[]> {
  return fetchVideos(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}`,
    maxResults
  );
}

export async function getTopComments(maxResults = 5): Promise<Comment[]> {
  if (!YOUTUBE_API_KEY) throw new Error('YouTube API key is not configured');

  try {
    const newestVideos = await getNewestVideos(3);
    if (!newestVideos.length) return [];
    
    const commentsPromises = newestVideos.map(async (video) => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video.id}&maxResults=${Math.ceil(maxResults / newestVideos.length)}&order=relevance&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        
        if (!data.items?.length) return [];

        return data.items.map((item: any) => ({
          id: item.id,
          text: item.snippet.topLevelComment.snippet.textDisplay,
          authorName: item.snippet.topLevelComment.snippet.authorDisplayName,
          authorImage: item.snippet.topLevelComment.snippet.authorProfileImageUrl || '',
          likeCount: item.snippet.topLevelComment.snippet.likeCount || 0,
          publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
        }));
      } catch (error) {
        console.error(`Error fetching comments for video ${video.id}:`, error);
        return [];
      }
    });

    const allComments = (await Promise.all(commentsPromises)).flat();
    return allComments.sort((a, b) => b.likeCount - a.likeCount).slice(0, maxResults);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}