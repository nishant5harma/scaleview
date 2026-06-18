"use client";

import dynamic from "next/dynamic";

const LeadPopup = dynamic(() => import("@/components/LeadPopup"), { ssr: false });
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

export default function DeferredWidgets() {
  return (
    <>
      <LeadPopup />
      <Chatbot />
    </>
  );
}
