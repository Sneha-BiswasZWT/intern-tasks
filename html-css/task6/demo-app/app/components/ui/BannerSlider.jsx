"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const banners = [
  {
    title: "Discover the key to grow your business",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, dolor mattis sit phasellus mollis sit aliquam sit nullam neques.",
    image: "/banner-image1.png",
  },
  {
    title: "Discover the key to grow your business 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, dolor mattis sit phasellus mollis sit aliquam sit nullam neques.",
    image: "/banner-image2.png",
  },
  {
    title: "Discover the key to grow your business 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, dolor mattis sit phasellus mollis sit aliquam sit nullam neques.",
    image: "/banner-image3.png",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Auto-play in mobile view
  useEffect(() => {
    const autoPlay = window.innerWidth < 640;
    if (autoPlay) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackTouch: true,
  });

  return (
    <div {...handlers} className="relative w-full h-[32.25rem] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-500 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover brightness-50 -z-10"
          />

          <div className="w-[40rem] p-6 duration-300">
            <h1 className="text-2xl sm:text-5xl font-semibold text-center text-white">
              {banner.title}
            </h1>

            <div className="text-gray-300 text-sm text-center p-4">
              <p>{banner.content}</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="text-sm text-black bg-white py-[.7rem] px-[1.125rem] rounded-sm hover:bg-gray-600 hover:text-white cursor-pointer leading-none">
                Learn More
              </button>
              <button className="text-sm text-white border border-white py-[.7rem] px-[1.125rem] rounded-sm hover:bg-gray-400 hover:text-black cursor-pointer leading-none">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-[1.875rem] w-full flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              current === index ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Arrows for large screens only */}
      <button
        className="hidden lg:block absolute top-1/2 left-[5rem] transform -translate-y-1/2 p-2 text-white rounded-full transition-colors duration-300 cursor-pointer"
        onClick={prevSlide}
      >
        <Image
          src="/arrow.png"
          alt="prev"
          width={24}
          height={24}
          className="rotate-180"
        />
      </button>

      <button
        className="hidden lg:block absolute top-1/2 right-[5rem] transform -translate-y-1/2 p-2 text-white rounded-full transition-colors duration-300 cursor-pointer"
        onClick={nextSlide}
      >
        <Image src="/arrow.png" alt="next" width={24} height={24} />
      </button>
    </div>
  );
};

export default BannerSlider;
