import React from "react";

const DemoBtn = ({ title, wFull, color, bgColor, dotColor }) => {
  return (
    <div className={`  w-fit   flex justify-center items-center`}>
      <button className={` w-fit  relative`}>
        <span
          className="w-[96%] h-[7px]   absolute left-[2%] -top-[7px] z-30"
          style={{ background: color }}
        ></span>
        <span
          className="w-[7px] h-[96%]   absolute -left-[7px] top-[2%] z-30"
          style={{ background: color }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[20px] left-[16px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[10px]  md:top-[10px] left-[23px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[10px]  md:top-[10px] left-[30px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[10px]  md:top-[10px] left-[37px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[10px]  md:top-[10px] left-[44px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[10px]  md:top-[10px] left-[51px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[10px]  md:top-[10px] left-[58px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute top-[10px]  md:top-[10px] left-[65px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[5px] right-[5px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[12px] right-[5px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[19px] right-[5px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[26px] right-[10px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] z-30 absolute bottom-[33px] right-[18px] "
          style={{ background: dotColor }}
        ></span>
        <span
          className="w-[7px] h-[7px] hidden md:block z-30 absolute bottom-[40px] right-[26px] "
          style={{ background: dotColor }}
        ></span>
        <span
          style={{ background: bgColor }}
          className={`
             ${wFull && "px-[100px]"}
           px-[35px] sm:px-[30px] lg:px-[30px] xl:px-[30px] md:px-[47px] py-[10px]   childBtn`}
        >
          {title}
        </span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -bottom-[4px] -left-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -top-[4px] -left-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -top-[4px] -right-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[10px] h-[10px] z-30 absolute -bottom-[4px] -right-[4px] "
          style={{ background: color }}
        ></span>
        <span
          className="w-[7px] h-[96%] absolute -right-[7px] top-[2%] z-30"
          style={{ background: color }}
        ></span>
        <span
          className="w-[97%] h-[7px] absolute left-[2px]  z-30"
          style={{ background: color }}
        ></span>
      </button>
    </div>
  );
};

export default DemoBtn;
