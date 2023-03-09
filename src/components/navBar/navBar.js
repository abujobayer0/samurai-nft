import React, { useEffect, useState } from "react";
import { Logo } from "../../assets";
import { navLinks, icons } from "../../constants/";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (toggle) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [toggle]);

  return (
    <div className="md:grid pt-4 mx-auto px-5 sm:px-10  flex max-w-7xl justify-between md:grid-cols-3  md:place-items-center md:place-content-center ">
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
      <div className="flex transition ease-in-out duration-150 lg:hidden">
        <button onClick={handleToggle}>
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
        </button>
      </div>
      {toggle && (
        <nav
          className={` fixed  px-5 sm:px-10  py-2 bg-black top-0 left-0 min-h-screen z-50   w-full
          }`}
        >
          <button
            className="justify-end flex w-full mb-10"
            onClick={handleToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="50px"
              height="50px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-10 mx-auto ">
            <div className="  flex flex-col  justify-center items-center  w-full  gap-[30px] ">
              {navLinks.map((nav, indx) => (
                <span key={indx} className="text-sm cursor-pointer uppercase ">
                  {nav.title}
                </span>
              ))}
            </div>
            <div className="flex items-center  justify-center w-full gap-[28px]">
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
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
