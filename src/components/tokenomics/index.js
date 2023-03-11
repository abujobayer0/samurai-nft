import React, { useEffect, useLayoutEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";

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
    // <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
    //   <Title head={"T"} sub={"okenomics"} />
    //   <div className="grid grid-cols-1 lg:grid-cols-2 place-content-end  place-items-end w-full lg:gap-44">
    //     <div className="w-full  flex items-center justify-center">
    <ResponsivePie
      data={datas}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={29}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.4"]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={0}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.35}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />

    /* </div>
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
      </div> */

    // </div>
  );
};

export default Tokenomics;
