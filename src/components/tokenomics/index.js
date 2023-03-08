import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import { Title } from "../";
const Tokenomics = () => {
  const [radius, setRadius] = useState([50, 250]);
  const datas = [
    { value: 40, name: "PRESALE", color: "#0FCBD7" },
    { value: 40, name: "LIQUIDITY", color: "#3FBF1B" },
    { value: 42, name: "GAME REWARD", color: "#DF9400" },
    { value: 30, name: "AIRDROP", color: "#A5B00E" },
    { value: 26, name: "CEX LISTING", color: "#F6C165" },
    {
      value: 40,
      name: "FURTHER DEVELOPMENT AND ECOSYSTEM MAINTENCE",
      color: "#D17D00",
    },
    { value: 30, name: "MARKETING AND PARTNERHIP", color: "#D17D00" },
  ];
  useEffect(() => {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setRadius([25, 150]);
      } else {
        setRadius([50, 250]);
      }
    };

    window.addEventListener("resize", updateRadius);
    const option = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      color: [
        "#0FCBD7",
        "#3FBF1B",
        "#DF9400",
        "#A5B00E",
        "#F6C165",
        "#5B65E8",
        "#D17D00",
        "#D17D00",
      ],
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: radius,

          center: ["50%", "50%"],
          roseType: "area",
          xAxisIndex: 1,
          yAxisIndex: 0,
          barWidth: 10,
          itemStyle: {
            color: "#333",
          },
          data: [40, 38, 32, 30, 28, 26, 22, 18],
          itemStyle: {
            borderRadius: 10,
          },
          itemGap: 20,
          data: datas,
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [radius]);

  return (
    <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
      <Title head={"T"} sub={"okenomics"} />
      <div className="flex w-full   justify-center py-12 items-center flex-col lg:flex-row">
        <div className="w-full  h-[500px] flex items-center justify-center">
          <div id="main" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div className="w-full">
          {datas.map((data) => (
            <li style={{ color: data.color }}>
              <li style={{ color: "#fff", listStyle: "none", display: "flex" }}>
                {" "}
                {data.value} {data.name}
              </li>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
