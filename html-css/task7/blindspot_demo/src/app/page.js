"use client";
import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import UsesCases from "@/components/UsesCases";
import ValueSection from "@/components/ValueSection";
import SupportSection from "@/components/SupportSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

export default function Home() {
  const useCasesRef = useRef(null);
  const valueRef = useRef(null);
  const supportRef = useRef(null);

  return (
    <>
      <HeroSection />
      <PartnerSection
        useCasesRef={useCasesRef}
        valueRef={valueRef}
        supportRef={supportRef}
      />
      <div ref={useCasesRef}>
        <UsesCases />
      </div>
      <div ref={valueRef}>
        <ValueSection />
      </div>
      <div ref={supportRef}>
        <SupportSection />
      </div>

      <GetStartedSection />
      <Footer />
    </>
  );
}
