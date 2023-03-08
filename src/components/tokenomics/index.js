import React, { useEffect } from "react";
import * as echarts from "echarts";
const Tokenomics = () => {
  const datas = [
    { value: 40, name: "PRESALE", color: "#fff" },
    { value: 40, name: "LIQUIDITY", color: "#fff" },
    { value: 42, name: "GAME REWARD", color: "#fff" },
    { value: 30, name: "AIRDROP", color: "#fff" },
    { value: 26, name: "CEX LISTING", color: "#fff" },
    {
      value: 40,
      name: "FURTHER DEVELOPMENT AND ECOSYSTEM MAINTENCE",
      color: "#fff",
    },
    { value: 30, name: "MARKETING AND PARTNERHIP", color: "#fff" },
  ];
  useEffect(() => {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);

    const option = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      // Global palette:
      color: [
        "#0FCBD7",
        "#3FBF1B",
        "#DF9400",
        "#A5B00E",
        "#F6C165",
        "#5B65E8",
        "#D17D00",
        // "#6e7074",
        // "#546570",
        // "#D17D00",
        // "#c4ccd3",
      ],

      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 250],
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
          data: datas,
        },
      ],
    };

    myChart.setOption(option);

    window.addEventListener("resize", () => {
      myChart.resize();
    });
    return () => {
      window.removeEventListener("resize", () => {
        myChart.resize();
      });
      myChart.dispose();
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
      <div className="flex w-full justify-between items-center flex-col lg:flex-row">
        <div className="w-full  md:h-[500px] flex items-center justify-center">
          <div id="main" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div>
          {datas.map((data) => (
            <li className={`bg-${[data.color]}`}>
              {" "}
              {data.value} {data.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
