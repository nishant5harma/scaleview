import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import DeferredWidgets from "@/components/DeferredWidgets";
import GoogleTagManager from "@/components/GoogleTagManager";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleview.ai"),
  title: "ScaleView - AWS Cloud Consulting and IT Managed Services",
  description:
    "ScaleView — your AWS & Azure cloud consulting and AI-native managed IT partner for SMBs and mid-market. Migration, DevOps, cybersecurity & more.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/apple-icon.png",
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
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href="/images/hero-team.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full bg-white">
        <PageLoader />
        <GoogleTagManager />
        {children}
        <DeferredWidgets />
      </body>
    </html>
  );
}
