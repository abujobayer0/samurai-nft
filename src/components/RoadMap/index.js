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
    <div className="max-w-7xl mb-[70px] md:mb-0 mx-auto relative">
      <div className="px-5  mb-20 md:mb-0 lg:px-10">
        <Title head={"Our"} sub={"RoadMap."} />
      </div>
      <div className="w-full relative">
        <img
          src={roadMap}
          className="w-full rotate-90 md:rotate-0 relative"
          alt="img"
        />
        <div className="absolute -top-20 md:top-0 lg:top-10 right-10 md:left-10">
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
        <div
          className="absolute text-[7.7px] -top-14 right-[38%] md:text-[16px]  text-[#BDBDBD] flex flex-col justify-end items-end md:items-start
          lg:text-[24px] lg:-top-10 md:left-5 md:top-44 lg:left-[25%]"
        >
          {phrase1.map((item) => (
            <li className="flex items-center gap-1 md:gap-0">
              <li className="opacity-0 md:opacity-100"></li> {item}{" "}
              <li className=" md:hidden"></li>
            </li>
          ))}
        </div>
        <div className="absolute top-[32%] text-[7.7px] left-5  md:text-[16px] lg:text-[24px] text-[#BDBDBD] md:left-[40%] md:top-[10%] lg:top-[40%]  lg:left-[50px]">
          {phrase2.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div className="absolute w-fit top-[47%] right-4  text-[7.7px]  md:text-[16px] lg:text-[24px] text-[#BDBDBD] md:top-[74%] md:left-[30%] lg:top-[75%]  lg:left-[37%]">
          {phrase3.map((item) => (
            <h1 className="flex w-fit justify-start items-center gap-2 lg:gap-4">
              {" "}
              <span className=" md:w-[10px] w-[4px] bg-[#BDBDBD] md:px-1 h-[4px] md:h-[10px] rounded-full "></span>
              {item}
            </h1>
          ))}
        </div>
        <div className="absolute w-fit  bottom-0 left-5 text-[7.7px] md:text-[16px] lg:text-[24px] text-[#BDBDBD] md:top-[35%] md:left-[50%] lg:top-[20%]  lg:left-[65%]">
          {phrase4.map((item) => (
            <h1
              className={`flex  w-[200px] md:w-fit justify-start items-center gap-2 md:gap-2 lg:gap-4`}
            >
              {" "}
              <span className=" w-[4px] md:w-[10px] bg-[#BDBDBD] h-[4px] md:h-[10px] rounded-full "></span>{" "}
              {item}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
