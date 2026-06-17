import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why ScaleView — A partner that grows with you",
  description:
    "Senior-led, outcome-obsessed cloud delivery for growing businesses. See why teams choose ScaleView and how we work.",
};

export default function WhyScaleViewPage() {
  return (
    <>
      <Header solid />
      <main className="pt-[4.5rem]">
        <About />
        <Expertise />
        <div className="bg-white pt-16 sm:pt-24" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
