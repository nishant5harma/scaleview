import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CloudPartners from "@/components/CloudPartners";
import Hyperscaler from "@/components/Hyperscaler";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import WhatWeDo from "@/components/WhatWeDo";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import StartWith from "@/components/StartWith";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
        <CloudPartners />
        <WhatWeDo />
        <Hyperscaler />
        <Integrations />
        <Security />
        <Stats />
        <Testimonials />
        <StartWith />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
