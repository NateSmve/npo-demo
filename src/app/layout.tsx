import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import DemoBanner from "@/components/DemoBanner";
import Nav from "@/components/Nav";
import { buildMeta } from "@/lib/seo";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = buildMeta({
  title: "Building Stronger Communities",
  description: "Horizon Foundation empowers communities through education, clean water, health, and environmental programs. Join us in making a difference.",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <DemoBanner />
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 mt-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Horizon Foundation. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-gray-700 transition-colors">About</Link>
              <Link href="/impact" className="hover:text-gray-700 transition-colors">Impact</Link>
              <Link href="/events" className="hover:text-gray-700 transition-colors">Events</Link>
              <Link href="/donate" className="hover:text-gray-700 transition-colors">Donate</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
