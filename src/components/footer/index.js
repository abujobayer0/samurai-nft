import React from "react";
import { SocialSectionFooter } from "../";

const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl px-5 mx-auto relative lg:px-10">
        <div className=" flex gap-4 flex-col mx-auto  justify-center items-center max-w-3xl ">
          <h1 className=" text-[22px] text-center md:text-[30px] lg:text-[36px] mx-auto clash-600">
            Subscribe To Get Hot New NFT News Updates
          </h1>
          <p className="text-[14px] md:text-[16px] text-center lg:text-[18px]">
            Various Trending NFTS News Will Be Reset Every Week Don't Miss The
            Best News <br /> Every Week
          </p>

          <div className="w-full bg-[#111111] px-2 border-white h-16 md:h-20 rounded-full flex justify-center  items-center relative  border-2">
            <input
              type="text"
              className="bg-transparent text-sm outline-none h-14 md:h-16 rounded-full flex-1"
              placeholder="Type Your Email Here..."
            />
            <button className="  h-12 md:h-16 rounded-full px-2 text-sm bg-[#ec1c24]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <SocialSectionFooter />
    </div>
  );
};

export default Footer;
