import React from "react";
import Image from "next/image";

function TabBtn({ text, rotation, state, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`leading-none pr-4 py-[9px] border border-white rounded-4xl flex items-center gap-2 cursor-pointer transition-all duration-300 
        ${
          state === "active"
            ? "bg-white text-primary tab-active"
            : "bg-primary text-white border-white"
        }
        hover:bg-white hover:text-secondary`}
    >
      <h6 className=" pl-[1.75rem] leading-none">{text}</h6>
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
    </button>
  );
}

export default TabBtn;
