import React from "react";
import { StepsLine, stepsMobile } from "../../assets";
import { DemoBtn } from "../";
const StepsSection = () => {
  return (
    <>
      <div className="w-full  transition duration-150 ease-in-out hidden md:flex flex-col justify-start items-start  bg-transparent">
        <h1 className="clash-700  text-start  leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
          H<span className="bg-[#EC1C24] pr-2 lg:pr-12">ierarchy</span>
        </h1>

        <div className="relative mt-[50px] md:mt-[100px] max-w-7xl">
          <h1 className="gra-Leg-Btn  uppercase pb-[10px] lg:pb-[21px] py-4 absolute -top-[40px] md:-top-[70px] text-[10px] sm:text-sm md:text-[26px] lg:text-[36px] ">
            Legendary
          </h1>
          <img src={StepsLine} className="w-full relative" alt="" />
          <span className="uppercase left-[0px] -top-2 sm:top-2 sm:left-[0px] md:top-[21px] md:left-[0px] lg:top-[21px] gra-Leg-Btn lg:left-[0px] xl:left-[0px] pb-[10px] py-4 absolute lg:pb-[21px] text-[10px] sm:text-sm md:text-[26px] lg:text-[36px]">
            1bnb
          </span>

          <div className="uppercase left-[21%]  -top-[10%]  p-4 lg:top-[13%] sm:top-[0%]  md:top-[8%] xl:top-[11%] absolute  text-[10px] sm:text-sm ron-text-gra md:text-[26px] flex flex-col gap-4 lg:gap-16 sm:gap-10 lg:text-[36px]">
            <span>hero</span>
            <span>0.5bnb</span>
          </div>
          <div className="uppercase left-[41%] top-[16%] p-4 lg:top-[36%] sm:top-[24%]  md:top-[34%] xl:top-[35%] absolute  text-[10px] sm:text-sm ron-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:gap-16   lg:text-[36px]">
            <span>ronin</span>
            <span>25 bnb</span>
          </div>
          <div className="uppercase  right-[23%] top-[44%] lg:right-[27%] xl:right-[28%] p-4  lg:top-[64%] sm:top-[50%]  md:top-[60%] xl:top-[62%] absolute  text-[10px] sm:text-sm green-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:gap-16  lg:text-[36px]">
            <span>kensi</span>
            <span>.1bnb</span>
          </div>
          <div className="uppercase -right-[5%] lg:-right-[3%] p-4 top-[65%] lg:top-[84%] sm:top-[70%]  md:top-[80%] xl:top-[82%] absolute  text-[10px] sm:text-sm white-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:gap-16 lg:text-[36px]">
            <span>Ancestral</span>
            <span>10 gold</span>
          </div>
        </div>
        <div className="mt-10 px-2 lg:mt-0">
          <DemoBtn title={"learn more"} bgColor={"#111111"} color={"#fff"} />
        </div>
      </div>
      <div className="w-full  transition duration-150 ease-in-out md:hidden flex  flex-col justify-start items-start  bg-transparent">
        <h1 className="clash-700  text-start  leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
          H<span className="bg-[#EC1C24] pr-2 lg:pr-12">ierarchy</span>
        </h1>

        <div className="relative mt-[50px] md:mt-[100px] max-w-7xl">
          <h1 className="gra-Leg-Btn  uppercase pb-[10px] lg:pb-[21px] py-4 absolute -top-[40px] md:-top-[70px] text-[10px] sm:text-sm md:text-[26px] lg:text-[36px] ">
            Legendary
          </h1>
          <img src={stepsMobile} className="w-full relative" alt="" />
          <span className="uppercase left-[0px] -top-2 sm:top-2 sm:left-[0px] md:top-[21px] md:left-[0px] lg:top-[21px] gra-Leg-Btn lg:left-[0px] xl:left-[0px] pb-[10px] py-4 absolute lg:pb-[21px] text-[10px] sm:text-sm md:text-[26px] lg:text-[36px]">
            1bnb
          </span>

          <div className="uppercase left-[18%]  top-[14%]  p-4 lg:top-[13%] sm:top-[0%]  md:top-[8%] xl:top-[11%] absolute  text-[10px] sm:text-sm ron-text-gra md:text-[26px] flex flex-col gap-4 lg:gap-16 sm:gap-10 lg:text-[36px]">
            <span>hero</span>
            <span>0.5bnb</span>
          </div>
          <div className="uppercase left-[36%] top-[38%] p-4 lg:top-[36%] sm:top-[24%]  md:top-[34%] xl:top-[35%] absolute  text-[10px] sm:text-sm ron-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:gap-16   lg:text-[36px]">
            <span>ronin</span>
            <span>25 bnb</span>
          </div>
          <div className="uppercase  right-[26%] top-[65%] lg:right-[27%] xl:right-[28%] p-4  lg:top-[64%] sm:top-[50%]  md:top-[60%] xl:top-[62%] absolute  text-[10px] sm:text-sm green-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:gap-16  lg:text-[36px]">
            <span>kensi</span>
            <span>.1bnb</span>
          </div>
          <div className="uppercase right-[0%] lg:-right-[3%] p-4 top-[85%] lg:top-[84%] sm:top-[70%]  md:top-[80%] xl:top-[82%] absolute  text-[10px] sm:text-sm white-text-gra md:text-[26px] flex flex-col gap-4 sm:gap-10 lg:gap-16 lg:text-[36px]">
            <span>Ancestral</span>
            <span>10 gold</span>
          </div>
        </div>
        <div className="mt-10 px-2 lg:mt-0">
          <DemoBtn title={"learn more"} bgColor={"#111111"} color={"#fff"} />
        </div>
      </div>
    </>
  );
};

export default StepsSection;
