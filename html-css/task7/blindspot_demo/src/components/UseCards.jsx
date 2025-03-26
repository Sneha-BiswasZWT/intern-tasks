import React from "react";
import Image from "next/image";

function UseCards({ imageSrc, content, width }) {
  return (
    <div className=" pb-6 md:w-1/4 sm:w-1/2 pr-[30px] ">
      <div className="pl-[12px] border-l-1 border-[#BCBCBC]/40 h-full ">
        <div className="min-h-[70px]  h-[88px] pb-[23px]">
          <Image
            src={imageSrc}
            alt="card Image"
            width={width}
            height={65}
            className=" max-h-[65px] "
          />
        </div>
        <div>
          <h6 className="font-bold text-secondary">{content}</h6>
        </div>
      </div>
    </div>
  );
}

export default UseCards;
