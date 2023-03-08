import React from "react";
import { roadMap, TempleIcon } from "../../assets";
import { TemplePoint, Title } from "../";
const RoadMap = () => {
  return (
    <div className="max-w-[1400px] mx-auto relative">
      <Title head={"Our"} sub={"RoadMap."} />
      <img src={roadMap} className="w-full relative" alt="" />
      <TemplePoint no={"1"} TempleIcon={TempleIcon} />
    </div>
  );
};

export default RoadMap;
