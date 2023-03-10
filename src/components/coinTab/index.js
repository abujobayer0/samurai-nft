import React from "react";
import { GoldCoin, RioCoin } from "../../assets";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="flex relative -top-4  gap-9 items-center justify-center mx-auto mb-10 md:mb-0  w-full h-fit flex-col 
      lg:flex-row "
    >
      <div className=" order-2 flex relative w-full  mx-auto lg:justify-end justify-center items-center lg:items-end  lg:pl-8">
        <img
          loading="lazy"
          src={img}
          className={`${
            img === GoldCoin ? "w-[350px]" : img === RioCoin ? "w-[558px]" : ""
          } flex justify-center lg:justify-end items-center lg:items-end`}
          alt="coin"
        />
      </div>
      <div className="w-full flex items-center  ">
        <p className="text-xs   md:text-[16px] leading-6  fire-effect">
          {para}
        </p>
      </div>
    </div>
  );
};

export default CoinTab;
