import { Button } from "../index";
import googlePlayStoreLogo from "../../assets/googlePlayStoreLogo.webp";
const HeroSection = () => {
  return (
    <>
      <section className="mt-[62px] mx-auto max-w-7xl px-10">
        <h1 className="clash-700  leading-[78px] uppercase text-center text-[40px]  md:text-[50px] lg:text-[64px]">
          This world needs a samurai <br />
          <div className="relative pt-4  w-fit mx-auto text-center ">
            <div className="bg-primary-text lg:w-[567px] md:w-[480px] w-[380px] h-[42px] lg:h-[62px] " />
            <h1 className=" bg-transparent absolute bottom-0 lg:bottom-2">
              are you ready?
            </h1>
          </div>
        </h1>
        <p className="uppercase text-[14px] sm:text-[16px]  mt-[16px] text-center leading-[30px]">
          Enter the world of 0xSamurai, where ordinary warriors are
          non-existent, and only legendary samurais who have mastered the art of
          combat exist. They don't just fight for glory but for the rarest and
          most powerful NFTs in the land. These NFTs unlock hidden abilities
          that enable a samurai to rise and become the greatest warrior in the
          battle arena.
        </p>
        <div className="w-full flex flex-col mx-auto justify-center items-center">
          <div className="w-full flex mx-auto justify-center items-center gap-6 mt-10">
            <Button title={"Play now"} />
            <Button title={"learn more"} isSecondary />
          </div>
          <div className="flex mx-auto justify-center items-center w-full gap-2 mt-10">
            <button className="flex w-[180px] h-[52px] items-center border-2 px-[17px] rounded-xl gap-2 py-[9px]">
              <svg
                width="27"
                height="27"
                viewBox="0 0 29 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9214 17.7192C23.8828 13.5294 27.4401 11.491 27.6028 11.3961C25.5881 8.53215 22.4654 8.14085 21.3681 8.10965C18.7454 7.84055 16.2014 9.63975 14.8654 9.63975C13.5028 9.63975 11.4454 8.13565 9.2281 8.17985C6.37477 8.22275 3.70543 9.83345 2.24143 12.3347C-0.779899 17.4345 1.47344 24.929 4.3681 29.0513C5.8161 31.0702 7.5081 33.3244 9.72277 33.2451C11.8894 33.158 12.6988 31.8983 15.3134 31.8983C17.9041 31.8983 18.6641 33.2451 20.9228 33.1944C23.2481 33.158 24.7121 31.1664 26.1094 29.1293C27.7828 26.8153 28.4548 24.5365 28.4814 24.4195C28.4268 24.4013 23.9654 22.7411 23.9214 17.7192Z"
                  fill="white"
                />
                <path
                  d="M19.6548 5.39785C20.8201 3.97695 21.6174 2.04385 21.3961 0.0821533C19.7094 0.154953 17.6001 1.21965 16.3854 2.60935C15.3108 3.83395 14.3508 5.84115 14.5988 7.72875C16.4934 7.86655 18.4388 6.79665 19.6548 5.39785Z"
                  fill="white"
                />
              </svg>
              <p className="font-clash flex flex-col justify-start items-start">
                <span className="text-xs">Download on the</span>
                <h2 className="text-lg font-semibold">App Store</h2>
              </p>
            </button>
            <button className="flex  w-[180px] h-[52px] items-center border-2 px-[17px] rounded-xl gap-2 py-[9px]">
              <img className="w-6" src={googlePlayStoreLogo} alt="icon" />
              <p className="font-clash flex flex-col justify-start items-start ">
                <span className="text-xs uppercase">Get it on</span>
                <h2 className="text-lg font-semibold">Google Play</h2>
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
