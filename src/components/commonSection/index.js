import React from "react";

const CommonSection = ({
  img,
  title,
  subTitle,
  paragraph,
  Designtitle,
  isThreeButton,
}) => {
  return (
    <>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="max-w-[511px] max-h-[734px]">
          <img className="w-full" src={img} alt="img" />
        </div>
        <div>
          {subTitle && (
            <h3 className="clash-700 text-[28px] lg:text-[38px]">{subTitle}</h3>
          )}
          <h1 className="clash-700 leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
            {title}
          </h1>
          <div className="relative    w-full flex flex-col  mx-auto ">
            <div className="bg-primary-text  w-[200px] sm:w-[270px] h-[35px] lg:w-[307px] md:w-[270px] md:h-[52px] lg:h-[62px] " />
            <h1 className=" bg-transparent clash-700 leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[64px] lg:text-[60px]  absolute -bottom-2 md:bottom-2 lg:bottom-2">
              {Designtitle}
            </h1>
          </div>
          <p className="text-[16px]">{paragraph}</p>
        </div>
      </section>
    </>
  );
};

export default CommonSection;
