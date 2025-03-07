import React from "react";
import Image from "next/image";

export default function BlogSection() {
  return (
    <>
      <div className="py-6 px-12 lg:py-[5rem] lg:px-[11.875rem] flex flex-col items-center flex-wrap justify-center">
        <div className="flex flex-col justify-center max-w-[40rem] pb-[3rem]">
          <h1 className="text-4xl text-primary font-semibold text-center pb-4">
            Highly effective solutions
          </h1>
          <p className="text-md  text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <div className="flex max-w-[66.25rem] flex-col gap-[2.25rem]">
          <div className="flex flex-col lg:flex-row  w-full rounded-md  shadow-all ">
            <div className="w-full h-64 lg:h-auto relative ">
              <Image
                src={"/blog1.png"}
                alt={"blog image1"}
                fill
                className="object-cover rounded-t-md lg:rounded-l-md lg:rounded-t-none"
              />
            </div>
            <div className="py-[4.375rem] px-[3.5rem] w-full">
              <h2 className="text-[1.5rem] font-semibold text-primary pb-4">
                Web design
              </h2>
              <p className="text-gray-500 text-[1rem] pb-6">
                Ornare arcu dui vivamus arcu felis bibendum ut tristique et
                tortor condimentum lacinia quis vel eros laoreet id donec
                ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum
                dolor sit amet.
              </p>

              <button className="py-[.875rem] px-[1.125rem] bg-primary text-white rounded-sm">
                Button
              </button>
            </div>
          </div>
          <div className="flex-col flex lg:flex-row w-full gap-[2.25rem]">
            <div className="flex flex-col-reverse lg:flex-row lg:w-1/2 rounded-md  shadow-all ">
              <div className="py-[2.3125rem] px-6 w-full ">
                <h2 className="text-[1.5rem] font-semibold text-primary pb-4">
                  Web design
                </h2>
                <p className="text-gray-500 text-[1rem] pb-6">
                  Ornare arcu dui vivamus arcu felis bibendum ut tristique et
                  tortor condimentum lacinia quis vel eros laoreet id donec
                  ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum
                  dolor sit amet.
                </p>

                <button className="py-[.875rem] px-[1.125rem] bg-primary text-white rounded-sm">
                  Button
                </button>
              </div>
              <div className="w-full h-64 lg:h-full relative ">
                <Image
                  src={"/blog2.png"}
                  alt={"blog image1"}
                  fill
                  className="object-cover rounded-t-md lg:rounded-r-md lg:rounded-t-none"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:w-1/2 rounded-md  shadow-all ">
              <div className="py-[2.3125rem] px-6 w-full">
                <h2 className="text-[1.5rem] font-semibold text-primary pb-4">
                  Web design
                </h2>
                <p className="text-gray-500 text-[1rem] pb-6">
                  Ornare arcu dui vivamus arcu felis bibendum ut tristique et
                  tortor condimentum lacinia quis vel eros laoreet id donec
                  ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum
                  dolor sit amet.
                </p>

                <button className="py-[.875rem] px-[1.125rem] bg-primary text-white rounded-sm">
                  Button
                </button>
              </div>
              <div className="w-full h-64 lg:h-full  relative ">
                <Image
                  src={"/blog1.png"}
                  alt={"blog image1"}
                  fill
                  className="object-cover rounded-t-md lg:rounded-r-md lg:rounded-t-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
