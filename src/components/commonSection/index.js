import React from "react";
import { Button, DemoBtn } from "../";
import AuditBtn from "../AuditBtn";
import KycBtn from "../KycBtn";
import LearnMoreBtn from "../Learnmore";
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
          className={`w-full ${
            orderRev && "order-2"
          }  section section-1 flex justify-center  items-center `}
        >
          {/* <div className=" md:w-[240] lg:w-[400px]  mx-auto relative rounded-full md:h-[380px] lg:h-[500px]"> */}
          <img className="w-full h-full " src={img} alt="img" />
          {/* </div> */}
        </div>
        {/* rounded-full object-cover
        -rotate-45 */}
        <div className="section   section-2">
          {subTitle && (
            <h3 className="clash-700 text-[25px] lg:text-[38px]">{subTitle}</h3>
          )}
          <h1 className="clash-700 leading-[78px] text-[35px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
            {title}
          </h1>
          <div className="relative    w-full flex flex-col  mx-auto ">
            <div className="bg-primary-text  w-[200px] sm:w-[270px] h-[35px] lg:w-[307px] md:w-[270px] md:h-[52px] lg:h-[62px] " />
            <h1 className=" bg-transparent clash-700 leading-[78px] text-[35px] sm:text-[40px]  md:text-[45px]  lg:text-[60px]  absolute -bottom-2 md:bottom-2 lg:bottom-2">
              {Designtitle}
            </h1>
          </div>
          <p className="text-[14px] sm:text-[16px]  text-[#BCBCBC] mt-4">
            {paragraph}
          </p>
          {isThreeButton && (
            <div className="flex min-w-full  py-2 h-fit flex-col md:flex-row justify-start  md:flex-wrap lg:flex-nowrap  gap-10 lg:gap-10  xl:gap-10 mt-10  items-center">
              <LearnMoreBtn
                title={"Learn more"}
                bgColor={"#111111"}
                color={"#FFFFFF"}
              />
              <AuditBtn
                title={"Audit"}
                bgColor={"#2461FF"}
                dotColor={"#5182FF"}
                wFull
                hiddenSm
                color={"#FFFFFF"}
              />
              <KycBtn
                title={"kyc"}
                bgColor={"#1CB219"}
                wFull
                dotColor={"#58E955"}
                color={"#FFFFFF"}
                green
                hiddenSm
              />
              <div className="w-[96%] gap-6 md:hidden flex">
                <AuditBtn
                  title={"Audit"}
                  bgColor={"#2461FF"}
                  dotColor={"#5182FF"}
                  wFull
                  color={"#FFFFFF"}
                />
                <KycBtn
                  title={"kyc"}
                  bgColor={"#1CB219"}
                  wFull
                  dotColor={"#58E955"}
                  color={"#FFFFFF"}
                  green
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CommonSection;
