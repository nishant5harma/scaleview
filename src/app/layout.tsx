import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LeadPopup from "@/components/LeadPopup";
import Chatbot from "@/components/Chatbot";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleview.ai"),
  title: "ScaleView - AWS Cloud Consulting and IT Managed Services",
  description:
    "ScaleView — your AWS & Azure cloud consulting and AI-native managed IT partner for SMBs and mid-market. Migration, DevOps, cybersecurity & more.",
  icons: {
    icon: "/images/logo.png",
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
      <body className="min-h-full bg-white">
        {children}
        <LeadPopup />
        <Chatbot />
      </body>
    </html>
  );
}
