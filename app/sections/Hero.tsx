import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Play } from "lucide-react";
import { YouTubeStats } from "../components/YouTubeStats";
import VideoComponent from "@/components/ui/video-component";
import { Suspense } from "react";

export default function Hero() {
  return (
    <section className="relative">
      {/* <div className="absolute inset-0 opacity-10 bg-[url('/butterfly-pattern.svg')] bg-repeat"></div> */}
      <div className="container px-4 md:py-28 py-10 mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8">
          {/* <div className="flex gap-2">
            <Badge variant="outline" className="text-rose-600 border-rose-800">
              Butterfly Spanish
            </Badge>
          <Badge variant="outline" className="text-rose-600 border-rose-600">
              + 100 free video lessons
            </Badge>
          </div> */}
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn{" "}
            <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-500 text-transparent bg-clip-text">
              Real-Life Spanish
            </span>{" "}
            with Ana
          </h1>
          <p className="text-xl md:text-2xl opacity-90 text-zinc-800">
            Real, practical Spanish from a native speaker. Join over 1 million
            students learning Spanish the fun way!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#videos">
              <Button
                size="lg"
                className="group bg-rose-700 text-white hover:bg-rose-800 sm:w-auto w-full"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            {/* <Link
              href="https://www.youtube.com/c/butterflyspanish"
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-600 text-zinc-800 hover:bg-gray-500/10"
              >
                <Youtube className="mr-2 h-5 w-5" />
                Watch on YouTube
              </Button>
            </Link> */}
          </div>
          <YouTubeStats />
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent videoId="QA9JdDpq62s" />
            </Suspense>
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                className="w-16 h-16 rounded-full bg-white/90 text-rose-600 hover:bg-white"
              >
                <Play className="h-8 w-8" />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
