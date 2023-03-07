import React from "react";

const CoinTab = ({ img, para }) => {
  return (
    <div
      className="grid place-items-center mb-10 w-full h-fit grid-cols-1 
      md:grid-cols-2 "
    >
      <div className="w-[400px] lg:w-[500px] lg:order-2 p-8">
        <img src={img} className="w-full" alt="coin" />
      </div>
      <div className="w-full  ">
        <p className="text-[16px] fire-effect">{para}</p>
      </div>
    </div>
  );
};

export default CoinTab;
