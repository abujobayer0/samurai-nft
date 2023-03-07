import React from "react";
import {
  FooterGradinet,
  GitBookIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../assets";

const SocialSectionFooter = () => {
  return (
    <div className=" mt-20 relative">
      <div className="w-full mb-10 flex  justify-center items-center border-b-2 border-t-2">
        {" "}
        <button className="w-[100px] text-sm md:text-md md:w-[160px] py-4  flex justify-evenly items-center border-r-2 border-l-2 ">
          <img src={TwitterIcon} alt="" className="w-4 md:w-6 " />
          Twitter
        </button>
        <button className="w-[100px] text-sm md:text-md md:w-[160px] flex justify-evenly items-center  py-4 ">
          <img src={TelegramIcon} alt="" className="w-4 md:w-6 " />
          Telegram
        </button>
        <button className="w-[100px] text-sm md:text-md md:w-[160px]  flex justify-evenly items-center py-4 border-l-2  border-r-2 ">
          <img src={GitBookIcon} alt="" className="w-4 md:w-6 " />
          Gitbook
        </button>
      </div>
      <img
        src={FooterGradinet}
        className="w-10/12 absolute -bottom-12  right-0"
        alt="img"
      />
    </div>
  );
};

export default SocialSectionFooter;
