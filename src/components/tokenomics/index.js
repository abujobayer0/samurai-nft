import React, { useEffect, useLayoutEffect, useState } from "react";
import * as echarts from "echarts";
import { Title } from "../";
const Tokenomics = () => {
  const [radius, setRadius] = useState([40, 200]);
  const datas = [
    {
      value: 40,
      name: "PRESALE",
      color: "#0FCBD7",
    },
    {
      value: 40,
      name: "LIQUIDITY",
      color: "#3FBF1B",
    },
    { value: 42, name: "GAME REWARD", color: "#DF9400" },
    { value: 30, name: "AIRDROP", color: "#A5B00E" },
    { value: 26, name: "CEX LISTING", color: "#F6C165" },
    {
      value: 40,
      name: "FURTHER DEVELOPMENT ",
      color: "#D17D00",
    },
    { value: 30, name: "MARKETING AND PARTNERHIP", color: "#D17D00" },
  ];
  const updateRadius = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setRadius([25, 150]);
    }
    if (screenWidth <= 500) {
      setRadius([15, 75]);
    } else {
      setRadius([40, 200]);
    }
  };
  const updates = () => {
    updateRadius();
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", updates);
  }, []);
  useEffect(() => {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);
    const mediaQuery = {
      query: "(max-width: 768px)",
      option: {
        tooltip: {
          position: ["0%", "10%"],
        },
        // ... other options
      },
    };
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
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: radius,

          center: ["50%", "50%"],
          roseType: "area",
          xAxisIndex: 0,
          yAxisIndex: 0,
          barWidth: 4,
          itemStyle: {
            color: "#333",
          },

          itemStyle: {
            borderRadius: 12,
            borderColor: "#111111",
            borderWidth: 10,
          },

          data: datas,
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [datas]);

  return (
    <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
      <Title head={"T"} sub={"okenomics"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center w-full lg:gap-44">
        <div className="w-full  h-[500px] flex items-center justify-center">
          <div id="main" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div className="w-full flex flex-col justify-end gap-4 items-start">
          {datas.map((data) => (
            <li style={{ color: data.color, width: 330 }}>
              <span style={{ color: "#fff" }}>
                <span className="px-2">{data.value}%</span>
                {data.name}
              </span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
