import Link from "next/link";
import React from "react";
import GetStartedBtn from "./GetStartedBtn";

function UseCasesFooter() {
  return (
    <div className="bg-secondary ">
      <div className="wrapper-container flex flex-col lg:flex-row py-[46px]  items-start justify-center lg:items-center lg:justify-between">
        <div>
          <h6 className="font-bold text-white max-w-[561px]">
            Have bandwidth issues or limited team to provide these
            services?Don’t worry because you can seamlessly{" "}
            <a
              href="/"
              className="text-primary "
              style={{ textDecoration: "underline" }}
            >
              private-label our team
            </a>
            .
          </h6>
        </div>
        <div className=" mt-4 lg:mt-0">
          <GetStartedBtn />
        </div>
      </div>
    </div>
  );
}

export default UseCasesFooter;
