"use client";
import React from "react";
import ScrollBtn from "./ScrollBtn";

function PartnerSection({ useCasesRef, valueRef, supportRef }) {
  const handleScroll = (ref) => {
    if (ref && ref.current) {
      const offset = 115; // Adjust this value to match your navbar height
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-secondary">
      <div className="wrapper-container text-white flex flex-col py-[2.1875rem]">
        <div className="font-bold text-center">
          <h4 className="pb-[30px]">
            BlindSPOT was built by consultants for consultants as a Service
            Enablement tool.
          </h4>
          <h6 style={{ letterSpacing: "3.6px" }}>
            FIND OUT WHAT IT MEANS TO BE A BLINDSPOT PARTNER
          </h6>
        </div>
        <div className="flex flex-col flex-wrap xl:flex-row pt-[1.875rem] items-center justify-center">
          <div className="px-[11px]">
            <ScrollBtn
              text="Partner Use Cases"
              rotation={90}
              onClick={() => handleScroll(useCasesRef)}
            />
          </div>
          <div className="px-[11px] mt-6 xl:mt-0">
            <ScrollBtn
              text="Value & Engagement Options"
              rotation={90}
              onClick={() => handleScroll(valueRef)}
            />
          </div>
          <div className="px-[11px] mt-6 xl:mt-0">
            <ScrollBtn
              text="Partner Support"
              rotation={90}
              onClick={() => handleScroll(supportRef)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
