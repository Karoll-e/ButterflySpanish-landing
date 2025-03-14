'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Button } from './button';

const getVideoSrc = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1`;
};

const ThumbnailSrc = (videoId: string) => {
    return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  };

interface VideoComponentProps {
  videoId: string;
}

export default function VideoComponent({ videoId }: VideoComponentProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isPlaying) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-rose-500/20">
        <Image 
        src={ThumbnailSrc(videoId)} 
          alt="Video thumbnail" 
          width={800} 
          height={600} 
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon"
            onClick={() => setIsPlaying(true)}
            className="w-16 h-16 rounded-full bg-white/90 text-rose-600 hover:bg-white hover:scale-110 transition-transform"
          >
            <Play className="h-8 w-8" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-rose-500/20">
      <iframe 
        src={getVideoSrc(videoId)} 
        allowFullScreen 
        className="w-full aspect-video"
      />
    </div>
  );
}