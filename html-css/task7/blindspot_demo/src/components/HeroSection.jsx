import React from "react";
import Image from "next/image";
import GetStartedBtn from "./GetStartedBtn";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";

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

        <div className="wrapper-container flex relative text-white ">
          {/* left-side */}
          <div className="pt-[53px] pb-[60px] w-3/9">
            <Image
              src="blindspot.svg"
              alt="blindspot"
              width={236.13}
              height={76.56}
            ></Image>

            <h6 className="font-bold pt-3" style={{ letterSpacing: "3.6px" }}>
              {" "}
              FOR{" "}
            </h6>
            <h1 className="font-light relative after:absolute after:bottom-0 after:bg-white after:left-0 mb-[7px] after:w-[68px] after:h-[5px] after:content-['']">
              Consulting Firms
            </h1>
            <h6
              className="font-bold pt-[28px] pb-[20px]"
              style={{ letterSpacing: "3.6px" }}
            >
              ATTACK SIMULATIONS & PURPLE TEAM AUTOMATION
            </h6>
            <Link href="/">
              <GetStartedBtn text="Get Started" rotation={0} />
            </Link>
          </div>
          {/* right-side */}
          <div className="flex flex-col justify-between pb-[60px]">
            <ul className="flex font-bold text-sm justify-end pt-6">
              <li className="px-[5px] hover:text-primary">
                <Link href="/">
                  {" "}
                  <GoHomeFill className="text-lg" />
                </Link>
              </li>
              <li className="px-[5px]">{">"} </li>
              <li className="px-[5px]  hover:text-primary">
                {" "}
                <Link href="/">BlindSPOT Overview</Link>
              </li>
              <li className="px-[5px]">{">"} </li>
              <li className="px-[5px]  hover:text-primary">
                {" "}
                <Link href="/"> Consulting Firms </Link>
              </li>
            </ul>

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
    </>
  );
}

export default HeroSection;
