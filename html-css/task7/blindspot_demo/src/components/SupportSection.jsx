import React, { useState } from "react";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import UseCards from "./UseCards";
import GetStartedBtn from "./GetStartedBtn";
import SupportTabs from "./SupportTabs";

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

const tabData = [
  {
    id: "tab1",
    title: "Private Labeled Marketing",
    description:
      "We provide private-labeled marketing materials so your team can immediately start selling.",
    imgsrc: "/tabimg.png",
    listTitle: "Materials Include:",
    listData: [
      "Sales Flyers",
      "Fact Sheets",
      "Promotional Videos",
      "Technical Documentation",
      "And More!",
    ],
  },
  {
    id: "tab2",
    title: "Sales Support",
    description:
      "We work with your sales team to make sure they will convert one-time simulation and managed subscription opportunities.",
    imgsrc: "/supportimg2.jpg",

    listTitle: "We Provide Your Team With:",
    listData: [
      "Training",
      "Call Scripts",
      "Outbound Email Scripts",
      "Social Media Post Content",
      "Ongoing Sales Support",
      "Ongoing Q&A Support",
      "Demo Environment",
      "And More…",
    ],
  },
  {
    id: "tab3",
    title: "Technical Support",
    description:
      "We train and support your technical team so they will confidently excel with this new offering.",
    imgsrc: "/supportimg3.jpg",

    listTitle: "We help your team:",
    listData: [
      "Manage the BlindSPOT platform",
      "Answer platform technical questions",
      "Provide sales support",
      "Simulation & purple team playbooks",
      "Perform simulation professional services",
    ],
  },
];

function SupportSection() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  return (
    <div className="bg-white relative">
      <Image
        src="/bg.png"
        alt="Bg"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="wrapper-container py-[31px]">
        <h2 className="font-light text-secondary !text-[3.125rem] md:!text-[3.6875rem]">
          Partner Support
        </h2>
        <div className="pt-7 pb-6 text-secondary border-b-5 border-[#BCBCBC]/40 w-full">
          <h4 className="!text-lg md:!text-2xl">
            When you become a BlindSPOT partner, we provide full turnkey support
            to ensure BlindSPOT will:
          </h4>
        </div>

        {/* Card Section */}
        <div className="relative">
          <div className="flex flex-wrap flex-row pt-[44px]">
            {cardData.map(({ imageSrc, content, width }, index) => (
              <UseCards
                key={index}
                imageSrc={imageSrc}
                content={content}
                width={width}
              />
            ))}
          </div>
        </div>

        {/* Tab Section */}
        <section className="tab-section relative">
          <div className="py-10 flex items-start justify-center flex-col md:flex-row lg:items-center">
            <div className="text-secondary w-full lg:8/12 xl:w-full">
              <h6 className="font-bold" style={{ letterSpacing: "3.6px" }}>
                JOURNEY TO SUCCESS
              </h6>
              <h2 className="font-bold !text-5xl md:!text-[2.5rem] md:max-w-11/12  max-w-10/12">
                Our Turn-Key Support Ensures Your Success
              </h2>
            </div>
            <div className="w-full md:w-7/12 xl:w-4/12 flex items-start  xl:justify-end md:px-[0.95rem] mt-6  md:mt-0 xl:pl-[0.95rem]">
              <GetStartedBtn />
            </div>
          </div>

          <div className="tab-wrapper flex xl:flex-row flex-col flex-wrap items-start justify-between ">
            <div className="flex flex-col xl:w-1/3 md:w-11/12 w-10/12 pr-[60px]">
              {tabData.map(({ id, title, description }) => (
                <div key={id} onClick={() => setActiveTab(id)}>
                  <SupportTabs
                    title={title}
                    state={activeTab === id ? "active" : "inactive"}
                    description={description}
                  />
                </div>
              ))}
            </div>

            {/* Tab Content Section */}
            <div className="w-full xl:w-2/3 md:flex pt-6 xl:pt-0">
              {tabData.map(({ id, imgsrc, listTitle, listData }) =>
                activeTab === id ? (
                  <div
                    key={id}
                    className="flex w-full flex-col md:flex-row justify-around  xl:justify-normal"
                  >
                    {/* Image Section */}
                    <div className=" xl:px-[1.125rem]">
                      <div className="tab-content">
                        <div className="tab-content-inner">
                          <div className="tab-image w-[21.875rem] h-full">
                            <Image
                              src={imgsrc}
                              alt="banner Image"
                              width={529}
                              height={600}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* List Section */}
                    <div className="tab-listing  text-secondary pt-4 md:pt-0 px-[1.125rem]">
                      <h4 className="font-bold">{listTitle}</h4>
                      <ul className="pt-6">
                        {listData.map((item, index) => (
                          <li
                            key={index}
                            className="flex pb-5 items-center font-bold"
                          >
                            <div className="text-primary pr-2.5">
                              <BsCheckCircleFill />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SupportSection;
