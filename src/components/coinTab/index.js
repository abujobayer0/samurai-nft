import React from "react";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="grid place-items-end  gap-9 place-content-center mx-auto mb-10 md:mb-0  w-full h-fit grid-cols-1 
      md:grid-cols-2 "
    >
      <div className=" md:order-2 flex relative justify-end items-end  pl-8">
        <img
          loading="lazy"
          src={img}
          className="w-full flex justify-end items-end "
          alt="coin"
        />
      </div>
      <div className="w-full flex items-center my-auto ">
        <p className="text-xs  md:text-[16px] leading-6 w-full fire-effect">
          {para}
        </p>
      </div>
    </div>
  );
};

export default CoinTab;
