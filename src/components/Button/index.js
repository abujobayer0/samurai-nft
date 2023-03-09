import React from "react";

const GradientButton = ({ title, icon }) => {
  return (
    <div>
      <button className="w-fit  relative">
        <span
          className={`w-[96%] h-[7px]   absolute ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          } left-[2%] -top-[7px] z-30`}
        ></span>
        <span
          className={`w-[7px] h-[96%] ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          }   absolute  -left-[7px] top-[2%] z-30`}
        ></span>
        <span
          className={`${
            title === "fire"
              ? "BtnHagon"
              : title === "leaf"
              ? "BtnMizu"
              : title === "psyhic"
              ? "BtnKaze"
              : title === "water"
              ? "BtnTSuchi"
              : title === "sky"
              ? "BtnDenki"
              : ""
          }  items-center px-[47px] py-[10px] text-[12px] flex  childBtn`}
        >
          <img className="w-4" src={icon} alt="" /> {title}
        </span>
        <span
          className={`w-[10px] h-[10px] z-30 absolute ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          } -bottom-[4px] -left-[4px] `}
        ></span>
        <span
          className={`w-[10px] h-[10px] z-30 absolute ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          } -top-[4px] -left-[4px] `}
        ></span>
        <span
          className={`w-[10px] h-[10px] z-30 absolute ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          } -top-[4px] -right-[4px] `}
        ></span>
        <span
          className={`w-[10px] h-[10px] z-30 absolute ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          } -bottom-[4px] -right-[4px] `}
        ></span>
        <span
          className={`w-[7px] h-[96%] absolute ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          } -right-[7px] top-[2%] z-30`}
        ></span>
        <span
          className={`w-[97%] h-[7px] absolute ${
            title === "fire"
              ? "hagon"
              : title === "leaf"
              ? "mizu"
              : title === "psyhic"
              ? "kaze"
              : title === "water"
              ? "tSuchi"
              : title === "sky"
              ? "denki"
              : ""
          } left-[2px]  z-30`}
        ></span>
      </button>
    </div>
  );
};

export default GradientButton;
