import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
      {/* <Header /> */}
      <Hero />
    </div>
  );
}
