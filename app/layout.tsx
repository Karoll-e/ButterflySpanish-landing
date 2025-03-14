import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-4 md:px-20 lg:px-22`}
      >
        {children}
      </body>
    </html>
  );
}
