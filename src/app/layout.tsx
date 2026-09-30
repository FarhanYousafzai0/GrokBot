import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Geist, Geist_Mono } from "next/font/google";
import { contact } from "@/data/contact";
import { Footer } from "@/components/Footer";
import { HashScroll } from "@/components/HashScroll";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
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

const pen = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-pen",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(contact.siteUrl),
  title: {
    default: `${contact.name} | MERN and React Native developer`,
    template: `%s | ${contact.name}`,
  },
  description:
    `Portfolio of ${contact.name}, MERN stack and React Native developer based in Pakistan.`,
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable} ${pen.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <div className="min-h-screen bg-paper text-ink relative w-full overflow-x-clip">
          <SiteHeader />
          {children}
          <Footer />
        </div>
        <HashScroll />
        <RevealObserver />
      </body>
    </html>
  );
}
