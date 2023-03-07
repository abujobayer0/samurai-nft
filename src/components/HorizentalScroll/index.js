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

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-500vw",
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
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (e) => {
    const scrollSpeed = 2; // Increase or decrease this value to change the scroll speed
    const delta = e.deltaY * scrollSpeed;
    const newScrollPos = scrollPos + delta;
    setScrollPos(newScrollPos);
  };
  return (
    <>
      <section className="scroll-section-outer hidden lg:block max-w-7xl  ">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            {tabsDetail.map((tab, indx) => (
              <div className="scroll-section">
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
