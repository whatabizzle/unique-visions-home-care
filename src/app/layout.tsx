import type { Metadata } from "next";
import { Great_Vibes, Outfit, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://uniquevisionshc.vercel.app";
const shareTitle = `${site.name} | In-Home Care in Hammond, LA`;
const shareDescription = `${site.tagline} ${site.pillars} Serving Tangipahoa, Ascension, East & West Baton Rouge. Call ${site.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: shareTitle,
    template: `%s | ${site.name}`,
  },
  description: shareDescription,
  applicationName: site.name,
  keywords: [
    "home care",
    "in-home care",
    "Hammond LA",
    "Tangipahoa",
    "senior care",
    "non-medical home care",
    "Unique Visions Home Care",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: siteUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: site.shortName,
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${greatVibes.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
