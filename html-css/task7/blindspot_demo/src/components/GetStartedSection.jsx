import React from "react";
import Image from "next/image";
import GetStartedBtn from "./GetStartedBtn";

function GetStartedSection() {
  return (
    <div>
      <section className="bg-[#3d9698] md:bg-white relative ">
        <Image
          src="/desktop-mock.png"
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="absolute hidden md:block "
        ></Image>
        <div className="wrapper-container section-content text-white relative pt-[70px] pb-12 ">
          <div className="section-content-inner w-full md:w-1/2">
            <h6 className="font-bold" style={{ letterSpacing: "3.6px" }}>
              GET STARTED
            </h6>
            <h2 className="font-light pb-6 relative !text-4xl md:!text-[2.5rem] after:absolute after:bottom-0 after:w-[68px] after:h-[5px] after:content-[''] after:left-0 after:bg-white ">
              Contact Us to Learn More
            </h2>
            <h4 className="pt-[30px] !text-xl md:!text-2xl pb-5">
              Consulting firms around the world are adding this capability to
              meet market expectations. Don’t wait! Get BlindSPOT today and
              secure your firms future.
            </h4>
            <button className=" leading-none pr-4 py-[20px] bg-white rounded-4xl text-primary hover:bg-primary hover:text-white flex items-center gap-2 cursor-pointer">
              <h4 className="pr-[30px] pl-[28px] !text-xl md:!text-2xl">
                Become a Partner
              </h4>
              <div className="w-[22]">
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={22}
                  height={22}
                  className="border-1 border-primary rounded-full "
                />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetStartedSection;
