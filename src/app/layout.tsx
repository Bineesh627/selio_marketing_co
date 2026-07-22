import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { DeferredCustomCursor } from "@/components/layout/DeferredCustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seliomarketing.com"),
  title: "Selio Marketing Co | Premium Digital Agency",
  description: "World-class global digital agency focusing on branding, SEO, AEO, GEO, and high-conversion web development.",
  alternates: {
    canonical: "/",
  },
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
    description: "World-class global digital agency focusing on branding, SEO, AEO, GEO, and web development.",
    url: "https://www.seliomarketing.com",
    siteName: "Selio Marketing Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selio Marketing Co | Premium Digital Agency",
    description: "World-class global digital agency focusing on branding, SEO, AEO, GEO, and web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-brand-onyx text-foreground selection:bg-brand-violet selection:text-white">
        <JsonLd />
        <DeferredCustomCursor />
        <SmoothScrolling>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
