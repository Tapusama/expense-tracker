import React, { memo } from "react";
import { BalanceTrendssData, tableData } from "../../../public/data";
import CustomTable from "../Table";
import HighChartLineGraph from "../Highcharts/HighChartLine";

const BalanceTabComp = memo((props) => {
  const propsForLinechart = {
    title: "Total Balance",
    subtitle: `Rs. ${
      BalanceTrendssData && BalanceTrendssData.length > 0
        ? BalanceTrendssData.reduce(
            (accumulator, current) => accumulator + current.y,
            0
          )
        : 0
    }`,
    series: [
      {
        name: "Target (Rs.)",
        data: BalanceTrendssData,
        color: "#7271e9", // Line color
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgb(239,239,253,0.5)"], // Gradient start (Area color)
            [1, "rgb(239,239,253, 0.5)"], // Gradient end (transparent)
          ],
        },
      },
    ],
    titleY: "in Rupees(Rs",
    drillDownDataSeries: [],
    type: "area",
    // onClickviewHandler,
    // inverted,
    // height: "300px",
    // Options,
    // styles: { fontFamily: "sans-serif", color: "#000", fontWeight: "bold",background:"red" },
    header: "Month",
    unit: "Rs.",
  };

  const propsForLinechartTotalBalanceByWallet = {
    title: "Total Balance By Wallet",
    subtitle: `Rs. ${
      BalanceTrendssData && BalanceTrendssData.length > 0
        ? BalanceTrendssData.reduce(
            (accumulator, current) => accumulator + current.y,
            0
          )
        : 0
    }`,
    series: [
      {
        name: "Target (Rs.)",
        data: BalanceTrendssData,
        color: "#7271e9", // Line color
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgb(239,239,253,0.5)"], // Gradient start (Area color)
            [1, "rgb(239,239,253, 0.5)"], // Gradient end (transparent)
          ],
        },
      },
    ],
    titleY: "in Rupees(Rs",
    drillDownDataSeries: [],
    type: "area",
    // onClickviewHandler,
    // inverted,
    // height: "300px",
    // Options,
    // styles: { fontFamily: "sans-serif", color: "#000", fontWeight: "bold",background:"red" },
    header: "Month",
    unit: "Rs.",
  };
  return (
    <div className="container">
      <div className="border border-gray-100 shadow-md rounded-md">
        <HighChartLineGraph {...propsForLinechart} />
      </div>
      <div className="border border-gray-100 shadow-md rounded-md mt-4">
        <HighChartLineGraph {...propsForLinechartTotalBalanceByWallet} />
      </div>
    </div>
  );
});

export default BalanceTabComp;
