import React from "react";
import Image from "next/image";

function ValueCards({ imageSrc, title, content, width }) {
  return (
    <div className="lg:pt-[44px] pt-0 pb-6 md:w-1/2  lg:w-1/4  ">
      <div className="pl-[12px] border-l-1 border-[#BCBCBC]/40 h-full ">
        <div className="max-h-[65px] pb-[23px]">
          <Image src={imageSrc} alt="card Image" width={width} height={65} />
        </div>
        <div>
          <h6 className=" font-bold text-secondary pb-[21px] relative after:absolute after:bottom-0 after:h-[5px] after:w-[39.75px] after:content-[''] after:left-0 after:bg-[#BCBCBC]/40">
            {title}
          </h6>
          <p className=" text-secondary pt-6 pr-[1.875rem]">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ValueCards;
