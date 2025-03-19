import React from "react";
import Image from "next/image";
import Link from "next/link";

function GetStartedBtn({ text = "Get Started", rotation = 0 }) {
  return (
    <button className=" leading-none pr-4 py-[20px] bg-primary rounded-4xl text-white hover:bg-white hover:text-secondary flex items-center gap-2 cursor-pointer">
      <h4 className="pr-[30px] pl-[28px]">{text}</h4>
      <Image
        src="/arrow.svg"
        alt="arrow"
        width={22}
        height={22}
        style={{ transform: `rotate(${rotation}deg)` }}
        className="border-1 border-primary rounded-full "
      />
    </button>
  );
}

export default GetStartedBtn;
