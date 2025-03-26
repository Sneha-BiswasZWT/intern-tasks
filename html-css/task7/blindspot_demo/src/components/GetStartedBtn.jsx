import React from "react";
import Image from "next/image";

function GetStartedBtn({ text = "Get Started", rotation = 0, onClick }) {
  return (
    <button
      onClick={onClick}
      className="leading-none pr-4 py-[20px] bg-primary rounded-4xl text-white hover:bg-white hover:text-secondary flex items-center gap-2 cursor-pointer transition duration-300 focus:outline-none"
    >
      <h4 className="pr-[30px] pl-[28px]">{text}</h4>
      <div className="w-[22px]">
        {" "}
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={22}
          height={22}
          style={{ transform: `rotate(${rotation}deg)` }}
          className="border border-primary rounded-full"
        />
      </div>
    </button>
  );
}

export default GetStartedBtn;
