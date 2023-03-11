import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Title } from "../";
import { Chart } from "chart.js";

const Tokenomics = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const datas = [
    {
      id: "rust",
      title: "rust",
      value: 279,
      color: "hsl(296, 70%, 50%)",
    },
    {
      id: "stylus",
      title: "stylus",
      value: 312,
      color: "hsl(166, 70%, 50%)",
    },
    {
      id: "python",
      title: "python",
      value: 429,
      color: "hsl(111, 70%, 50%)",
    },
    {
      id: "make",
      title: "make",
      value: 189,
      color: "hsl(88, 70%, 50%)",
    },
    {
      id: "css",
      title: "css",
      value: 448,
      color: "hsl(76, 70%, 50%)",
    },
  ];
  const data = {
    labels: ["rust", "stylus", "python", "make", "css"],
    datasets: [
      {
        label: "Tokenomics",
        data: [279, 312, 429, 189, 448],
        backgroundColor: [
          "hsl(296, 70%, 50%)",
          "hsl(166, 70%, 50%)",
          "hsl(111, 70%, 50%)",
          "hsl(88, 70%, 50%)",
          "hsl(76, 70%, 50%)",
        ],
      },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto px-5 my-20 lg:px-10 ">
      <Title head={"T"} sub={"okenomics"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center  place-items-end w-full lg:gap-[100%">
        <div className="w-full md:px-12  flex items-center justify-center">
          <Doughnut
            data={data}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Tokenomics",
                },
                legend: {
                  display: false,
                  position: "right",
                },
              },
            }}
          />
        </div>
        <div className="w-full relative ">
          <div className="w-full flex relative right-0 flex-col   gap-4">
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
