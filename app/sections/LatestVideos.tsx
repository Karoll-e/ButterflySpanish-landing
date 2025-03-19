import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoCard from "@/app/components/video-card";
import { getPlaylistVideos, getPopularVideos, getNewestVideos } from "@/app/lib/youtube-api";

const BEGINNERS_PLAYLIST = "PLkjyx6Il3YUZNNLN104RhAW_NdanQgVEN";

export default async function LatestVideos() {
  const [popularVideos, newestVideos, beginnersVideos] = await Promise.all([
    getPopularVideos(3),
    getNewestVideos(3),
    getPlaylistVideos(BEGINNERS_PLAYLIST, 3),
  ]);

  return (
    <section id="videos" className="py-12 md:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">My Spanish Lessons</h2>
            <p className="text-gray-600 max-w-2xl">
              Over 150 free video lessons to help you improve your Spanish skills
            </p>
          </div>
          <Link
            href="https://www.youtube.com/c/butterflyspanish"
            target="_blank"
            className="mt-4 md:mt-0 text-rose-600 font-medium hover:text-rose-700 flex items-center"
          >
            View all videos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger className="cursor-pointer" value="popular">Most Popular</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="newest">Newest</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="beginners">For Beginners</TabsTrigger>
          </TabsList>

          <TabsContent value="popular" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </TabsContent>

          <TabsContent value="newest" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newestVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </TabsContent>

          <TabsContent value="beginners" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beginnersVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

