import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Butterfly Spanish - Learn Spanish with Ana",
  description: "Learn practical, everyday Spanish with Ana from Butterfly Spanish. Over 1 million YouTube followers and 100+ free video lessons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased", inter.variable, inter.variable)}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-rose-400 opacity-20 blur-[100px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
