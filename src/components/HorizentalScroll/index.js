import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { tabsDetail } from "../../constants";
import { TabContent, TabNav } from "../";
import StepsSection from "../stepsSection";

gsap.registerPlugin(ScrollTrigger);
const HorizentalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [navBtn, setNavBtn] = useState([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "0vw",
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 100",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
      }
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer hidden lg:block max-w-7xl  ">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            {tabsDetail.map((tab, indx) => (
              <div
                key={indx}
                className="scroll-section z-50 mx-auto lg:pr-96 xl:pr-[20vw] 2xl:pr-[50vw] h-screen"
              >
                <TabContent
                  key={indx}
                  title={tab.title}
                  paragraph={tab.paragraph}
                  icon={tab.icon}
                  img={tab.img}
                  btn={tab.btn}
                  condition={tab.condition}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizentalScroll;
