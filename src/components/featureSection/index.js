import React, { useEffect, useState } from "react";
import {
  binance,
  dextools,
  googlePlay,
  pinkSale,
  yahooFinance,
} from "../../assets";
const FeaturedSection = () => {
  return (
    <>
      <section className="max-w-7xl mt-32 mx-auto px-5 sm:px-10">
        <h1 className="clash-700 mb-10 md:mb-[79px] text-[28px] lg:text-[38px]">
          Featured & Partners
        </h1>
        <div className="flex gap-10  md:gap-8  lg:gap-[61px] -rotate-2 flex-row items-center overflow-hidden justify-center  w-full">
          <img
            className="md:w-28  w-20 lg:w-44  "
            src={yahooFinance}
            alt="img"
          />
          <img className="md:w-32  w-20 lg:w-44  " src={googlePlay} alt="img" />
          <img className="md:w-32  w-20 lg:w-44  " src={binance} alt="img" />
          <img className="md:w-32  w-20 lg:w-44  " src={pinkSale} alt="img" />
          <img className="md:w-32  w-20 lg:w-44  " src={dextools} alt="img" />
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
