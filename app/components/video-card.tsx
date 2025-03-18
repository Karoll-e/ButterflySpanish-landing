"use client"

import Link from "next/link"
import { YouTubeVideo } from "../types/youtube"
import LiteYoutube from "./ui/lite-youtube"

interface VideoCardProps {
  video: YouTubeVideo
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="space-y-3">
      <div className="relative aspect-video">
        <LiteYoutube
          id={video.id}
          title={video.title}
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-medium line-clamp-2 group-hover:text-rose-600 transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-gray-600">{video.views}</p>
      </div>
    </div>
  )
}

