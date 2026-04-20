import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tenos Data Teknologi | Building Data & AI Talent",
    template: "%s | Tenos Data Teknologi",
  },
  description:
    "Tenos builds Data & AI talent through Digdeep Academy and ensures they are industry-ready for companies and institutions.",
  keywords: [
    "Tenos",
    "Digdeep Academy",
    "Data Talent",
    "AI Talent",
    "Data Manpower",
    "Indonesia",
    "Bootcamp",
    "Data Science",
  ],
  authors: [{ name: "Tenos Data Teknologi" }],
  openGraph: {
    title: "Tenos Data Teknologi | Building Data & AI Talent",
    description:
      "We don't search for talent. We build them. Tenos trains and deploys ready-to-work Data & AI professionals via Digdeep Academy.",
    type: "website",
    locale: "en_US",
    siteName: "Tenos Data Teknologi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenos Data Teknologi | Building Data & AI Talent",
    description:
      "We don't search for talent. We build them. Ready-to-work Data & AI manpower via Digdeep Academy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
