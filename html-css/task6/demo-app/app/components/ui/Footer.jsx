import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#B4B9C9] py-6 px-4 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center">
        <p>Copyright © 2025 ABC Company | All Rights Reserved</p>
        <div className="hidden md:inline">|</div>
        <Link href="#" className="text-[#76879D] hover:underline">
          Terms and Conditions
        </Link>
        <div className="hidden md:inline">|</div>
        <Link href="#" className="text-[#76879D] hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
