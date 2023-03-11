import React, { useState } from "react";

const ClanTabs = ({ tabOne, tabTwo, tabThree, tabFour, tabFive }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const getSliderStyle = () => {
    const activeTabElement = document.querySelector(".tab-item.active");
    if (activeTabElement) {
      const activeTabWidth = activeTabElement.offsetWidth;
      const activeTabLeft = activeTabElement.offsetLeft;
      return { width: `${activeTabWidth}px`, left: `${activeTabLeft}px` };
    }
    return {};
  };

  return (
    <section className=" relative">
      <ul className="w-full mb-[20px]  px-4 clash-700 flex transition duration-150 ease-linear items-center justify-around rounded-full bg-[#212121]">
        <li
          className={`w-full  flex tab-item justify-center items-center px-1 sm:px-4 md:px-6  md:h-[60px] sm:h-[40px] h-[30px] lg:h-[71px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-xs lg:text-3xl ${
            activeTab === 1 ? "active" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Hagane
        </li>
        <li
          className={`w-full  flex tab-itemx justify-center items-center px-1 sm:px-4 md:px-6  md:h-[60px] sm:h-[40px] h-[30px] lg:h-[71px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-xs lg:text-3xl ${
            activeTab === 2 ? "active" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Mizu
        </li>
        <li
          className={`w-full  tab-item flex justify-center items-center px-1 sm:px-4 md:px-6  md:h-[60px] sm:h-[40px] h-[30px] lg:h-[71px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-xs lg:text-3xl ${
            activeTab === 3 ? "active" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          Kaze
        </li>
        <li
          className={`w-full  tab-item flex justify-center items-center px-1 sm:px-4 md:px-6  md:h-[60px] sm:h-[40px] h-[30px] lg:h-[71px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-xs lg:text-3xl ${
            activeTab === 4 ? "active" : ""
          }`}
          onClick={() => handleTabClick(4)}
        >
          Tsuchi
        </li>
        <li
          className={`w-full  tab-item  flex justify-center items-center px-1 sm:px-4 md:px-6  md:h-[60px] sm:h-[40px] h-[30px] lg:h-[71px] rounded-full m-2 md:text-xl sm:text-lg cursor-pointer text-xs lg:text-3xl ${
            activeTab === 5 ? "active" : ""
          }`}
          onClick={() => handleTabClick(5)}
        >
          Denki
        </li>
        <div className="tab-slider" style={getSliderStyle()}></div>
      </ul>
      <div className="tab-content mb-[111px] ">
        {/* Render the content for the active tab */}
        {activeTab === 1 && <div>{tabOne}</div>}
        {activeTab === 2 && <div>{tabTwo}</div>}
        {activeTab === 3 && <div>{tabThree}</div>}
        {activeTab === 4 && <div>{tabFour}</div>}
        {activeTab === 5 && <div>{tabFive}</div>}
      </div>
    </section>
  );
};

export default ClanTabs;
