import React from "react";
import { StepsLine } from "../../assets";
import { Button } from "../";
const StepsSection = () => {
  return (
    <div className="w-full  transition duration-150 ease-in-out flex flex-col justify-start items-start  bg-transparent">
      <h1 className="clash-700 mb-5 text-start md:mb-[30px] lg:mb-[70px] leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
        H<span className="bg-[#EC1C24] pr-8 lg:pr-12">ierarchy</span>
      </h1>
      <h1 className="gra-Leg-Btn uppercase pb-[10px] lg:pb-[21px] text-[16px] md:text-[26px] lg:text-[36px]">
        Legendary
      </h1>
      <div className="relative  max-w-7xl">
        <img src={StepsLine} className="w-full relative" alt="" />
        <span className="uppercase left-[0px] top-2 sm:top-2 sm:left-[0px] md:top-4 md:left-[0px] lg:top-8 gra-Leg-Btn lg:left-[0px] xl:left-[0px] pb-[10px] absolute lg:pb-[21px] text-[16px] md:text-[26px] lg:text-[36px]">
          1bnb
        </span>
        <span className="uppercase left-[130px] top-2 sm:top-4 sm:left-[140px] md:top-6 md:left-[200px] lg:top-5 red-text-gra lg:left-[250px]  xl:left-[300px] pb-[10px] absolute lg:pb-[21px] text-[16px] md:text-[26px] lg:text-[36px]">
          Hero
        </span>
        <span className="uppercase left-[100px] top-14 sm:top-20 sm:left-[140px] md:top-24 md:left-[160px] lg:top-32 red-text-gra lg:left-[200px] xl:left-[300px] pb-[10px] absolute lg:pb-[21px] text-[16px] md:text-[26px] lg:text-[36px]">
          .5 bnb
        </span>
        <div className="uppercase left-[44%] top-[8%] lg:top-[25%] sm:top-[14%]  md:top-[18%] xl:top-[30%] absolute  text-[16px] ron-text-gra md:text-[26px] flex flex-col gap-8 sm:gap-10 lg:text-[36px]">
          <span>ronin</span>
          <span>25 bnb</span>
        </div>
        <div className="uppercase right-[28%] top-[18%] lg:top-[44%] sm:top-[28%]  md:top-[34%] xl:top-[56%] absolute  text-[16px] green-text-gra md:text-[26px] flex flex-col gap-8 sm:gap-10 lg:text-[36px]">
          <span>kensi</span>
          <span>.1bnb</span>
        </div>
        <div className="uppercase right-[0%] top-[24%] lg:top-[64%] sm:top-[48%]  md:top-[54%] xl:top-[76%] absolute  text-[16px] white-text-gra md:text-[26px] flex flex-col gap-8 sm:gap-10 lg:text-[36px]">
          <span>ancestrol</span>
          <span>10 gold</span>
        </div>
      </div>
      <Button isSecondary title={"learn more"} />
    </div>
  );
};

export default StepsSection;
