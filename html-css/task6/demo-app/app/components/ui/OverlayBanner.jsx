import React from "react";
import Image from "next/image";

export default function OverlayBanner() {
  return (
    <div className="py-6 px-6 lg:py-[5rem] lg:px-[11.875rem] flex flex-wrap justify-center  relative  overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <Image
          src={"/blog1.png"}
          alt={"banner image"}
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-primary/80 flex justify-center items-center"></div>
      </div>
      <div>
        <div className="lg:max-w-[40rem]   duration-300 p-6 flex justify-center items-center flex-col ">
          <h1 className=" text-2xl sm:text-5xl font-semibold text-center text-white">
            Call To Action
          </h1>

          <div className="text-gray-300 text-sm text-center p-6">
            <p>
              Mi dui pharetra ut ultricies viverra tempor. Egestas erat ac amet
              id diam pharetra ullamcorper.
            </p>
          </div>

          <div>
            <button className="text-sm text-primary bg-white py-[.875rem] px-[1.125rem] rounded-sm hover:bg-gray-600 hover:text-white cursor-pointer gap-3 items-center flex flex-wrap justify-center">
              <p> Button</p>
              <Image
                src={"/arrow3.png"}
                alt={"arrow"}
                width={20}
                height={20}
                className="w-4 h-3"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
