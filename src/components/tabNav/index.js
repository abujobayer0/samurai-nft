import React from "react";
import { Link, scroller } from "react-scroll";
const TabNav = ({ setNav, nav }) => {
  const btns = [
    { name: "Hagone", id: "section1" },
    { name: "Mizu", id: "section2" },
    { name: "Kaze", id: "section3" },
    { name: "Tsuchi", id: "section4" },
    { name: "Denki", id: "section5" },
  ];
  scroller.scrollTo("element-to-scroll-to", {
    duration: 600,
    delay: 0,
    smooth: "easeInOutQuart",
  });
  return (
    <>
      <ul className="max-w-[1200px] mx-auto py-2  px-4 clash-700 hidden lg:flex transition duration-150 ease-linear items-center justify-around rounded-full bg-[#212121]">
        {btns.map((btn) => (
          <li
            key={btn.id}
            className={`w-full m-0  flex tab-item justify-center items-center px-1 sm:px-4 md:px-6 lg:px-4 md:h-[60px] sm:h-[40px] h-[30px] lg:h-[70px] rounded-full md:text-xl sm:text-lg cursor-pointer text-sm lg:text-3xl `}
          >
            <Link activeClass="active" to={btn.id} spy={true} smooth={true}>
              <a href={btn.id}>{btn.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TabNav;
