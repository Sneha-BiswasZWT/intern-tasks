"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  shadow-sm sticky top-0 z-50  ">
      <div className="wrapper-container flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo "
              width={215}
              height={1000}
              className=" w-[8.2606rem] lg:w-[13.2606rem]"
            ></Image>
          </Link>
        </div>
        <div className="hidden lg:flex flex-col w-full">
          <div>
            <nav className="flex topnav items-center justify-end pt-[26px]">
              <ul className=" flex text-custom-gray text-sm font-medium ">
                <li className="px-[8px] hover:text-primary ">
                  <Link href="/">800-214-2107 </Link>
                </li>

                <li className="px-[8px] hover:text-primary ">
                  <Link href="/">support@ondefend.com</Link>
                </li>
                <li className="px-[8px] hover:text-primary ">
                  <Link href="/">Partner Portal</Link>
                </li>
              </ul>
              <div className="flex">
                <Link href="/">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={18}
                    height={17}
                    className="  px-[4px]"
                  ></Image>
                </Link>
                <Link href="/">
                  <Image
                    src="/youtube.svg"
                    alt="YouTube"
                    width={32.65}
                    height={17}
                    className="  px-[4px]"
                  ></Image>
                </Link>
                <Link href="/">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={25.25}
                    height={17}
                    className="  px-[4px]"
                  ></Image>
                </Link>
              </div>
            </nav>
          </div>

          <div className="flex  pt-[20px] items-start bottomnav  justify-end">
            <ul className="flex  text-secondary">
              <li className="px-[11px] ">
                <Link href="/">
                  <h6 className="relative hover:text-primary pb-[20px]">
                    Company
                  </h6>
                </Link>
              </li>
              <li className="px-[11px]">
                <Link href="/">
                  {" "}
                  <h6 className="relative hover:text-primary pb-[20px]">
                    Products{" "}
                  </h6>
                </Link>
              </li>
              <li className="px-[11px]">
                <Link href="/">
                  {" "}
                  <h6 className="relative hover:text-primary pb-[20px]">
                    Solutions{" "}
                  </h6>
                </Link>
              </li>
              <li className="px-[11px]">
                <Link href="/">
                  <h6 className="relative hover:text-primary pb-[20px]">
                    {" "}
                    Partners{" "}
                  </h6>
                </Link>
              </li>
              <li className="px-[11px]">
                <Link href="/">
                  <h6 className="relative hover:text-primary pb-[20px]">
                    {" "}
                    Contact{" "}
                  </h6>
                </Link>
              </li>
            </ul>
            <button className="text-sm px-[26px] leading-none mx-[11px] py-[10px] bg-primary rounded-[24px] text-white hover:bg-secondary">
              <Link href="/"> Get Started</Link>
            </button>
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Social Media Icons */}
          <div className="flex  py-[20px]">
            <Link href="/">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={18}
                height={17}
                className="  px-[4px]"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src="/youtube.svg"
                alt="YouTube"
                width={32.65}
                height={17}
                className="  px-[4px]"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={25.25}
                height={17}
                className="  px-[4px]"
              ></Image>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col bg-white shadow-md absolute top-full left-0 w-full p-6">
            <ul className="flex flex-col gap-4 text-secondary">
              <li>
                <Link href="/">Company</Link>
              </li>
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/">Solutions</Link>
              </li>
              <li>
                <Link href="/">Partners</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <button className="bg-primary text-white w-full mt-4 py-2 rounded-full hover:bg-secondary">
              <Link href="/">Get Started</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
