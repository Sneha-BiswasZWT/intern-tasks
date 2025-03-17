import React from "react";
import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    title: "Title 01",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, dolor mattis sit phasellus mollis sit aliquam sit nullam neques.",
    image: "/banner-image3.png",
  },
  {
    title: "Title 02",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, dolor mattis sit phasellus mollis sit aliquam sit nullam neques.",
    image: "/banner-image2.png",
  },
  {
    title: "Title 03",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, dolor mattis sit phasellus mollis sit aliquam sit nullam neques.",
    image: "/banner-image1.png",
  },
];

export default function CardSection() {
  return (
    <div className="py-6 px-12 lg:py-[5rem] lg:px-[11.875rem] flex flex-col items-center flex-wrap justify-center bg-[#CDD3DC]">
      <div className="flex flex-col justify-center  max-w-2xl pb-12">
        <h1 className="text-4xl text-primary font-semibold text-center pb-4">
          Highly effective solutions
        </h1>
        <p className="text-md text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="flex rounded-md shadow-lg w-full m:w-1/3 flex-col bg-white max-w-[20.75rem]"
          >
            <div className="px-[2rem] py-[2.5rem] w-full">
              <h2 className="text-[1.5rem] font-semibold text-primary pb-4">
                {banner.title}
              </h2>
              <p className="text-gray-500 text-[1rem] pb-6">{banner.content}</p>
              <div className="flex justify-end">
                <Link href="/" className="text-sm text-primary underline">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="w-full relative h-[12.9375rem]">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover rounded-b-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
