import Link from "next/link";
import { Facebook, YouTube, XformerlyTwitter } from "../components/icons";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/butterflyspanish",
    icon: YouTube,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ButterflySpanish",
    icon: Facebook,
  },
  {
    name: "X/Twitter",
    href: "https://twitter.com/ontheflySpanish",
    icon: XformerlyTwitter,
  },
] as const;

export default function FooterSection() {
  return (
    <footer className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 border-t border-zinc-200">
        <div className="my-8 flex flex-wrap justify-center gap-12 md:gap-20">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex flex-col items-center group"
            >
              <social.icon
                fill="currentColor"
                className="size-6 text-zinc-500 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110"
              />
              <span className="mt-2 text-sm text-zinc-500 group-hover:text-rose-600 transition-colors duration-300">
                {social.name}
              </span>
            </Link>
          ))}
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Butterfly Spanish
        </span>
      </div>
    </footer>
  );
}
