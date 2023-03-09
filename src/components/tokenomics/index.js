import React, { useEffect, useLayoutEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";

import { Title } from "../";
const Tokenomics = () => {
  const datas = [
    {
      value: 50,
      label: "PRESALE",
      color: "#D17D00",
    },
    {
      value: 40,
      label: "LIQUIDITY",
      color: "#0FCBD7",
    },
    { value: 70, label: "GAME REWARD", color: "#3FBF1B" },
    { value: 36, label: "AIRDROP", color: "#5B65E8" },
    { value: 36, label: "CEX LISTING", color: "#D17D00" },
    {
      value: 47,
      label: "DEVELOPMENT ",
      color: "#A5B00E",
    },
    { value: 26, label: "MARKETING ", color: "#F6C165" },
  ];
  return (
    // <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
    //   <Title head={"T"} sub={"okenomics"} />
    //   <div className="grid grid-cols-1 lg:grid-cols-2 place-content-end  place-items-end w-full lg:gap-44">
    //     <div className="w-full  flex items-center justify-center">
    <ResponsivePie
      data={datas}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-32}
      innerRadius={0.4}
      padAngle={3}
      activeInnerRadiusOffset={13}
      activeOuterRadiusOffset={25}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0"]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={45}
      arcLinkLabelsTextOffset={0}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsOffset={-24}
      arcLinkLabelsDiagonalLength={0}
      arcLinkLabelsStraightLength={0}
      arcLinkLabelsThickness={0}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.55}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", "3"]],
      }}
      tooltip={function (e) {
        var t = e.datum;
        return (
          <s style={{ color: t.color }}>
            <d>id</d>
            <c>{t.id}</c>
            <d>value</d>
            <c>{t.value}</c>
            <d>formattedValue</d>
            <c>{t.formattedValue}</c>
            <d>color</d>
            <c>{t.color}</c>
          </s>
        );
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
          match: { id: "ruby" },
          id: "dots",
        },
        {
          match: { id: "c" },
          id: "dots",
        },
        {
          match: { id: "go" },
          id: "dots",
        },
        {
          match: { id: "python" },
          id: "dots",
        },
        {
          match: { id: "scala" },
          id: "lines",
        },
        {
          match: { id: "lisp" },
          id: "lines",
        },
        {
          match: { id: "elixir" },
          id: "lines",
        },
        {
          match: { id: "javascript" },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: 200,
          translateY: -115,
          itemsSpacing: 0,
          itemWidth: 10,
          itemHeight: 25,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 19,
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
