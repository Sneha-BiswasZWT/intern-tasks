"use client";

export default function about() {
  return (
    <>
      <div className="flex  justify-items-center  p-t-0 p-8  font-[family-name:var(--font-geist-sans)] flex-col">
        <div className="flex flex-col gap-8 mt-6 row-start-2 items-center justify-center   md:items-start md:justify-items-start p-12 bg-blue-100 rounded-xl">
          <div>
            <div className="flex flex-col ">
              <div className="flex flex-col items-center gap-5 md:flex-row justify-between ">
                <div className=" flex flex-col items-center gap-5 md:flex-row">
                  <h1 className="text-3xl text-cyan-900 text-center font-bold md:text-3xl lg:text-5xl pb-6">
                    About Us
                  </h1>
                  <h1 className=" h-1 bg-cyan-900 md:w-72 w-32"> </h1>
                </div>
                <btn className=" py-3 px-6 bg-red-500 font-medium text-white rounded-full shadow-lg hover:bg-amber-300 hover:text-black hover:cursor-pointer">
                  Contact
                </btn>
              </div>
              <div className="flex flex-col items-center justify-between md:flex-row">
                <p className=" text-center md:text-left w-10/12 md:text-xl pt-6 text-md leading-10">
                  Welcome to Polaroid Talkies, where innovation meets
                  excellence! 🚀 <br></br>At Polaroid Talkies, we are passionate
                  about delivering top-quality products/services that cater to
                  your needs. Our journey started with a simple idea—to create
                  something impactful, reliable, and customer-focused.
                </p>
                <img
                  src="/logo1.png"
                  alt="logo"
                  className=" md:w-1/4 md:h-auto h-1/5 w-auto hover:scale-110 hover:cursor-pointer"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-6  items-center justify-center  p-12 bg-violet-100 rounded-xl">
          <h1 className="text-3xl text-purple-900 text-center font-bold md:text-3xl lg:text-5xl pb-6">
            Meet the team
          </h1>

          {/* team cards section */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="card bg-base-100 image-full w-1/6 shadow-sm h-1/6 ">
              <figure>
                <img src="/sneha.png" alt="member" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title">SNEHA BISWAS</h2>
              </div>
            </div>
            <div className="card bg-base-100 image-full w-1/6 shadow-sm h-1/6 ">
              <figure>
                <img src="/sneha.png" alt="Shoes" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title">SNEHA BISWAS</h2>
              </div>
            </div>
            <div className="card bg-base-100 image-full w-1/6 shadow-sm h-1/6 ">
              <figure>
                <img src="/sneha.png" alt="Shoes" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title">SNEHA BISWAS</h2>
              </div>
            </div>
            <div className="card bg-base-100 image-full w-1/6 shadow-sm h-1/6 ">
              <figure>
                <img src="/sneha.png" alt="Shoes" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title">SNEHA BISWAS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
