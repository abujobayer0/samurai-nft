import React from "react";

const TabContent = ({
  title,
  paragraph,
  icon,
  isFire,
  isLeaf,
  isPsyhic,
  isWater,
  isSky,
  img,
}) => {
  return (
    <>
      <section className="grid  grid-cols-1 tab-content max-h-[724px] max-w-full relative lg:pt-44 md:mt-20  mt-16 md:grid-cols-2">
        <div></div>
        <div className="lg:max-w-[535px] relative md:max-w-[335px] md:max-h-[524px] max-w-[240px] mx-auto h-[300px] lg:max-h-[724px] flex justify-center items-center">
          <div
            className={`lg:w-[538px] md:w-[338px] md:h-[338px] bottom-0 md:top-0 lg:bottom-0 w-[250px] h-[250px] lg:h-[538px]  absolute  -z-10   mx-auto sm:rounded-[50px] rounded-[40px] lg:rounded-[81px] ${
              isFire && "bg-gradient-to-t from-orange-600 to-red-600"
            }
             ${isLeaf && "bg-gradient-to-t to-green-500 from-yellow-600"} 
             ${isPsyhic && "bg-gradient-to-t from-yellow-400 to-orange-500"} ${
              isWater && "bg-gradient-to-b from-indigo-400 to-orange-400"
            } ${isSky && "bg-gradient-to-b from-gray-400 to-yellow-300"}`}
          ></div>
          <img loading="lazy" className="max-w-full mx-auto" src={img} alt="" />
        </div>
      </section>
    </>
  );
};

export default TabContent;
