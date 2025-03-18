"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface LiteYoutubeProps {
  id: string;
  title?: string;
  poster?: "default" | "mqdefault" | "hqdefault" | "sddefault" | "maxresdefault";
  className?: string;
}

export default function LiteYoutube({ 
  id, 
  title = "YouTube Video", 
  poster = "maxresdefault",
  className = ""
}: LiteYoutubeProps) {
  return (
    <div className={`w-full relative rounded-lg border border-rose-200 shadow-lg aspect-video overflow-hidden md:rounded-lg md:shadow-lg md:border-4 md:border-rose-500/20 ${className}`}>
      <LiteYouTubeEmbed
        id={id}
        title={title}
        poster={poster}
        noCookie={true}
        params="rel=0 showinfo=0"
      />
    </div>
  );
} 