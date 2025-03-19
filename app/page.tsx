import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Feautures";
import LatestVideos from "./sections/LatestVideos";
import Testimonials from "./sections/Testimonials";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 md:px-20 lg:px-22 ">
      <Hero />
      <About />
      <Features />
      <LatestVideos />
      <Testimonials />
    </div>
  );
}
