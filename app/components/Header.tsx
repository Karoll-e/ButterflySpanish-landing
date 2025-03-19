import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-rose-600">
            Butterfly Spanish
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-rose-600">
              Home
            </Link>
            <Link href="#videos" className="text-gray-600 hover:text-rose-600">
              Videos
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-rose-600">
              Testimonials
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-rose-600">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/butterflyspanish"
              target="_blank"
              className="text-gray-600 hover:text-rose-600"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/c/butterflyspanish"
              target="_blank"
              className="text-gray-600 hover:text-rose-600"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 