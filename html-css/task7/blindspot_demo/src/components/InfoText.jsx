import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function InfoText({ text }) {
  return (
    <div className="wrapper-container ">
      <div className="flex items-center  mt-6 py-6 bg-[#65D193] rounded-[10px]">
        <div className="px-4 text-3xl text-white">
          <BsCheckCircleFill />
        </div>
        <div className="text-secondary pr-3 sm:pr-9">{text}</div>
      </div>
    </div>
  );
}
