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
    default: "Tenos | AI Enablement for People & Organizations",
    template: "%s | Tenos Data Teknologi",
  },
  description:
    "Tenos helps people and organizations work smarter with AI, from literacy and applied workflows to intelligent system development.",
  keywords: [
    "Tenos",
    "Digdeep Academy",
    "AI Enablement",
    "AI Literacy",
    "AI Workflows",
    "AI Systems",
    "Indonesia",
    "Bootcamp",
    "Digital Transformation",
  ],
  authors: [{ name: "Tenos Data Teknologi" }],
  openGraph: {
    title: "Tenos | AI Enablement for People & Organizations",
    description:
      "From AI literacy to intelligent systems, Tenos empowers people and organizations to work smarter through practical AI enablement.",
    type: "website",
    locale: "en_US",
    siteName: "Tenos Data Teknologi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenos | AI Enablement for People & Organizations",
    description:
      "Tenos helps people and organizations work smarter with AI, from literacy and workflows to custom intelligent systems.",
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
