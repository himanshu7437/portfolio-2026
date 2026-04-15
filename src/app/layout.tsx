import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Sharma | Full-Stack Product Engineer",
  description:
    "Award-winning portfolio of Himanshu Sharma. Full-stack product engineer specializing in real-time apps, AI integrations, and scalable systems.",
  keywords: ["full-stack engineer", "Next.js", "React", "portfolio", "product engineer"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
