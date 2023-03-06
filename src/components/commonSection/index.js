import React, { useEffect, useRef } from "react";

const CommonSection = ({
  img,
  title,
  subTitle,
  paragraph,
  Designtitle,
  isThreeButton,
}) => {
  const sectionTwoRef = useRef(null);

  const sectionOneRef = useRef(null);

  useEffect(() => {
    const sectionOne = sectionOneRef.current;
    const sectionTwo = sectionTwoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionOne.style.transform = "translateY(0)";
          sectionOne.style.opacity = 1;
          sectionTwo.style.transform = "translateX(0)";
          sectionTwo.style.opacity = 1;
          console.log(entry);
        } else {
          sectionOne.style.transform = "translateY(40%)";
          sectionOne.style.opacity = 0;
          sectionTwo.style.transform = "translateX(40%)";
          sectionTwo.style.opacity = 0;
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionTwo);

    return () => {
      observer.unobserve(sectionTwo);
    };
  }, []);
  return (
    <>
      <section className="grid overflow-hidden grid-cols-1 gap-10 md:grid-cols-2">
        <div
          ref={sectionOneRef}
          className="max-w-[511px] section section-1 max-h-[734px]"
        >
          <img className="w-full" src={img} alt="img" />
        </div>
        <div ref={sectionTwoRef} className="section section-2">
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
          <p className="text-[16px] text-[#BCBCBC] mt-4">{paragraph}</p>
        </div>
      </section>
    </>
  );
};

export default CommonSection;
