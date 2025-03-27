"use client";

import React, { useState } from "react";
import ValueCards from "./ValueCards";
import EngageCards from "./EngageCards";
import Image from "next/image";

const data = {
  valueCards: [
    {
      imageSrc: "/Group 4116.png",
      width: 61,
      title: "Strengthen your offering",
      content:
        "Companies around the world are looking for a way to regularly test their security controls within their budget. BlindSPOT will empower your firm to provide this capability at an affordable price and at scale.",
    },
    {
      imageSrc: "/Group 4093.png",
      width: 59,
      title: "Stay Sticky with Your Clients",
      content:
        "Retaining clients in this competitive market is tough. With BlindSPOT, you can now provide your clients a critical and embedded solution that will keep you in the game no matter what.",
    },
    {
      imageSrc: "/Group 4046.png",
      width: 67,
      title: "Win New Clients",
      content:
        "Over 90% of corporations already work with an information security. With BlindSPOT, you can provide a unique service that your competition doesn’t allowing you to “land and expand”.",
    },
    {
      imageSrc: "/Group 4019.png",
      width: 70,
      title: "Recurring Revenue Streams",
      content:
        "BlindSPOT simulation services show the need to continuously test security controls. This is why over 50% of BlindSPOT one-time simulation engagements convert into monthly simulations as a service.",
    },
  ],
  engageCards: [
    {
      title: "Annual Subscription",
      subtitle: "Are You Ready to Scale?",
      color: "#AD53F0",
      number: "01",
      content:
        "Offer clients one-time and on-going managed simulations as a service.",
    },
    {
      title: "Project-Based",
      subtitle: "Not Ready to Subscribe?",
      color: "#EB6272",
      number: "02",
      content: "You can rent our platform on a project-by-project basis.",
    },
    {
      title: "Try Before You Buy",
      subtitle: "See it in Action with No Risk?",
      color: "#F2CC63",
      number: "03",
      content:
        "Private-label our team until you are ready to run with your team.",
    },
  ],
};

function ValueSection() {
  return (
    <>
      <div className="bg-white">
        <div className="wrapper-container py-[31px] relative">
          <Image
            src="/bg.png"
            alt="Bg"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          ></Image>
          <div className="relative z-10">
            <div>
              <p className="font-light text-secondary text-4xl sm:text-[59px]">
                Value & Engagement Options
              </p>
              <div className=" pt-7 pb-6 text-secondary font-bold border-b-5 border-[#BCBCBC]  lg:mb-0 mb-11 w-full">
                <h6 style={{ letterSpacing: "3.6px" }}>
                  BLINDSPOT PARTNER VALUE
                </h6>
                <h2 className="!text-3xl sm:!text-[2.5rem]">
                  Add Value at Scale and Stand Out From The Competition
                </h2>
              </div>
            </div>

            <div className="flex flex-col flex-wrap md:flex-row">
              {data.valueCards.map((card, index) => (
                <ValueCards
                  key={index}
                  imageSrc={card.imageSrc}
                  width={card.width}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="wrapper-container pb-[1.9375rem] ">
          <div>
            <div className="  pt-[50px] pb-6 text-white font-bold border-b-5 border-[#BCBCBC] w-full">
              <h6 style={{ letterSpacing: "3.6px" }}>ENGAGEMENT OPTIONS</h6>
              <h2 className="!text-3xl md:!text-[2.5rem]">
                3 Convenient Options Based on Your Needs
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap">
            {data.engageCards.map((card, index) => (
              <EngageCards
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                color={card.color}
                number={card.number}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ValueSection;
