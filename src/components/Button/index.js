import React from "react";

const Button = ({ isSecondary, title }) => {
  return (
    <div>
      {!isSecondary ? (
        <button className="pixel2 ">
          <span className={`  px-[32px] py-[10px]  childBtn`}>{title}</span>
        </button>
      ) : (
        <button className="SecondaryPixelBtn ">
          <span className={`  px-[32px] py-[10px] childBtnSecondary`}>
            {title}
          </span>
        </button>
      )}
    </div>
  );
};

export default Button;
