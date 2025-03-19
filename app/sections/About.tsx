import Link from "next/link";
import Image from "next/image";
import { Facebook, YouTube, XformerlyTwitter } from "@/app/components/icons";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-rose-200"></div>
                <Image
                  src="/about-butterfly.jpg"
                  alt="Ana - Butterfly Spanish"
                  width={500}
                  height={600}
                  className="rounded-xl relative z-10 object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-5xl font-semibold">¡Hola! I'm Ana</h2>
              <p className="text-lg text-gray-600">
                I'm your Spanish teacher and the creator of Butterfly Spanish. I believe in teaching real, practical
                Spanish that native speakers actually use today - not outdated textbook phrases.
              </p>
              <p className="text-lg text-gray-600">
                With over one million followers on YouTube, I've helped students from around the world learn Spanish in
                a fun and engaging way. My teaching approach focuses on conversational Spanish and cultural insights
                that help you understand not just the language, but also how it's used in different Spanish-speaking
                countries.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a beginner just starting your Spanish journey or an advanced student looking to perfect
                your skills, I'm here to guide you every step of the way. ¡Vamos a aprender español juntos!
              </p>
              <div className="flex gap-28 pt-4 items-center justify-center md:justify-start md:gap-8">
                <Link
                  href="https://www.youtube.com/c/butterflyspanish"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-700"
                >
                  <YouTube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/ButterflySpanish"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-700"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/ontheflySpanish"
                  target="_blank"
                  className="text-rose-600 hover:text-rose-700"
                >
                  <XformerlyTwitter className="h-6 w-6" />
                </Link>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
}
