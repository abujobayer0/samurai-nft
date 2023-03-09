import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { tabsDetail } from "../../constants";
import { TabContent, TabNav } from "../";

gsap.registerPlugin(ScrollTrigger);
const HorizentalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [nav, setNav] = useState(1);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionWidth = sectionRef.current.offsetWidth;

    const translateXValue = -(sectionWidth - window.innerWidth) / 2;
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: `0vw`,
      },
      {
        translateX: `-400vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 100",
          end: "2000 top",
          scrub: 1,
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
      <section className="scroll-section-outer hidden xl:block overflow-hidden max-w-[1400px]  ">
        <div ref={triggerRef}>
          <TabNav />{" "}
          <div
            id="panels-container"
            ref={sectionRef}
            className="scroll-section-inner transition duration-100 ease-in-out flex justify-center items-center p-0 min-h-[80vh]"
          >
            {tabsDetail.map((tab, indx) => (
              <div
                key={indx}
                id={`${tab.id}`}
                className="scroll-section flex justify-center m-0 items-center z-50 "
              >
                <TabContent
                  key={indx}
                  id={tab.id}
                  nav={nav}
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
