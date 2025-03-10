"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="py-6 px-6 md:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-32" />
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full bg-white md:w-auto md:flex transition-all duration-300 ${
            isOpen ? "block shadow-md" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6 p-6 md:p-0">
            <li>
              <Link href="/" className="hover:text-gray-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-600 transition">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
