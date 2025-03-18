import { YouTubeVideo, PlaylistResponse } from "../types/youtube";

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
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K views`;
  }
  return `${count} views`;
}

export async function getPopularVideos(maxResults = 3): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured');
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=viewCount&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );
    const searchData = await response.json();

    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    const videosData: PlaylistResponse = await videosResponse.json();

    return searchData.items.map((item: any, index: number) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      duration: formatDuration(videosData.items[index].contentDetails.duration),
      views: formatViewCount(videosData.items[index].statistics?.viewCount || '0'),
    }));
  } catch (error) {
    console.error('Error fetching popular videos:', error);
    return [];
  }
}

export async function getNewestVideos(maxResults = 3): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured');
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );
    const searchData = await response.json();

    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    const videosData: PlaylistResponse = await videosResponse.json();

    return searchData.items.map((item: any, index: number) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      duration: formatDuration(videosData.items[index].contentDetails.duration),
      views: formatViewCount(videosData.items[index].statistics?.viewCount || '0'),
    }));
  } catch (error) {
    console.error('Error fetching newest videos:', error);
    return [];
  }
}

export async function getPlaylistVideos(playlistId: string, maxResults = 3): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured');
  }

  try {
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );
    const playlistData: PlaylistResponse = await playlistResponse.json();

    const videoIds = playlistData.items.map(item => item.snippet.resourceId.videoId).join(',');
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    const videosData: PlaylistResponse = await videosResponse.json();

    return playlistData.items.map((item, index) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      duration: formatDuration(videosData.items[index].contentDetails.duration),
      views: formatViewCount(videosData.items[index].statistics?.viewCount || '0'),
    }));
  } catch (error) {
    console.error('Error fetching playlist videos:', error);
    return [];
  }
}

// Get top comments from channel

export interface Comment {
  id: string;
  text: string;
  authorName: string;
  authorImage: string;
  likeCount: number;
  publishedAt: string;
}

export async function getTopComments(maxResults = 6): Promise<Comment[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured');
  }

  try {
    const newestVideos = await getNewestVideos(3);
    const videoIds = newestVideos.map(video => video.id);
    
    const commentsPromises = videoIds.map(async (videoId) => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=${Math.ceil(maxResults / videoIds.length)}&order=relevance&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      
      if (!data.items) return [];

      return data.items.map((item: any) => ({
        id: item.id,
        text: item.snippet.topLevelComment.snippet.textDisplay,
        authorName: item.snippet.topLevelComment.snippet.authorDisplayName,
        authorImage: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
        likeCount: item.snippet.topLevelComment.snippet.likeCount,
        publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
      }));
    });

    const commentsArrays = await Promise.all(commentsPromises);
    const allComments = commentsArrays.flat();
    
    
    return allComments
      .sort((a, b) => b.likeCount - a.likeCount)
      .slice(0, maxResults);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
} 