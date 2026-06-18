import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const CloudPartners = dynamic(() => import("@/components/CloudPartners"));
const WhatWeDo = dynamic(() => import("@/components/WhatWeDo"));
const Hyperscaler = dynamic(() => import("@/components/Hyperscaler"));
const Integrations = dynamic(() => import("@/components/Integrations"));
const Security = dynamic(() => import("@/components/Security"));
const Stats = dynamic(() => import("@/components/Stats"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const StartWith = dynamic(() => import("@/components/StartWith"));
const Faq = dynamic(() => import("@/components/Faq"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "ScaleView - AWS Cloud Consulting and IT Managed Services",
  description:
    "ScaleView — your AWS & Azure cloud consulting and AI-native managed IT partner for SMBs and mid-market. Migration, DevOps, cybersecurity & more.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="sv-defer-section">
          <CloudPartners />
        </div>
        <div className="sv-defer-section">
          <WhatWeDo />
        </div>
        <div className="sv-defer-section">
          <Hyperscaler />
        </div>
        <div className="sv-defer-section">
          <Integrations />
        </div>
        <div className="sv-defer-section">
          <Security />
        </div>
        <div className="sv-defer-section">
          <Stats />
        </div>
        <div className="sv-defer-section">
          <Testimonials />
        </div>
        <div className="sv-defer-section">
          <StartWith />
        </div>
        <div className="sv-defer-section">
          <Faq />
        </div>
        <div className="sv-defer-section">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
