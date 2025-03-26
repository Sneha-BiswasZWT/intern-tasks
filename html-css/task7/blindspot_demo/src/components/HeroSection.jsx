import React from "react";
import Image from "next/image";
import GetStartedBtn from "./GetStartedBtn";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <>
      <div className="bg-secondary relative">
        <Image
          src="/hero-bg1.png"
          alt="hero image"
          layout="fill"
          objectFit="cover"
          className="absolute"
        ></Image>

        <div className="wrapper-container flex flex-wrap flex-col relative text-white ">
          {/* Top breadcrumb */}
          <div className=" w-full mb-[1.07rem]">
            <ul className="flex font-bold text-sm justify-end pt-3 lg:pt-6">
              <li className="px-[5px] hover:text-primary">
                <Link href="/">
                  {" "}
                  <GoHomeFill className="text-md" />
                </Link>
              </li>
              <li>{">"} </li>
              <li className="px-[5px]  hover:text-primary">
                {" "}
                <Link href="/">BlindSPOT Overview</Link>
              </li>
              <li>{">"} </li>
              <li className="px-[5px]  hover:text-primary">
                {" "}
                <Link href="/"> Consulting Firms </Link>
              </li>
            </ul>
          </div>
          {/* bottom */}
          <div className=" flex-col flex lg:flex-row  justify-between pb-[60px]">
            {/* left-side */}
            <div className=" w-full lg:w-4/12 lg:px-[15px]">
              <HeroContent
                imageSrc="/blindspot.svg"
                altText="blindspot"
                heading="Consulting Firms"
                subheading="ATTACK SIMULATIONS & PURPLE TEAM AUTOMATION"
              />
              <Link href="/">
                <GetStartedBtn text="Get Started" rotation={0} />
              </Link>
            </div>
            {/* right-side */}
            <div className="w-full lg:w-8/12 mt-6 lg:mt-0  lg:px-[15px]">
              <Image
                src="/hero-img1.webp"
                alt="image"
                width={680}
                height={424}
                className="rounded-sm"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
