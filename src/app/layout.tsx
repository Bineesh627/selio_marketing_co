import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selio Marketing Co | Premium Digital Agency",
  description: "World-class global digital agency focusing on branding, SEO, and web development.",
  icons: {
    icon: [
      { url: "/selio.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/selio.svg",
    shortcut: "/selio.svg",
  },
  openGraph: {
    title: "Selio Marketing Co | Premium Digital Agency",
    description: "World-class global digital agency focusing on branding, SEO, and web development.",
    siteName: "Selio Marketing Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selio Marketing Co | Premium Digital Agency",
    description: "World-class global digital agency focusing on branding, SEO, and web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${syne.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-onyx text-foreground selection:bg-brand-violet selection:text-white">
        <CustomCursor />
        <SmoothScrolling>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
