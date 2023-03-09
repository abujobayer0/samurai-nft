import React from "react";
import { roadMap, TempleIcon } from "../../assets";
import { TemplePoint, Title } from "../";
const RoadMap = () => {
  const phrase1 = [
    "Core Design .",
    "Community Initiation.",
    "Private Sale.",
    "KYC And Audit.",
    "Alpha Test Of Game.",
    "Airdrops And Giveaway.",
    "Public Sale And Token Listing.",
    "Initial Marketing Push.",
    "Partnerships.",
  ];
  const phrase2 = [
    "Staking Dapp.",
    "NFT Minting.",
    "Public Game Release.",
    "Season 1 Begins With Battle.",
    "Pass And Rewards.",
    "Marketplace.",
    "Airdrops And Giveaway.",
  ];
  const phrase3 = [
    "Release Of Game On Android And IOS.",
    "Marketing Drive To Stread Awarness.",
    "Season 2 Begins With Battle Pass And Rewards.",
    "First Live Tournament With Huge Rewards.",
  ];
  const phrase4 = [
    "Collaboration With Celebraty.",
    "Season 3 Begins with Battle Pass And Celebraty Theme .",
    "Ongame Live Concert.",
    "Addition Of Team Battle.",
  ];
  return (
    <div className="max-w-[1400px] mx-auto relative">
      <div className="px-5 lg:px-10">
        <Title head={"Our"} sub={"RoadMap."} />
      </div>
      <div className="w-full relative">
        <img
          src={roadMap}
          className="w-full rotate-90 md:rotate-0 relative"
          alt="img"
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
        <div className="absolute text-[#BDBDBD]  lg:text-[24px] lg:-top-10 right-5 md:left-[23%]">
          {phrase1.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div className="absolute top-[20%] text-[24px] text-[#BDBDBD] md:top-[30%] lg:top-[40%] right-[50%] md:left-[50px]">
          {phrase2.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <dir className="absolute w-[400px] top-[20%] text-[24px] text-[#BDBDBD] md:top-[30%] lg:top-[74%] right-[50%] md:left-[37%]">
          {phrase3.map((item) => (
            <h1 className="flex w-[400px] justify-start items-center gap-4">
              {" "}
              <span className=" w-[10px] bg-[#BDBDBD] px-1 h-[10px] rounded-full "></span>
              {item}
            </h1>
          ))}
        </dir>
        <dir className="absolute w-[400px] top-[20%] text-[24px] text-[#BDBDBD] md:top-[30%] lg:top-[20%] right-[50%] lg:left-[65%]">
          {phrase4.map((item) => (
            <h1 className="flex w-[400px] justify-start items-center gap-4">
              {" "}
              <span className=" w-[10px] bg-[#BDBDBD] h-[10px] rounded-full "></span>{" "}
              {item}
            </h1>
          ))}
        </dir>
      </div>
    </div>
  );
};

export default RoadMap;
