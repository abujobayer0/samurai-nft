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
        <button className="blueBtn ">
          <span className={`  px-[32px] py-[10px] childBlueBtn`}>{title}</span>
        </button>
      ) : isGreen ? (
        <button className="greenBtn ">
          <span className={`  px-[32px] py-[10px] childGreenBtn`}>{title}</span>
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
        <button className="pixel2 ">
          <span className={`  px-[32px] py-[10px]  childBtn`}>{title}</span>
        </button>
      )}
    </div>
  );
};

export default Button;
