import React, { useState } from "react";
import { Button, CoinTab, DemoBtn, Title } from "../";
import { GoldCoin, RioCoin } from "../../assets";
const CurrencySection = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="max-w-[1400px]    px-5 lg:px-10  mb-20 transition duration-150 ease-in-out flex flex-col justify-start items-start mx-auto  bg-transparent">
        <Title head={"The"} sub={"Currency"} />
        <ul className="lg:w-[510px] mb-10  md:w-[500px] w-[300px] px-4 clash-700 flex transition duration-150 ease-linear items-center justify-around rounded-full bg-[#212121]">
          <button onClick={() => setTab(0)}>
            <li
              className={` w-[137px] md:w-[187px] ${
                tab === 0 ? "bg-red-500" : ""
              }   flex tab-item justify-center items-center  md:h-[60px] sm:h-[40px] h-[40px] lg:h-[70px] rounded-full m-2 md:text-[36px] sm:text-lg cursor-pointer text-sm lg:text-3xl uppercase `}
            >
              RYO
            </li>
          </button>
          <button onClick={() => setTab(1)}>
            <li
              className={`w-[130px] md:w-[187px] ${
                tab === 1 ? "bg-red-500" : ""
              }  flex tab-item justify-center items-center px-1 sm:px-4 md:px-6 lg:px-12 md:h-[60px] sm:h-[40px] h-[40px] lg:h-[70px] rounded-full m-2 md:text-[36px] sm:text-lg cursor-pointer text-sm lg:text-3xl uppercase `}
            >
              gold
            </li>
          </button>
        </ul>
        <div className="w-full mb-10 mx-auto flex justify-center items-center">
          {tab === 0 && (
            <CoinTab
              img={RioCoin}
              para={
                "RYO is the major currency used on our platform, serving as the primary mode of payment for transactions and purchases. However, it is much more than just a currency. RYO is also a token of DAO voting, giving our community members the power to vote on important platform decisions and shape the direction of our future. Additionally, RYO has a 5% tax that is automatically deducted from each transaction and placed directly into our NFT reward vault. This ensures that our community members are always rewarded for their participation and engagement on our platform, whether it's through trading, gaming, or governance."
              }
            />
          )}
          {tab === 1 && (
            <CoinTab
              img={GoldCoin}
              para={
                "Gold is a valuable in-game currency that can only be obtained through staking RYO. By staking RYO, players can earn Gold which can then be used to purchase rare items and upgrades for their samurais. Gold is an essential resource for any serious samurai looking to rise to the top of the leaderboard and dominate the battle arena. With the ability to stake RYO and earn Gold, players have a powerful incentive to hold onto their RYO tokens and engage with the platform's economy."
              }
            />
          )}
        </div>{" "}
        <DemoBtn title={"learn more"} bgColor={"#11111"} color={"#fff"} />
      </div>
    </div>
  );
};

export default CurrencySection;
