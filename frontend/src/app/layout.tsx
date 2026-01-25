import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'
import Clarity from '@microsoft/clarity';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const projectId = "t0yu3rrbf1"
export const metadata: Metadata = {
  title: {
    template: '%s | Fruitful Box',
    default: 'Fruitful Box - Fresh Fruit Delivery in Pune',
  },
  description: "Get premium fresh fruits, cut fruits, and curated fruit boxes delivered to your door in Pune. Handpicked seasonal fruits delivered every Sunday & Wednesday. Order online or via WhatsApp.",
  keywords: "fresh fruits Pune, fruit delivery, seasonal fruits, cut fruits, fruit boxes, mango delivery, avocado, fresh produce, healthy food delivery",
  authors: [{ name: "Fruitful Box" }],
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://fruitfulbox.vercel.app"),
  verification: {
    google: "Bzee-pKoCg_cOupVkgj87r5wuR_hpxS7NGKCE6UHvLo",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fruitfulbox.vercel.app",
    title: "Fruitful Box - Fresh Fruit Delivery in Pune",
    description: "Premium seasonal fruits delivered fresh to your door. Same-week delivery available.",
    images: [
      {
        url: "/images/bannernw.png",
        width: 1200,
        height: 630,
        alt: "Fruitful Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fruitful Box - Fresh Fruit Delivery in Pune",
    description: "Premium seasonal fruits delivered to your door",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  Clarity.init(projectId);
  
  // Structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fruitful Box",
    description: "Fresh fruit delivery service in Pune",
    url: "https://fruitfulbox.vercel.app",
    image: "/images/bannernw.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
  };

  return (
    <html lang="en">
      <Head> 
        <meta name="author" content="Fruitful Box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="canonical" href="https://fruitfulbox.vercel.app" />
      </Head>
      <body
        className={cn("min-h-screen bg-white text-gray-800", inter.className)}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
        >
          {JSON.stringify(structuredData)}
        </Script>
      </body>
          
      <GoogleAnalytics gaId='G-7DK8KL5KTF' />
    </html>
  );
}
