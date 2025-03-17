"use client";

import React, { useState } from "react";

const accordionData = [
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
  },
];

export default function QuestionsSection() {
  const [activeIndex, setActiveIndex] = useState(0); // First accordion open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-6 px-6 lg:py-[5rem] lg:px-[11.875rem] flex flex-wrap flex-col justify-center items-center bg-white">
      <h1 className="text-4xl text-primary font-semibold text-center pb-12 ">
        Frequently asked questions
      </h1>
      <div className="max-w-[50rem]">
        {accordionData.map((item, index) => (
          <div key={index} className=" mb-[1.25rem] ">
            <button
              className="w-full text-left py-8 px-12 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition cursor-pointer rounded-xs"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-lg text-primary">
                {item.title}
              </span>
              <span className="text-xl">
                {activeIndex === index ? "x" : "+"}
              </span>
            </button>
            <div
              className={`px-12 bg-gray-100 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-[35rem] pb-8" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
