import React from "react";
import { roadMap, TempleIcon } from "../../assets";
import { TemplePoint, Title } from "../";
const RoadMap = () => {
  return (
    <div className="max-w-[1400px] mx-auto relative">
      <div className="px-5 lg:px-10">
        <Title head={"Our"} sub={"RoadMap."} />
      </div>
      <div className="w-full relative">
        <img
          src={roadMap}
          className="w-full rotate-90 md:rotate-0 relative"
          alt=""
        />
        <div className="absolute top-0 lg:top-10 right-5 md:left-10">
          <TemplePoint no={"1"} TempleIcon={TempleIcon} />
        </div>
        <div className="absolute top-[20%] md:top-[30%] lg:top-[30%] right-[50%] md:left-[27%]">
          <TemplePoint no={"2"} TempleIcon={TempleIcon} />
        </div>
        <div className="absolute top-[60%] md:top-[60%] lg:top-[62%] lg:left-[40%] right-[35%] md:left-[40%}">
          <TemplePoint no={"3"} TempleIcon={TempleIcon} />
        </div>
        <div className="absolute top-[100%] lg:top-[40%] lg:right-[5%] md:top-[50%] right-[70%] md:right-[0%]">
          <TemplePoint no={"4"} TempleIcon={TempleIcon} />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
