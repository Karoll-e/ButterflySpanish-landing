import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Feautures";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 md:px-20 lg:px-22">
      
      {/* <Header /> */}
      <Hero />
      <About />
      <Features />
    </div>
  );
}
