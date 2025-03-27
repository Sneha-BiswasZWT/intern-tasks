import React, { useEffect } from "react";
import Image from "next/image";

function EngageCards({ subtitle, title, content, color, number, showBtn }) {
  useEffect(() => {
    const equalHeight = () => {
      const productHeading = document.querySelectorAll(".product-heading");
      let maxHeight = 0;
      productHeading.forEach((heading) => {
        heading.style.height = "auto";
        maxHeight = Math.max(maxHeight, heading.clientHeight);
        heading.style.height = `${maxHeight}px`;
      });
    };
    equalHeight();
    window.addEventListener("resize", equalHeight);
    return () => {
      window.removeEventListener("resize", equalHeight);
    };
  });

  return (
    <div className="pt-[44px] pb-2 w-full sm:w-1/2 xl:w-1/3 pr-[15px]">
      <div className="pl-[12px] ">
        <div
          className="product-heading font-bold text-white pb-[1.5rem] border-b-[5px]"
          style={{ borderBottomColor: color }}
        >
          <h3 className="!text-2xl md:!text-4xl">{title}</h3>
          {subtitle ? <h5>{subtitle}</h5> : null}
        </div>

        <div className=" text-white pt-[24px] flex justify-between items-center">
          <h1 className="font-light w-1/4">{number}</h1>
          <h6 className="w-3/4">{content}</h6>
        </div>
        {showBtn && (
          <div className="pt-4">
            <button className=" leading-none  pr-[9px] py-3 bg-primary rounded-4xl text-white hover:bg-white hover:text-secondary flex items-center  cursor-pointer">
              <p className=" text-[13px] pr-[20px] pl-[16px]">Get Started</p>
              <div className="w-[12px]">
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="border-1 border-primary rounded-full "
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EngageCards;
