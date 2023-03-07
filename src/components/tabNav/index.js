import React from "react";

const TabNav = () => {
  return (
    <>
      <ul className="w-full   px-4 clash-700 hidden lg:flex transition duration-150 ease-linear items-center justify-around rounded-full bg-[#212121]">
        <li
          className={`w-full  flex tab-item justify-center items-center px-1 sm:px-4 md:px-6 lg:px-12 md:h-[60px] sm:h-[40px] h-[30px] lg:h-[91px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-sm lg:text-3xl `}
        >
          Hagane
        </li>
        <li
          className={`w-full  flex tab-itemx justify-center items-center px-1 sm:px-4 md:px-6 lg:px-12 md:h-[60px] sm:h-[40px] h-[30px] lg:h-[91px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-sm lg:text-3xl `}
        >
          Mizu
        </li>
        <li
          className={`w-full  tab-item flex justify-center items-center px-1 sm:px-4 md:px-6 lg:px-12 md:h-[60px] sm:h-[40px] h-[30px] lg:h-[91px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-sm lg:text-3xl `}
        >
          Kaze
        </li>
        <li
          className={`w-full  tab-item flex justify-center items-center px-1 sm:px-4 md:px-6 lg:px-12 md:h-[60px] sm:h-[40px] h-[30px] lg:h-[91px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-sm lg:text-3xl `}
        >
          Tsuchi
        </li>
        <li
          className={`w-full  tab-item  flex justify-center items-center px-1 sm:px-4 md:px-6 lg:px-12 md:h-[60px] sm:h-[40px] h-[30px] lg:h-[91px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-sm lg:text-3xl `}
        >
          Denki
        </li>
      </ul>
    </>
  );
};

export default TabNav;
