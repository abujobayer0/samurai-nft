import React from "react";
import { sponsers } from "../../constants";
import { ImgAlien } from "../../assets";
import { CommonSection } from "../";
const FeaturedSection = () => {
  return (
    <>
      <section className="max-w-7xl mb-20 mt-32 mx-auto px-5 sm:px-10">
        <h1 className="clash-700 mb-10 md:mb-[79px] text-[28px] lg:text-[38px]">
          Featured & Partners
        </h1>
        <div className="flex w-full overflow-hidden">
          <div className="flex flex-container  gap-10 mb-10 lg:mb-20 md:gap-8  lg:gap-[61px]  flex-row items-center  relative justify-center  ">
            {sponsers.map((img) => (
              <img
                className="md:w-32  w-20 h-18 lg:w-44  "
                src={img}
                alt="img"
              />
            ))}
          </div>
        </div>
        <CommonSection
          img={ImgAlien}
          title={"The Team and the "}
          subTitle={"About us"}
          Designtitle={"Narrative"}
          paragraph={
            "At 0xSamurai, we are dedicated to providing a secure and exciting gaming experience for our players. Our team consists of experienced developers and gaming enthusiasts who have crafted an immersive game that allows players to collect rare NFTs and compete in the battle arena. We take the security of our players' assets seriously, which is why our smart contract has undergone a thorough third-party audit. Additionally, our KYC process ensures that all players are on  a safe platform and protected from fraud. Join us on this adventure and unleash the samurai's might!"
          }
          isThreeButton
          btnOneTitle={"Learn more"}
          btnTwoTitle={"audit"}
          btnThreeTitle={"kyc"}
        />
      </section>
    </>
  );
};

export default FeaturedSection;
