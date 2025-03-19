import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Youtube } from "lucide-react";

export default function Header() {
  return (
    <header className="top-0 z-50 px-8 md:px-28 lg:px-22">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <Image
              src="/Butterfly_Spanish_Logo.svg"
              alt="Butterfly Spanish Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="font-bold text-xl text-rose-500">
            Butterfly Spanish
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <a
            href="#videos"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Videos
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            About
          </a>
          <a
            href="#donate"
            className="text-sm font-medium hover:text-rose-600 transition-colors"
          >
            Support
          </a>
        </nav>
        <div className="ml-auto md:ml-6 flex items-center gap-4">
          <Link
            href="https://www.youtube.com/c/butterflyspanish"
            target="_blank"
          >
            <Button variant="outline" className="hidden md:flex gap-2">
              <Youtube className="h-4 w-4" />
              YouTube
            </Button>
          </Link>
          <a href="#videos">
            <Button className="hidden md:flex bg-rose-800 hover:bg-rose-900 text-white">
              Start Learning
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
