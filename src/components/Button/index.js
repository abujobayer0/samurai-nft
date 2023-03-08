import React from "react";
import "./style.module.css";
const Button = ({ isSecondary, title, isBlue, isGreen, icon }) => {
  return (
    <div>
      {isSecondary ? (
        <button className="SecondaryPixelBtn ">
          <span className={`  px-[32px] py-[10px] childBtnSecondary`}>
            {title}
          </span>
        </button>
      ) : isBlue ? (
        <button className="blueBtn relative">
          <span className="w-[7px] h-[7px] z-50 absolute top-[20px] left-[16px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[23px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[30px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[37px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[44px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[51px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[58px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[65px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[5px] right-[5px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[12px] right-[5px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[19px] right-[5px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[26px] right-[10px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[33px] right-[18px] bg-[#5182FF]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[40px] right-[26px] bg-[#5182FF]"></span>
          <span className={`  px-[32px] py-[10px] childBlueBtn`}>{title}</span>
        </button>
      ) : isGreen ? (
        <button className=" relative">
          <span className="w-[90px] h-[7px] bg-white absolute left-[2px] -top-[7px] z-50"></span>
          <span className="w-[7px] h-[52px] bg-white absolute -left-[7px] top-[2px] z-50"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[20px] left-[16px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[23px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[30px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[37px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[44px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[51px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[58px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[65px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[5px] right-[5px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[12px] right-[5px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[19px] right-[5px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[26px] right-[10px] bg-[#58E955]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[33px] right-[18px] bg-[#58E955]"></span>
          <span className={`  px-[32px] py-[10px] childGreenBtn`}>{title}</span>
          <span className="w-[10px] h-[10px] z-50 absolute -bottom-[4px] -left-[4px] bg-white"></span>
          <span className="w-[10px] h-[10px] z-50 absolute -top-[4px] -left-[4px] bg-white"></span>
          <span className="w-[10px] h-[10px] z-50 absolute -top-[4px] -right-[4px] bg-white"></span>
          <span className="w-[10px] h-[10px] z-50 absolute -bottom-[4px] -right-[4px] bg-white"></span>
          <span className="w-[7px] h-[52px] bg-white absolute -right-[7px] top-[2px] z-50"></span>
        </button>
      ) : title === "fire" ? (
        <button className="HagonBtn ">
          <span className={`  px-[32px] py-[10px]  HagonBtnNft`}>
            <span className="text-color-gradient flex w-full justify-between items-center gap-2">
              <img src={icon} alt="" />
              {title}
            </span>
          </span>
        </button>
      ) : title === "leaf" ? (
        <button className="MizuBtn ">
          <span className={`  px-[32px] py-[10px]  MizuBtnNft`}>
            <span className="leaf-text-btn flex w-full justify-between items-center gap-2">
              <img src={icon} alt="" />
              {title}
            </span>
          </span>
        </button>
      ) : title === "psyhic" ? (
        <button className="KazeBtn">
          <span className={`  px-[32px] py-[10px]  KazeBtnNft`}>
            <span className="kaze-text-btn flex w-full justify-between items-center gap-2">
              <img src={icon} alt="" />
              {title}
            </span>
          </span>
        </button>
      ) : title === "water" ? (
        <button className="TsuchiBtn">
          <span className={`  px-[32px] py-[10px]  TsuchiBtnNft`}>
            <span className="Tsuchi-gradient flex w-full justify-between items-center gap-2">
              <img src={icon} alt="" />
              {title}
            </span>
          </span>
        </button>
      ) : title === "sky" ? (
        <button className="DenkiBtn">
          <span className={`px-[32px] py-[10px]  DenkiNft`}>
            <span className="denki-gradient flex w-full justify-between items-center gap-2">
              <img src={icon} alt="" />
              {title}
            </span>
          </span>
        </button>
      ) : (
        <button className="pixel2   relative">
          <span className="w-[139px] h-[7px] bg-gray-400 absolute left-[2px] -top-[7px] z-50"></span>
          <span className="w-[7px] h-[54px] bg-gray-400 absolute -left-[7px] top-[2px] z-50"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[20px] left-[16px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[23px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[30px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[37px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[44px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[51px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[58px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute top-[13px] left-[65px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[5px] right-[5px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[12px] right-[5px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[19px] right-[5px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[26px] right-[10px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[33px] right-[18px] bg-[#FF7F7F]"></span>
          <span className="w-[7px] h-[7px] z-50 absolute bottom-[40px] right-[26px] bg-[#FF7F7F]"></span>
          <span className={`  px-[32px] py-[10px]  childBtn`}>{title}</span>
          <span className="w-[10px] h-[10px] z-50 absolute -bottom-[4px] -left-[4px] bg-gray-400"></span>
          <span className="w-[10px] h-[10px] z-50 absolute -top-[4px] -left-[4px] bg-gray-400"></span>
          <span className="w-[10px] h-[10px] z-50 absolute -top-[4px] -right-[4px] bg-gray-400"></span>
          <span className="w-[10px] h-[10px] z-50 absolute -bottom-[4px] -right-[4px] bg-gray-400"></span>
          <span className="w-[7px] h-[54px] bg-gray-400 absolute -right-[7px] top-[2px] z-50"></span>
          <span className="w-[139px] h-[7px] bg-gray-400 absolute left-[2px]  z-50"></span>
        </button>
      )}
    </div>
  );
};

export default Button;
