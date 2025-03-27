import React from "react";
import Image from "next/image";

function ScrollBtn({ text = "Get Started", rotation = 0, onClick }) {
  return (
    <button
      onClick={onClick}
      className="leading-none pr-4 py-[15px] bg-primary rounded-4xl text-white hover:bg-white hover:text-secondary flex items-center gap-2 cursor-pointer transition duration-300 focus:outline-none"
    >
      <h4 className="lg:px-7 px-4 !text-xl md:!text-2xl ">{text}</h4>
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

export default ScrollBtn;
