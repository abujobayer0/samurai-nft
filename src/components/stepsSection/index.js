import React from "react";
import { StepsLine } from "../../assets";
import { DemoBtn } from "../";
const StepsSection = () => {
  return (
    <div className="w-full  transition duration-150 ease-in-out flex flex-col justify-start items-start  bg-transparent">
      <h1 className="clash-700 mb-5 px-5 lg:px-10 text-start md:mb-[30px] lg:mb-[70px] leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
        H<span className="bg-[#EC1C24] pr-8 lg:pr-12">ierarchy</span>
      </h1>
      <h1 className="gra-Leg-Btn uppercase pb-[10px] lg:pb-[21px] p-4 text-xs md:text-[26px] lg:text-[36px]">
        Legendary
      </h1>
      <div className="relative  max-w-7xl">
        <img src={StepsLine} className="w-full relative" alt="" />
        <span className="uppercase left-[0px] top-2 sm:top-2 sm:left-[0px] md:top-4 md:left-[0px] lg:top-8 gra-Leg-Btn lg:left-[0px] xl:left-[0px] pb-[10px] p-4 absolute lg:pb-[21px] text-xs md:text-[26px] lg:text-[36px]">
          1bnb
        </span>

        <div className="uppercase left-[20%] top-[0%] p-4 lg:top-[13%] sm:top-[0%]  md:top-[8%] xl:top-[15%] absolute  text-xs ron-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:text-[36px]">
          <span>hero</span>
          <span>0.5bnb</span>
        </div>
        <div className="uppercase left-[40%] top-[20%] p-4 lg:top-[36%] sm:top-[24%]  md:top-[34%] xl:top-[40%] absolute  text-xs ron-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:text-[36px]">
          <span>ronin</span>
          <span>25 bnb</span>
        </div>
        <div className="uppercase right-[20%] p-4 top-[50%] lg:top-[64%] sm:top-[50%]  md:top-[60%] xl:top-[66%] absolute  text-xs green-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:text-[36px]">
          <span>kensi</span>
          <span>.1bnb</span>
        </div>
        <div className="uppercase right-[0%] p-4 top-[70%] lg:top-[84%] sm:top-[70%]  md:top-[80%] xl:top-[86%] absolute  text-xs white-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:text-[36px]">
          <span>BTx</span>
          <span>10 gold</span>
        </div>
      </div>
      <div className="mt-10 px-2 lg:mt-0">
        <DemoBtn title={"learn more"} bgColor={"#111111"} color={"#fff"} />
      </div>
    </div>
  );
};

export default StepsSection;
