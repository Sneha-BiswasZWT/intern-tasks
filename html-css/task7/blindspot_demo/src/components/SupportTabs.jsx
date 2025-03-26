import React from "react";
import Image from "next/image";

function SupportTabs(rotation) {
  return (
    <div
      className=" py-5 flex border-5 border-primary  relative after:content: ''
    after:absolute
    after:right-0
    after:top-0"
    >
      <div className=" wrapper-container">
        <p>Sales Support</p>
        <div className="w-[17px]">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={17}
            height={17}
            style={{ transform: `rotate(${rotation}deg)` }}
            className="border border-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SupportTabs;
