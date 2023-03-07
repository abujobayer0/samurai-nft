import React from "react";
import { Button } from "../";
const CommonSection = ({
  img,
  title,
  subTitle,
  paragraph,
  Designtitle,
  isThreeButton,
  btnOneTitle,
  btnTwoTitle,
  btnThreeTitle,
  orderRev,
}) => {
  return (
    <>
      {" "}
      <section className="grid overflow-hidden grid-cols-1 gap-10  md:grid-cols-2">
        <div
          className={`max-w-[511px] ${
            orderRev && "order-2"
          }  section section-1 max-h-[734px]`}
        >
          <img className="w-full" src={img} alt="img" />
        </div>

        <div className="section section-2">
          {subTitle && (
            <h3 className="clash-700 text-[28px] lg:text-[38px]">{subTitle}</h3>
          )}
          <h1 className="clash-700 leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
            {title}
          </h1>
          <div className="relative    w-full flex flex-col  mx-auto ">
            <div className="bg-primary-text  w-[200px] sm:w-[270px] h-[35px] lg:w-[307px] md:w-[270px] md:h-[52px] lg:h-[62px] " />
            <h1 className=" bg-transparent clash-700 leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px]  lg:text-[60px]  absolute -bottom-2 md:bottom-2 lg:bottom-2">
              {Designtitle}
            </h1>
          </div>
          <p className="text-[16px]  text-[#BCBCBC] mt-4">{paragraph}</p>
          {isThreeButton && (
            <div className="flex px-2  flex-wrap gap-4 space-x-1 lg:gap-10 mt-10 justify-start items-center">
              <Button isSecondary title={btnOneTitle} />
              <Button title={btnTwoTitle} isBlue />
              <Button title={btnThreeTitle} isGreen />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CommonSection;