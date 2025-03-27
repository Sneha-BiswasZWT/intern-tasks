import React from "react";

function UseCardTitle({ title }) {
  return (
    <div className="wrapper-container">
      <div className=" pt-[27px] pb-[24px] text-secondary relative after:absolute after:bottom-0 after:bg-[#BCBCBC] after:left-0 after:w-full after:h-[5px] after:content-['']">
        <div className=" w-full ">
          <h2 className="font-bold !text-4xl md:!text-[2.5rem]">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default UseCardTitle;
