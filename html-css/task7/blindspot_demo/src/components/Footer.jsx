import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleRight,
  FaPhoneVolume,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <section className="relative bg-secondary">
        <Image
          src="/footerimg.png"
          alt="Bg"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        ></Image>
        <div className="wrapper-container py-9 footer-content relative flex md:flex-row flex-col  justify-between">
          <img
            src="/logo-light.png"
            alt="logo"
            className="w-[212.17px] md:hidden flex pb-8 "
          ></img>
          <div className="footer-content-links text-primary text-sm flex flex-col md:flex-row w-full md:2/3 justify-between md:justify-normal ">
            <div>
              <ul className="space-y-2">
                <li className="font-bold text-white text-[16px]">Company</li>
                <li>
                  <Link href="/">Company</Link>
                </li>
                <li>
                  <Link href="/">Join The Team</Link>
                </li>
                <li>
                  <Link href="/">Partners</Link>
                </li>
              </ul>
              <ul className="space-y-2 mt-4">
                <li className="font-bold text-white text-[16px] ">Products</li>
                <li>
                  <Link href="/">Blindspot</Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center">
                    <FaAngleRight /> Partner Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center">
                    <FaAngleRight />
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center">
                    <FaAngleRight />
                    For MSSPs
                  </Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center">
                    <FaAngleRight />
                    For Incident Response Firms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center pb-4 border-b-2 border-gray-600  "
                  >
                    <FaAngleRight />
                    For Value Added Resellers
                  </Link>
                </li>
                <ul>
                  <li>
                    <Link href="/" className="pt-4">
                      Confirm4Me
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="flex items-center">
                      <FaAngleRight />
                      For MSSPs
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <ul className="md:pl-16 pl-0 pt-6 md:pt-0 space-y-2 ">
              <li className="font-bold  text-white text-[16px]">Solutions</li>
              <li>
                <Link href="/">Private Label Services</Link>
              </li>
              <li>
                <Link href="/">Add Simulation Capability</Link>
              </li>
              <li>
                <Link href="/" className="flex items-center">
                  <FaAngleRight />
                  For Consulting Firms
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center">
                  <FaAngleRight />
                  For MSSPs
                </Link>
              </li>
              <li>
                <Link href="/">Optimize Your Purple Team</Link>
              </li>
              <li>
                <Link href="/">Validate Your SOC/SIEM Alerts</Link>
              </li>
              <li>
                <Link href="/">Simulate To Win Business</Link>
              </li>
              <li>
                <Link href="/" className="flex items-center">
                  <FaAngleRight />
                  For Consulting Firms
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center">
                  <FaAngleRight />
                  For MSSPs
                </Link>
              </li>
              <li>
                <Link href="/">Make Phishing Obvious For Employees</Link>
              </li>
              <li>
                <Link href="/">Auto-Report & Quarantine Phishing Attacks</Link>
              </li>
              <li>
                <Link href="/">Optimize Your Email Security Team</Link>
              </li>
              <li>
                <Link href="/">Extend Your Security Team Bench Strength</Link>
              </li>
              <li>
                <Link href="/">Outsource Security Services For Scale</Link>
              </li>
              <li>
                <Link href="/">
                  Add Cyber Security Services To Your Offering
                </Link>
              </li>
            </ul>
            <div className="md:pl-8 pl-0 pt-6 md:pt-0 ">
              <ul className="space-y-2">
                <li className="font-bold  text-white text-[16px]">Partners</li>
                <li>
                  <Link href="/">Partners</Link>
                </li>
                <li>
                  <Link href="/">Become a Partner</Link>
                </li>
              </ul>

              <ul className="space-y-2  pt-6 md:pt-0">
                <li className="font-bold  text-white text-[16px]">Contact</li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Join The Team</Link>
                </li>
                <li>
                  <Link href="/">Become a Partner</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-socials flex md:flex-col flex-row md:items-end items-start justify-between">
            <img
              src="/logo-light.png"
              alt="logo"
              className="w-[212.17px] hidden md:flex"
            ></img>
            <div className=" footer-content-socials-inner text-white flex flex-col gap-3 text-right md:items-end pt-6 md:pt-0 items-start">
              <ul className="text-sm flex flex-col gap-3 text-right  md:items-end pt-6 md:pt-0 items-start">
                <li className="flex items-center gap-2">
                  800-214-2107 <FaPhoneVolume />
                </li>
                <li className="flex items-center gap-2">
                  contact@ondefend.com <FaEnvelope />{" "}
                </li>
                <li className="text-primary">
                  {" "}
                  <a href="#">Partner Portal</a>
                </li>
              </ul>

              <div className="flex items-center pt-3">
                <Link
                  href="/"
                  className="text-primary hover:text-white text-[18px] px-[4px] font-[400]"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="/"
                  className="text-primary hover:text-white text-[22px] px-[4px] font-[400]"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="/ "
                  className="text-primary hover:text-white text-[20px] px-[4px] font-[400]"
                >
                  <FaLinkedinIn />
                </Link>
              </div>

              <button className="text-sm py-2 px-6 bg-primary rounded-full mt-5">
                <a href="#">Learn More </a>
              </button>

              <p className="text-sm pt-3.5">
                ©2022 OnDefend – All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
