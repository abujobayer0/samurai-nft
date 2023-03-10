import React from "react";
import { GoldCoin, RioCoin } from "../../assets";
import { DemoBtn } from "../";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="flex relative lg:-top-2 top-4 gap-9 items-center justify-center mx-auto  w-full h-fit flex-col 
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
      <div className="w-full flex flex-col  items-start  justify-start ">
        <p className="text-xs   md:text-[16px] leading-6  fire-effect">
          {para}
        </p>{" "}
        <div className="px-2 mt-[36px] relative">
          <DemoBtn title={"learn more"} bgColor={"#11111"} color={"#fff"} />
        </div>
      </div>
    </div>
  );
};

export default CoinTab;
