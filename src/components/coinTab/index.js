import React from "react";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="flex  gap-9 items-start justify-center mx-auto mb-10 md:mb-0  w-full h-fit flex-col 
      lg:flex-row "
    >
      <div className=" order-2 flex relative  mx-auto lg:justify-end justify-center items-center lg:items-end  lg:pl-8">
        <img
          loading="lazy"
          src={img}
          className="w-full flex justify-center lg:justify-end items-center lg:items-end "
          alt="coin"
        />
      </div>
      <div className="w-full flex items-center  ">
        <p className="text-xs lg:w-[800px]  md:text-[16px] leading-6  fire-effect">
          {para}
        </p>
      </div>
    </div>
  );
};

export default CoinTab;
