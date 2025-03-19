import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-rose-600 mb-4">Butterfly Spanish</h3>
            <p className="text-gray-600">
              Learn Spanish with Ana from Butterfly Spanish. Free Spanish lessons for beginners and intermediate learners.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-rose-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#videos" className="text-gray-600 hover:text-rose-600">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-rose-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-rose-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/butterflyspanish"
                target="_blank"
                className="text-gray-600 hover:text-rose-600"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/c/butterflyspanish"
                target="_blank"
                className="text-gray-600 hover:text-rose-600"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Butterfly Spanish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 