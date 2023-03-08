import React from "react";

const TemplePoint = ({ no, TempleIcon }) => {
  return (
    <div className="md:w-[180px] w-[100px] lg:w-[242px] ">
      <img src={TempleIcon} className="w-full" alt="" />
      <h1 className="w-full bg-[#111111] md:h-[45px] h-[30px] lg:h-[65px] flex justify-center items-center text-center temple-border md:text-[22px] text-[16px] lg:text-[32px]">
        Pharse {no}
      </h1>
    </div>
  );
};

export default TemplePoint;
