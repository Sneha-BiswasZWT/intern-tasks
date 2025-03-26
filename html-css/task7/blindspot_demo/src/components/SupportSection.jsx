import React from "react";
import Image from "next/image";
import UseCards from "./UseCards";
import GetStartedBtn from "./GetStartedBtn";
import SupportTabs from "./SupportTabs";
import { BsCheckCircleFill } from "react-icons/bs";

const cardData = [
  {
    imageSrc: "/Group 4091.png",
    content:
      "Automating ransomware, supply chain and other attack simulations.",
    width: 72,
  },
  {
    imageSrc: "/Group 4089.png",
    content: "Enabling C2 and custom payload delivery.",
    width: 61,
  },
  {
    imageSrc: "/Group 4087.png",
    content: "Visualizing security control 'blind spots'.",
    width: 62,
  },
  {
    imageSrc: "/Group 4086.png",
    content: "Generating stakeholder graphics and reporting.",
    width: 61,
  },
];

function SupportSection() {
  return (
    <div className="bg-white relative">
      <Image
        src="/bg.png"
        alt="Bg"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      ></Image>
      <div>
        <div className="wrapper-container py-[31px] ">
          <div>
            <h2 className="font-light text-secondary !text-[3.125rem] md:!text-[3.6875rem] ">
              Partner Support
            </h2>
            <div className=" pt-7 pb-6 text-secondary  border-b-5 border-[#BCBCBC]/40 w-full">
              <h4 className="!text-lg md:!text-2xl">
                When you become a BlindSPOT partner, we provide full turnkey
                support to ensure BlindSPOT will:
              </h4>
            </div>
          </div>

          <div className="relative">
            {/* card section */}
            <div className="flex  flex-wrap flex-row pt-[44px]">
              {cardData.map(({ imageSrc, content, width }, index) => (
                <UseCards
                  key={index}
                  imageSrc={imageSrc}
                  content={content}
                  width={width}
                />
              ))}

              {/* <div className="py-10 flex items-start flex-col lg:flex-row ">
              <div className=" text-secondary w-full lg:8/12 xl:w-full">
                <h6 className="font-bold" style={{ letterSpacing: "3.6px" }}>
                  JOURNEY TO SUCCESS
                </h6>
                <h2 className="font-bold">
                  Our Turn-Key Support Ensures Your Success
                </h2>
              </div>
              <div className="w-full md:w-6/12 xl:w-4/12 flex  my-auto xl:justify-end px-[0.95rem] mt-3  xl:mt-0 xl:pl-[0.95rem] pl-0">
                <GetStartedBtn />
              </div>
            </div> */}
            </div>
          </div>
          {/* <div className="wrapper-container relative">
          <div className=" bg-secondary text-white rounded-r-lg accordian w-[500px]">
            <div className="pt-4 pl-6 pb-7">
              <div className="flex">
                {/* <h3 className=" font-light pb-6  relative after:absolute after:bottom-0 after:h-[5px] after:w-[68px] after:content-[''] after:left-0 after:bg-white">
                  Private Labeled Marketing
                </h3> */}
          {/* <div className="w-[30px] pr-1">
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width={17}
                    height={17}
                    className=" rounded-full rotate-90"
                  />
                </div>
              </div>
              <h6 className="font-bold pt-7">
                We provide private-labeled, client-ready marketing materials so
                your team can immediately start selling.
              </h6>
            </div>
          </div>
        </div> */}

          <section className="tab-section relative">
            <div className="py-10 flex items-start flex-col lg:flex-row lg:items-center">
              <div className=" text-secondary w-full lg:8/12 xl:w-full">
                <h6 className="font-bold" style={{ letterSpacing: "3.6px" }}>
                  JOURNEY TO SUCCESS
                </h6>
                <h2 className="font-bold !text-5xl md:!text-[3.6875rem] md:max-w-full max-w-10/12">
                  Our Turn-Key Support Ensures Your Success
                </h2>
              </div>
              <div className="w-full md:w-6/12 xl:w-4/12 flex  xl:justify-end px-[0.95rem] mt-3  xl:mt-0 xl:pl-[0.95rem] pl-0">
                <GetStartedBtn />
              </div>
            </div>
            <div className="tab-wrapper flex xl:flex-row flex-col flex-wrap items-start justify-between">
              <div className="xl:w-1/3 md:w-11/12 w-10/12">
                <div className="tab-single active relative accordian ">
                  <div className="tab-single-inner  bg-secondary text-white   pt-4  pb-7">
                    <div className="flex justify-between">
                      <h3 className=" font-light pb-6 max-w-[245px] relative after:absolute after:bottom-0 after:h-[5px] after:w-[68px] after:content-[''] after:left-0 after:bg-white">
                        Private Labeled Marketing
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
                    <h6 className="font-bold pt-7 max-w-[330px]">
                      We provide private-labeled, client-ready marketing
                      materials so your team can immediately start selling.
                    </h6>
                  </div>
                </div>

                <div className="tab-single  mt-4 relative  after:h-full after:absolute after:w-screen after:border-primary after:border-r-0 after:border-5  after:top-0 after:right-full">
                  <div className="tab-single-inner font-medium py-5 pr-4 rounded-r-full border-5 border-primary border-l-0   flex justify-between items-center text-sm ">
                    Sales Support
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
                <div className="tab-single  mt-4 relative  after:h-full after:absolute after:w-screen after:border-primary after:border-r-0 after:border-5  after:top-0 after:right-full">
                  <div className="tab-single-inner py-5 font-medium pr-4 rounded-r-full border-5 border-primary border-l-0   flex justify-between items-center text-sm">
                    Technical Support
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
              </div>

              <div className=" w-full xl:w-2/3 md:flex pt-6 xl:pt-0 hidden ">
                <div className="w-1/2 xl:pl-15">
                  <div className="tab-content">
                    <div className="tab-content-inner">
                      <div className="tab-image  w-[21.875rem] h-full">
                        <Image
                          src="/tabimg.png"
                          alt="banner Image"
                          width={529}
                          height={600}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-listing w-1/2 text-secondary pl-15">
                  <h4 className="font-bold">Materials Include:</h4>
                  <ul className="pt-6">
                    <li className="flex pb-5 items-center font-bold">
                      <div className="text-primary pr-2.5">
                        <BsCheckCircleFill />{" "}
                      </div>
                      Sales Flyers
                    </li>
                    <li className="flex pb-5 items-center font-bold">
                      <div className="text-primary pr-2.5">
                        <BsCheckCircleFill />{" "}
                      </div>
                      Fact Sheets
                    </li>
                    <li className="flex pb-5 items-center font-bold">
                      <div className="text-primary pr-2.5">
                        <BsCheckCircleFill />{" "}
                      </div>
                      Promotional Videos
                    </li>
                    <li className="flex pb-5 items-center font-bold">
                      <div className="text-primary pr-2.5">
                        <BsCheckCircleFill />{" "}
                      </div>
                      Technical Documentation
                    </li>
                    <li className="flex pb-5 items-center font-bold">
                      <div className="text-primary pr-2.5">
                        <BsCheckCircleFill />{" "}
                      </div>
                      And More!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SupportSection;
