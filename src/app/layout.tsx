import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Farhan Yousafzai | MERN and React Native developer",
    template: "%s | Farhan Yousafzai",
  },
  description:
    "Portfolio of Farhan Yousafzai, MERN stack and React Native developer based in Pakistan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <div className="min-h-screen bg-paper text-ink relative w-full">
          <SiteHeader />
          {children}
          <Footer />
        </div>
        <RevealObserver />
      </body>
    </html>
  );
}
