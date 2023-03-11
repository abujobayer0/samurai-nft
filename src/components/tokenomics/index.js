import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Title } from "../";
import { Chart } from "chart.js";

const Tokenomics = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const datas = [
    {
      id: "Presale",
      title: "Presale",
      value: 80,
      color: "#D17D00",
    },
    {
      id: "liquidity",
      title: "liquidity",
      value: 120,
      color: "#0FCBD7",
    },
    {
      id: "game reward",
      title: "game reward",
      value: 200,
      color: "#3FBF1B",
    },
    {
      id: "airdrop",
      title: "airdrop",
      value: 350,
      color: "#DF9400",
    },
    {
      id: "cex marketing",
      title: "cex marketing",
      value: 50,
      color: "#A5B00E",
    },
    {
      id: "marketing and aprtnership",
      title: "marketing and aprtnership",
      value: 60,
      color: "#F6C165",
    },
    {
      id: "further developement and ecosystem maintence",
      title: "further developement and ecosystem maintence",
      value: 150,
      color: "#A5B00E",
    },
  ];
  const data = {
    labels: [
      "Presale",
      "liquidity",
      "game reward",
      "airdrop",
      "cex listing",
      "marketing and partnership",
      "further developement and ecosystem maintence",
    ],
    datasets: [
      {
        label: "Tokenomics",
        data: [80, 120, 150, 400, 50, 60, 150],
        backgroundColor: [
          "#D17D00",
          "#0FCBD7",
          "#3FBF1B",
          "#DF9400",
          "#A5B00E",
          "#F6C165",
          "#5B65E8",
        ],
        borderColor: ["#111111"],
        borderWidth: 7,
        hoverOffset: 25,
      },
    ],
  };
  const option = {
    plugins: {
      title: {
        display: true,
        text: "Tokenomics",
      },

      elements: {
        arc: {
          // set the border radius here
        },
      },
      legend: {
        display: false,
        position: "right",
      },
    },
    cutoutPercentage: 70,
  };
  return (
    <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
      <Title head={"T"} sub={"okenomics"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center  place-items-center w-full lg:gap-[100%">
        <div className="w-full -fit relative  overflow-visible z-30 flex items-center justify-center">
          <Doughnut
            style={{
              width: "100%",
              height: "100%",
              zIndex: 1,
              padding: 50,
              overflow: "visible",
            }}
            data={data}
            options={option}
          />
        </div>
        <div className="w-full relative  flex justify-end items-end">
          <div className="w-[400px] flex justify-end  lg:items-start flex-col   gap-4">
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
                  className="w-[15px] h-[15px] lg:w-[30px] py-4 md:py-0 px-4 lg:h-[30px]"
                ></span>
                <span className="mt-2 text-[22px] md:text-[30px]">
                  <span className="px-2">{data.value}%</span>
                  <span>{data.title}</span>
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
