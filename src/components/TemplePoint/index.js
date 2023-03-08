import React from "react";

const TemplePoint = ({ no, TempleIcon }) => {
  return (
    <div className="w-[242px] ">
      <img src={TempleIcon} className="w-full" alt="" />
      <h1 className="w-full h-[65px] flex justify-center items-center text-center border-2 text-[32px]">
        Pharse {no}
      </h1>
    </div>
  );
};

export default TemplePoint;
