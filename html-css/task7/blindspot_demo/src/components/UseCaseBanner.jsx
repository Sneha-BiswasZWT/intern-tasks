import React from "react";
import GetStartedBtn from "./GetStartedBtn";
import Image from "next/image";

function UseCaseBanner({ title, tabName, description, imageSrc }) {
  return (
    <div className="wrapper-container">
      <div className="flex flex-col lg:flex-row pt-[42px] pb-[24px] text-secondary relative after:absolute after:bottom-0 after:bg-[#BCBCBC] after:left-0 after:w-full after:h-[5px] after:content-['']">
        <div className=" w-full ">
          <h6 className="font-bold" style={{ letterSpacing: "3.6px" }}>
            {tabName}
          </h6>
          <h2 className="font-bold">{title}</h2>
        </div>
        <div className="w-full lg:w-5/12 flex  my-auto lg:justify-end px-[0.95rem] lg:pl-[0.95rem] pl-0">
          <GetStartedBtn />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-[2rem] justify-between items-center ">
        <h2 className="w-full  lg:w-6/12 font-light text-secondary pr-[30px] !text-3xl !md:text-4xl lg:!text-[3.6875rem]">
          {description}
        </h2>
        <div className="w-full lg:w-6/12 lg:pl-[30px] mt-4 lg:mt-0">
          <Image src={imageSrc} alt="banner Image" width={529} height={293} />
        </div>
      </div>
    </div>
  );
}

export default UseCaseBanner;
