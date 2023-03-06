import React from "react";

const Button = ({ isSecondary, title, isBlue, isGreen }) => {
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
      ) : (
        <button className="pixel2 ">
          <span className={`  px-[32px] py-[10px]  childBtn`}>{title}</span>
        </button>
      )}
    </div>
  );
};

export default Button;
