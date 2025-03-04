import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className=" p-5 pb-0 flex justify-center sticky  md:p-10 top-0 z-[10000]">
      <nav className=" flex  p-6 bg-black m-y-6 px-5 md:px-10 rounded-full shadow-md ">
        <ul className="flex gap-2 text-sm text-white md:gap-4 md:text-lg">
          <li className=" hover:text-sky-600">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-sky-600">
            <Link href="/about">About us</Link>
          </li>
          <li className=" hover:text-sky-600">
            <Link href="/products">Products</Link>
          </li>
          <li className=" hover:text-sky-600">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
