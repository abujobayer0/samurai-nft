import React from "react";

const Title = ({ head, sub, size }) => {
  return (
    <>
      <h1
        className={`clash-700 mb-5 text-start md:mb-[30px] lg:mb-[70px] leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]`}
      >
        {head}
        <span className="bg-[#EC1C24] pr-8 lg:pr-12">{sub}</span>
      </h1>
    </>
  );
};

export default Title;
