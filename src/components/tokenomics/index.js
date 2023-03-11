import React, { useEffect, useLayoutEffect, useState } from "react";

import { Title } from "../";
const Tokenomics = () => {
  const datas = [
    {
      id: "rust",
      label: "rust",
      value: 279,
      color: "hsl(296, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 312,
      color: "hsl(166, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 429,
      color: "hsl(111, 70%, 50%)",
    },
    {
      id: "make",
      label: "make",
      value: 189,
      color: "hsl(88, 70%, 50%)",
    },
    {
      id: "css",
      label: "css",
      value: 448,
      color: "hsl(76, 70%, 50%)",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
      <Title head={"T"} sub={"okenomics"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-end  place-items-end w-full lg:gap-44">
        <div className="w-full  flex items-center justify-center"></div>
        <div className="w-full ">
          <div className="w-full flex flex-col   gap-4">
            {datas.map((data) => (
              <div
                className="w-fit"
                style={{
                  color: "white",
                  display: "flex",
                  fontSize: "22px",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    background: data.color,

                    borderRadius: "100%",
                  }}
                  className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                ></span>
                <span className="mt-2 text-[22px] md:text-[36px]">
                  <span className="px-2">{data.value}%</span>
                  <span>{data.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
