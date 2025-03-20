import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { YouTubeStats } from "../components/YouTubeStats";
import { Suspense } from "react";
import LiteYoutube from "../components/lite-youtube";


export default function Hero() {
  return (
    <section className="relative">
      {/* <div className="absolute inset-0 opacity-10 bg-[url('/butterfly-pattern.svg')] bg-repeat"></div> */}
      <div className="container md:py-24 py-10 mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 fo">
          <div className="lg:w-1/2 space-y-8 px-4 md:px-0">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-semibold leading-[110%] tracking-tight text-balance">
              Learn{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-300 to-rose-500 text-transparent bg-clip-text">
                Real-Life
              </span>{" "}
              Spanish with Ana
            </h1>
            <p className="text-xl md:text-xl opacity-90 text-zinc-800 text-balance">
              Join over 1.3 million students worldwide and learn Spanish with
              Ana's proven method that focuses on real conversations, not just
              textbook rules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#videos">
                <Button
                  size="lg"
                  className="group bg-rose-700 text-white hover:bg-rose-800 sm:w-auto w-full cursor-pointer text-lg"
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
            <YouTubeStats />
          </div>
        <div className="lg:w-1/2 w-full">
          <Suspense fallback={<p>Loading video...</p>}>
            <LiteYoutube id="QA9JdDpq62s" title="Learn Spanish with Ana" />
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
    </section>
  );
}
