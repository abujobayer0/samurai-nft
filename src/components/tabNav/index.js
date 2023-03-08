import React from "react";
import { useParams } from "react-router-dom";

const TabNav = ({ setNav, nav }) => {
  const btns = [
    { name: "Hagane", id: 1 },
    { name: "Mizu", id: 2 },
    { name: "Kaze", id: 3 },
    { name: "Tsuchi", id: 3 },
    { name: "Denki", id: 4 },
  ];
  const params = useParams();
  console.log(params);
  return (
    <>
      <ul className="max-w-[1200px] mx-auto py-2  px-4 clash-700 hidden lg:flex transition duration-150 ease-linear items-center justify-around rounded-full bg-[#212121]">
        {btns.map((btn) => (
          <li
            className={`w-full m-0  flex tab-item justify-center items-center px-1 sm:px-4 md:px-6 lg:px-4 md:h-[60px] sm:h-[40px] h-[30px] lg:h-[70px] rounded-full md:text-xl sm:text-lg cursor-pointer text-sm lg:text-3xl `}
          >
            <a onClick={() => setNav(btn.id)} href={`#${btn.id}`}>
              {btn.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TabNav;
