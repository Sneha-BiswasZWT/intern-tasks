"use client";

<link
  href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
  rel="stylesheet"
></link>;

import { useEffect } from "react";

const images = [
  { src: "/emrald.jpg", description: "Emrald Green" },
  { src: "/bg-teal.png", description: "teal blue" },
  { src: "/baby-blue.jpg", description: "baby blue" },
  { src: "/lilac.webp", description: "lilac purple" },
  { src: "/baby-pink.jpg", description: "baby pink" },
  { src: "/peach.jpg", description: "peachy pink" },
  { src: "/maroon.webp", description: "maroon red" },
  { src: "/burgandy.jpeg", description: "burgandy wine" },
  { src: "/orange.jpg", description: "sunset orange" },
  { src: "/neon-orange.webp", description: "neon orange" },
  { src: "/gold.jpg", description: "yellow gold" },
  { src: "/yellow.jpg", description: "sunflower yellow" },
  { src: "/yellow.jpg", description: "sunflower yellow" },
  { src: "/yellow.jpg", description: "sunflower yellow" },
  { src: "/yellow.jpg", description: "" },
];

let h = 0;

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about_us");
      if (!element) return;

      const rect = element.getBoundingClientRect().top;
      if (rect <= 0) {
        element.classList.add("bg-violet-300");
      } else {
        element.classList.remove("bg-violet-300");
      }

      console.log(rect);
      // console.log({
      //   top: rect.top,
      //   left: rect.left,
      //   bottom: rect.bottom,
      //   right: rect.right,
      //   width: rect.width,
      //   height: rect.height,
      // });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex  justify-items-center  p-8  font-[family-name:var(--font-geist-sans)] flex-col">
        <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center md:items-start p-3 md:p-12 bg-red-100 rounded-xl">
          <div className=" flex flex-col items-center gap-5 md:flex-row pt-6 ">
            <h1 className="text-3xl text-cyan-900 text-center font-bold pb-6  sm:text-4xl lg:text-5xl">
              Color Pallete
            </h1>
            <h1 className=" h-1 bg-cyan-900 md:w-72 w-32"> </h1>
          </div>
          <div className="flex justify-center flex-wrap md:justify-normal -mx-[.9375rem]">
            {images.map((image, index) => (
              <div
                className={
                  "flex flex-wrap  xl:w-1/6 lg:w-1/4 md:w-1/3 sm:w-1/2 pb-6 px-[.9375rem]"
                }
              >
                <div className="bg-white shadow-md rounded-xl w-full hover:hover:scale-105 ">
                  <div key={index} className="flex flex-col">
                    <div className="img-wrap pb-[60%] relative">
                      <img
                        src={image?.src}
                        alt={`image-${index}`}
                        className="rounded-t-xl w-full absolute top-0 left-0 h-full object-cover"
                      />
                    </div>
                    <div className="py-10 px-4">
                      <h1 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md font-bold">
                        Pantone - {index + 1}
                      </h1>
                      <p className="text-sm text-gray-500">
                        {image?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <div
          className="flex flex-col gap-8 mt-6 row-start-2 items-center justify-center   md:items-start md:justify-items-start p-12 bg-blue-100 rounded-xl"
          id="about_us"
        >
          <div>
            <div className="flex flex-col ">
              <div className="flex flex-col items-center gap-5 md:flex-row justify-between ">
                <div className=" flex flex-col items-center gap-5 md:flex-row">
                  <h1 className="text-3xl text-cyan-900 text-center font-bold md:text-3xl lg:text-5xl pb-6">
                    About Us
                  </h1>
                  <h1 className=" h-1 bg-cyan-900 md:w-72 w-32"> </h1>
                </div>
                <btn className=" py-3 px-6 bg-red-500 font-medium text-white rounded-full shadow-lg hover:bg-amber-300 hover:text-black hover:cursor-pointer">
                  Contact
                </btn>
              </div>
              <div className="flex flex-col items-center justify-between md:flex-row">
                <p className=" text-center md:text-left w-10/12 md:text-xl pt-6 text-md leading-10">
                  Welcome to Polaroid Talkies, where innovation meets
                  excellence! 🚀 <br></br>At Polaroid Talkies, we are passionate
                  about delivering top-quality products/services that cater to
                  your needs. Our journey started with a simple idea—to create
                  something impactful, reliable, and customer-focused.
                </p>
                <img
                  src="/logo1.png"
                  alt="logo"
                  className=" md:w-1/4 md:h-auto h-1/5 w-auto hover:scale-110 hover:cursor-pointer"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-8 mt-6 row-start-2 items-center justify-center   md:items-center md:justify-items-center p-3 sm:p-12 bg-green-100 rounded-xl">
          <div class="h-60%  w-5/6 flex items-center justify-center">
            <div class=" rounded-lg shadow-lg w-full bg-blue-900">
              <div class="border-b border-blue-400 text-blue-400">
                <div class="p-4">X</div>
              </div>

              <div class="relative p-4 pl-20">
                <img
                  src="/logo1_gold.png"
                  class="absolute top-0 left-0 ml-4 mt-4 rounded-full w-10"
                ></img>
                <textarea
                  class="bg-transparent pt-4 w-full text-white text-lg outline-none"
                  placeholder="Hello :)"
                  rows="5"
                ></textarea>
              </div>

              <div class="pl-3 sm:pl-20 pb-4 pr-4 flex flex-col justify-between sm:flex-row">
                <div class="flex text-2xl items-start">
                  <div class="mr-2">🙂</div>
                  <div class="mr-2">😝</div>
                  <div class="mr-2">🤯</div>
                  <div>🥰</div>
                </div>
                <div>
                  <button class="bg-blue-400 rounded-full text-blue-100 inline-block py-2 px-4">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8 mt-6 row-start-2 items-center justify-center   md:items-center md:justify-items-center p-3 sm:p-12 bg-green-100 rounded-xl">
          <div class="h-60%  w-5/6 flex items-center justify-center">
            <div class=" rounded-lg shadow-lg w-full bg-blue-900">
              <div class="border-b border-blue-400 text-blue-400">
                <div class="p-4">X</div>
              </div>

              <div class="relative p-4 pl-20">
                <img
                  src="/logo1_gold.png"
                  class="absolute top-0 left-0 ml-4 mt-4 rounded-full w-10"
                ></img>
                <textarea
                  class="bg-transparent pt-4 w-full text-white text-lg outline-none"
                  placeholder="Hello :)"
                  rows="5"
                ></textarea>
              </div>

              <div class="pl-3 sm:pl-20 pb-4 pr-4 flex flex-col justify-between sm:flex-row">
                <div class="flex text-2xl items-start">
                  <div class="mr-2">🙂</div>
                  <div class="mr-2">😝</div>
                  <div class="mr-2">🤯</div>
                  <div>🥰</div>
                </div>
                <div>
                  <button class="bg-blue-400 rounded-full text-blue-100 inline-block py-2 px-4">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
