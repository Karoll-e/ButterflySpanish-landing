export interface YouTubeVideo {
  id: string;
  title: string;
  views: string;
  duration: string;
  thumbnail: string;
  publishedAt: string;
}

export interface PlaylistResponse {
  items: {
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
      publishedAt: string;
      resourceId: {
        videoId: string;
      };
    };
    contentDetails: {
      duration: string;
    };
    statistics?: {
      viewCount: string;
    };
  }[];
  nextPageToken?: string;
} 