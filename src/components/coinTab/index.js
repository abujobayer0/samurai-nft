import React from "react";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="grid place-items-center  place-content-center mx-auto mb-10 md:mb-0  w-full h-fit grid-cols-1 
      md:grid-cols-2 "
    >
      <div className=" md:order-2 flex  justify-end items-end  p-8">
        <img loading="lazy" src={img} className="w-full mx-auto" alt="coin" />
      </div>
      <div className="w-full flex justify-center items-center ">
        <p className="text-[16px] fire-effect">{para}</p>
      </div>
    </div>
  );
};

export default CoinTab;
