"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const Testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    name: "- Brian Clark",
  },
  {
    content:
      "My father always told me I was sent here to save mankind. Maybe this is my true destiny",
    name: "- Clark Kent",
  },
  {
    content:
      "Banana Banana Banana Banana Banana Banana Banana Bananaaaa Banana Banana",
    name: "- Kevin Minion",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [height, setHeight] = useState("auto");

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % Testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + Testimonials.length) % Testimonials.length
    );
  };

  // Auto-play in mobile
  useEffect(() => {
    const autoPlay = window.innerWidth < 640;
    if (autoPlay) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackTouch: true,
  });

  // Adjust height based on current slide content
  useEffect(() => {
    const textBlock = document.getElementById("testimonial-content");
    if (textBlock) {
      setHeight(`${textBlock.clientHeight}px`);
    }
  }, [current]);

  return (
    <div
      {...handlers}
      className="py-6 px-2 lg:py-[5rem] lg:px-[11.875rem] flex flex-wrap justify-center bg-[#E8EBEF] relative"
    >
      <div className="flex flex-col justify-center w-full h-auto lg:max-w-[52.5rem] pb-6 items-center relative">
        <h1 className="text-2xl lg:text-4xl text-primary font-semibold text-center">
          Testimonials
        </h1>

        <div className="flex justify-center items-center relative w-full pb-6">
          {/* Arrows for large screens */}
          <button
            className="hidden lg:block absolute left-[-3rem] transform -translate-y-1/2 rounded-sm hover:border-1 border-[#d0d2da] transition duration-300 cursor-pointer p-[10px] lg:mr-[6.75rem]"
            onClick={prevSlide}
          >
            <Image src="/arrow2.png" alt="prev" width={15} height={15} />
          </button>

          <div
            className="flex flex-col items-center relative w-full transition-all duration-500"
            style={{ height }}
          >
            {Testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={current === index ? "testimonial-content" : ""}
                className={`w-full flex justify-center transition-opacity duration-500 ${
                  current === index ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <div className="p-3 lg:p-6 font-semibold text-center text-[#76879D] text-xl/[1.75rem] sm:text-2xl/[1.75rem] flex flex-wrap justify-center max-w-[80%] sm:max-w-[70%]">
                  <Image
                    src="/quotes.png"
                    alt="quotes"
                    width={34}
                    height={28}
                    className="pb-8 h-12 w-5 lg:h-15 lg:w-10"
                  />
                  <h1>{testimonial.content}</h1>
                  <h1 className="pt-[2.5rem]">{testimonial.name}</h1>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button for large screens */}
          <button
            className="hidden lg:block absolute right-[-3rem] transform -translate-y-1/2 hover:border-1 border-[#d0d2da] rounded-sm transition duration-300 cursor-pointer p-[10px] lg:ml-[6.75rem]"
            onClick={nextSlide}
          >
            <Image
              src="/arrow2.png"
              alt="next"
              width={15}
              height={15}
              className="rotate-180"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
