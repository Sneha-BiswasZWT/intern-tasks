import React from "react";
import Image from "next/image";

function SupportTabs({ title, description, state }) {
  return (
    <div>
      {state === "active" ? (
        <div className="tab-single active relative accordian ease-in ">
          <div className="tab-single-inner  bg-secondary text-white   pt-4  pb-7">
            <div className="flex justify-between">
              <h3 className=" font-light pb-6 w-11/12 relative after:absolute after:bottom-0 after:h-[5px] after:w-[68px] after:content-[''] after:left-0 after:bg-white">
                {title}
              </h3>
              <div className="w-[22px] pr-1">
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={50}
                  height={50}
                  className=" rounded-full rotate-90"
                />
              </div>
            </div>
            <h6 className="font-bold pt-7 max-w-[330px]">{description}</h6>
          </div>
        </div>
      ) : (
        <div className="tab-single cursor-pointer my-4 relative  after:h-full after:absolute after:w-screen after:border-primary after:border-r-0 after:border-5  after:top-0 after:right-full">
          <div className="tab-single-inner font-medium py-5 pr-4 rounded-r-full border-5 border-primary border-l-0   flex justify-between items-center text-sm ">
            {title}
            <div className="w-[22px] pr-1">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={50}
                height={50}
                className=" rounded-full border-2 border-primary"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SupportTabs;
