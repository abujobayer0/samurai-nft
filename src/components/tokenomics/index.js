import React, { useEffect, useLayoutEffect, useState } from "react";
import * as echarts from "echarts";
import { Title } from "../";
const Tokenomics = () => {
  const [radius, setRadius] = useState([40, 200]);
  const datas = [
    {
      value: 16,
      name: "PRESALE",
      color: "#D17D00",
    },
    {
      value: 16,
      name: "LIQUIDITY",
      color: "#0FCBD7",
    },
    { value: 36, name: "GAME REWARD", color: "#3FBF1B" },
    { value: 5, name: "AIRDROP", color: "#5B65E8" },
    { value: 7, name: "CEX LISTING", color: "#D17D00" },
    {
      value: 12,
      name: "DEVELOPMENT ",
      color: "#A5B00E",
    },
    { value: 6.4, name: "MARKETING ", color: "#F6C165" },
  ];
  const updateRadius = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setRadius([25, 150]);
    }
    if (screenWidth <= 600) {
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

    const option = {
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
        formatter: function (params) {
          // Use a function to customize the tooltip
          const colorDot = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>`;
          return `${colorDot} ${params.name}: ${params.value} (${params.percent}%)`; // Format the tooltip to show a color dot, the value, percentage, and name
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: true,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            itemStyle: {
              // customize appearance on hover

              borderRadius: [10, 10, 10, 10],
            },
          },
          itemStyle: {
            borderRadius: [0, 0, 10, 10],
            borderColor: "#111111",
            borderWidth: 5,
            width: 200,
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
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-end  place-items-end w-full lg:gap-44">
        <div className="w-full  h-[500px] flex items-center justify-center">
          <div id="main" style={{ width: "100%", height: "100%" }}></div>
        </div>
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
