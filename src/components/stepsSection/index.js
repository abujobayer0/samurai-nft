import React from "react";
import { StepsLine } from "../../assets";

const StepsSection = () => {
  return (
    <div className="w-full h-full  flex flex-col justify-start items-start  bg-transparent">
      <h1 className="clash-700 mb-5 text-start md:mb-[30px] lg:mb-[70px] leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
        H<span className="bg-[#EC1C24] pr-8 lg:pr-12">ierarchy</span>
      </h1>
      <h1 className="gra-Leg-Btn uppercase pb-[21px] text-[36px]">Legendary</h1>
      <div>
        <img src={StepsLine} className="w-[1333px]" alt="" />
      </div>
    </div>
  );
};

export default StepsSection;
