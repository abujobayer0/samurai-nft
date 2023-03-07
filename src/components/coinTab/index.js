import React from "react";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="grid place-items-center place-content-center mx-auto mb-10 md:mb-0  w-full h-fit grid-cols-1 
      md:grid-cols-2 "
    >
      <div className="w-[400px]  lg:w-[500px] md:order-2 mx-auto p-8">
        <img loading="lazy" src={img} className="w-full mx-auto" alt="coin" />
      </div>
      <div className="w-full  ">
        <p className="text-[16px] fire-effect">{para}</p>
      </div>
    </div>
  );
};

export default CoinTab;
