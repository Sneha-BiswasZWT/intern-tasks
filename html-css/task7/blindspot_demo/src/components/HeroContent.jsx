import React from "react";
import Image from "next/image";

function HeroContent({ imageSrc, altText, heading, subheading }) {
  return (
    <>
      <div className=" w-[236.13px]">
        <Image src={imageSrc} alt={altText} width={236.13} height={76.56} />
      </div>
      <h6 className="font-bold pt-3" style={{ letterSpacing: "3.6px" }}>
        {" "}
        FOR{" "}
      </h6>
      <h1 className="font-light mb-[7px]">{heading}</h1>
      <h6
        className="font-bold pt-[28px] pb-[20px] relative before:absolute before:top-0 before:bg-white before:left-0 before:w-[68px] before:h-[5px] before:content-['']"
        style={{ letterSpacing: "3.6px" }}
      >
        {subheading}
      </h6>
    </>
  );
}

export default HeroContent;
