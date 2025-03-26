"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabBtn from "./TabBtn";
import UseCaseBanner from "./UseCaseBanner";
import Image from "next/image";
import UseCardTitle from "./UseCardTitle";
import UseCards from "./UseCards";
import InfoText from "./InfoText";
import UseCasesFooter from "./UseCasesFooter";

const tabData = [
  {
    id: "tab1",
    tabName: "Penetration Testing",
    title: "Expand Your Service Capability",
    description:
      "Security control failures are what keep CISOs up at night and they can’t afford a pentest every two weeks to find these 'blind spots'.",
    imageSrc: "/Group 3941.png",
    solutions: [
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
    ],
    empowerments: [
      {
        imageSrc: "/Group 4091.png",
        content: "Helping you automate advanced security testing.",
        width: 72,
      },
      {
        imageSrc: "/Group 4089.png",
        content: "Providing real-time threat intelligence and reports.",
        width: 61,
      },
      {
        imageSrc: "/Group 4087.png",
        content: "Enhancing continuous security validation processes.",
        width: 62,
      },
      {
        imageSrc: "/Group 4086.png",
        content: "Enabling better risk assessment and mitigation.",
        width: 61,
      },
    ],
    infoText:
      "Over 50% of one-time simulation services convert to monthly simulations as a managed service.",
  },
  {
    id: "tab2",
    tabName: "Purple Teaming",
    title: "Automation & Improved Collaboration",
    description:
      "Purple team services are labor intensive and difficult to provide as a recurring service at a price customers can afford.",
    imageSrc: "/Group 3941.png",
    solutions: [
      {
        imageSrc: "/Group 4091.png",
        content: "Automating over 65% or purple teaming",
        width: 72,
      },
      {
        imageSrc: "/Group 4089.png",
        content: "Providing actionable insights to strengthen security.",
        width: 61,
      },
      {
        imageSrc: "/Group 4093.png",
        content: "Optimizing red & blue team collaboration",
        width: 59,
      },
      {
        imageSrc: "/Group 4086.png",
        content: "Generating stakeholder graphics and reporting.",
        width: 61,
      },
    ],
    empowerments: [
      {
        imageSrc: "/Group 4099.png",
        content: "Execute more projects with your existing team",
        width: 72,
      },
      {
        imageSrc: "/Group 4094.png",
        content: "Offer ongoing purple team as a managed service",
        width: 57,
      },
      {
        imageSrc: "/Group 4102.png",
        content: "Collaborate more effectively with self-service retesting",
        width: 67,
      },
      {
        imageSrc: "/Group 4101.png",
        content: "Demonstrate value to client stakeholders and leadership",
        width: 52,
      },
    ],
    infoText:
      "Over 50% of one-time simulation services convert to monthly simulations as a managed service.",
  },
  {
    id: "tab3",
    tabName: "Tabletop Exersises",
    title: "Why Pretend When You Can Simulate Attacks",
    description:
      "Tabletop exercises have a limited value due to the fact that pretending doesn’t prove the network defense team can actually detect and respond in time for the plan to work.",
    imageSrc: "/Group 3941.png",
    solutions: [
      {
        imageSrc: "/Group 4103.png",
        content: "Executing ransomware, supply chain and other cyber attacks",
        width: 61,
      },
      {
        imageSrc: "/Group 4104.png",
        content: "Proving network defense teams can respond",
        width: 64,
      },
      {
        imageSrc: "/Group 4106.png",
        content: "Validating the incident response plan actually works",
        width: 68,
      },
      {
        imageSrc: "/Group 4086.png",
        content: "Generating stakeholder graphics and reporting.",
        width: 61,
      },
    ],
    empowerments: [
      {
        imageSrc: "/Group 4111.png",
        content: "Provide more value during tabletop exercises",
        width: 56,
      },
      {
        imageSrc: "/Group 4019.png",
        content: "Separate your offering from the competition",
        width: 60,
      },
      {
        imageSrc: "/Group 4046.png",
        content: "Upsell simulations as a managed service",
        width: 67,
      },
      {
        imageSrc: "/Group 4108.png",
        content: "Create recurring revenue opportunity",
        width: 70,
      },
    ],
    infoText:
      "Over 50% of one-time simulation services convert to monthly simulations as a managed service.",
  },
  {
    id: "tab4",
    tabName: "MSSP Validation",
    title: "Prove Your Clients MSSP Will Respond",
    description:
      "Companies have no consistent way to prove their managed security provider can actually detect and respond to real-world-attacks.",
    imageSrc: "/Group 3941.png",
    solutions: [
      {
        imageSrc: "/Group 4091.png",
        content: "Automating over 65% or purple teaming",
        width: 72,
      },
      {
        imageSrc: "/Group 4089.png",
        content: "Providing actionable insights to strengthen security.",
        width: 61,
      },
      {
        imageSrc: "/Group 4093.png",
        content: "Optimizing red & blue team collaboration",
        width: 59,
      },
      {
        imageSrc: "/Group 4086.png",
        content: "Generating stakeholder graphics and reporting.",
        width: 61,
      },
    ],
    empowerments: [
      {
        imageSrc: "/Group 4099.png",
        content: "Execute more projects with your existing team",
        width: 72,
      },
      {
        imageSrc: "/Group 4094.png",
        content: "Offer ongoing purple team as a managed service",
        width: 57,
      },
      {
        imageSrc: "/Group 4102.png",
        content: "Collaborate more effectively with self-service retesting",
        width: 67,
      },
      {
        imageSrc: "/Group 4101.png",
        content: "Demonstrate value to client stakeholders and leadership",
        width: 52,
      },
    ],
    infoText:
      "Over 50% of one-time simulation services convert to monthly simulations as a managed service.",
  },
];

