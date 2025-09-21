import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'
import Clarity from '@microsoft/clarity';

const inter = Inter({ subsets: ["latin"] });
const projectId = "t0yu3rrbf1"
export const metadata: Metadata = {
  // title: "Fruitful Box – Premium Seasonal Fruits Delivered",
  title: {
    template: '%s | Fruitful Box',
    default: 'Fruitful Box',
  },
  description: "Delivering Fresh Fruits to Your Doorstep. Taste the freshest seasonal fruits – plum, peach, cut fruits and more. Order online and get them delivered at your doorstep!",
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://fruitfulbox.vercel.app"),
  other: {
    "google-site-verification": "Bzee-pKoCg_cOupVkgj87r5wuR_hpxS7NGKCE6UHvLo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  Clarity.init(projectId);
  return (
    <html lang="en">
      <Head>
        {/* <title>Fruitful Box – Premium Seasonal Fruits Delivered</title> */}
        <meta
          name="description"
          content="Taste the freshest seasonal fruits – mangoes, avocados, and more. Order online and get them delivered at your doorstep!"
        />
        <meta
          name="keywords"
          content="fruit delivery, mangoes, avocados, Devgad mangoes, fresh fruits online, Fruitful Box"
        />
        <meta name="author" content="Fruitful Box" />
        {/* <meta name="google-site-verification" content="Bzee-pKoCg_cOupVkgj87r5wuR_hpxS7NGKCE6UHvLo" /> */}
        {/* Open Graph / Social */}
        <meta
          property="og:title"
          content="Fruitful Box – Premium Seasonal Fruits Delivered"
        />
        <meta
          property="og:description"
          content="Order fresh Devgad mangoes, avocados, and more. Quick WhatsApp ordering. Delivered to your door!"
        />
        <meta
          property="og:image"
          content="https://fruitfulbox.vercel.app/images/logo.png"
        />
        <meta property="og:url" content="https://fruitfulbox.vercel.app" />
        <meta property="og:type" content="website" />
{/* fruit delivery in Pune, fresh fruits Pune, cut fruit box Pune, ready-to-eat fruit delivery, seasonal fruits Pune, premium fruit box Pune, healthy fruit packs, fruit subscription Pune, Fruitful Box */}
        {/* Twitter Preview */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fruitful Box – Premium Seasonal Fruits Delivered" />
        <meta name="twitter:description" content="Shop mangoes, avocados, and more fresh fruits online!" />
        <meta name="twitter:image" content="https://yourdomain.com/preview.jpg" /> */}
      </Head>
      <body
        className={cn("min-h-screen bg-white text-gray-800", inter.className)}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
          
      <GoogleAnalytics gaId="G-M9YCH04SDJ" />
    </html>
  );
}
