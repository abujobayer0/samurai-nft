import React from "react";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="flex  gap-9 items-start justify-center mx-auto mb-10 md:mb-0  w-full h-fit flex-col 
      md:flex-row "
    >
      <div className=" md:order-2 flex relative justify-end items-end  pl-8">
        <img
          loading="lazy"
          src={img}
          className="w-full flex justify-end items-end "
          alt="coin"
        />
      </div>
      <div className="w-full flex items-center  ">
        <p className="text-xs w-[800px]  md:text-[16px] leading-6  fire-effect">
          {para}
        </p>
      </div>
    </div>
  );
};

export default CoinTab;