function UsesCases() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="bg-white">
        <div className="wrapper-container py-[28px]">
          <h1 className="font-light text-secondary !text-5xl md:!text-[3.6875rem]">
            Partner Use Cases
          </h1>
        </div>

        {/* Tab Buttons */}
        <div className="bg-primary flex flex-col lg:flex-row py-[13.5px] justify-center items-center">
          {tabData.map(({ id, tabName }) => (
            <div key={id} className="px-[7.5px] my-4 lg:my-0">
              <TabBtn
                text={tabName}
                state={activeTab === id ? "active" : "inactive"}
                rotation={activeTab === id ? 90 : 0}
                onClick={() => setActiveTab(id)}
              />
            </div>
          ))}
        </div>

        {/* Animated Tab Content */}
        <div className="relative bg-white overflow-hidden min-h-[500px]">
          <Image
            src="/bg.png"
            alt="Bg"
            layout="fill"
            objectFit="cover"
            className="absolute"
          ></Image>

          <AnimatePresence mode="wait">
            {tabData.map(
              ({
                id,
                tabName,
                title,
                description,
                imageSrc,
                solutions,
                empowerments,
                infoText,
              }) =>
                activeTab === id ? (
                  // <motion.div
                  //   key={id}
                  //   initial={{ x: 100, opacity: 0 }}
                  //   animate={{ x: 0, opacity: 1 }}
                  //   exit={{ x: -100, opacity: 0 }}
                  //   transition={{ duration: 0.5, ease: "easeInOut" }}
                  //   className="w-full"
                  // >
                  <div className="relative">
                    <UseCaseBanner
                      tabName={tabName}
                      title={title}
                      description={description}
                      imageSrc={imageSrc}
                    />

                    {/* First Section: Solutions */}
                    <UseCardTitle title="BlindSPOT Solves This Problem By:" />
                    <div className="flex wrapper-container flex-wrap flex-row pt-[44px]">
                      {solutions.map(({ imageSrc, content, width }, index) => (
                        <UseCards
                          key={index}
                          imageSrc={imageSrc}
                          content={content}
                          width={width}
                        />
                      ))}
                    </div>

                    <InfoText text={infoText} />

                    {/* Second Section: Empowerments */}
                    <UseCardTitle title="BlindSPOT Empowers You To:" />
                    <div className="flex wrapper-container flex-wrap flex-row pt-[44px]">
                      {empowerments.map(
                        ({ imageSrc, content, width }, index) => (
                          <UseCards
                            key={index}
                            imageSrc={imageSrc}
                            content={content}
                            width={width}
                          />
                        )
                      )}
                    </div>
                  </div>
                ) : // </motion.div>
                null
            )}
          </AnimatePresence>
        </div>
        <UseCasesFooter />
      </div>
    </>
  );
}

export default UsesCases;
