import React from "react";
import { Logo } from "../../assets";
import { navLinks, icons } from "../../constants/";

const NavBar = () => {
  return (
    <div className="md:grid mx-auto px-10  flex max-w-7xl justify-between md:grid-cols-3 pt-2 md:place-items-center md:place-content-center ">
      <div className=" hidden lg:flex items-center  w-full  gap-[21px] ">
        {navLinks.map((nav, indx) => (
          <span key={indx} className="text-sm uppercase ">
            {nav.title}
          </span>
        ))}
      </div>
      <Logo />
      <div className="hidden md:flex items-center justify-end w-full gap-[28px]">
        {icons.map((icon, indx) => (
          <button
            key={indx}
            className="bg-[#8C8C8C] flex items-center justify-center h-[51px] rounded-2xl w-[53px]"
          >
            {" "}
            <span className="w-[30px] ">{icon.icon}</span>
          </button>
        ))}
      </div>
      <div className="flex lg:hidden">
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20"
            stroke="#fff9eb"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
