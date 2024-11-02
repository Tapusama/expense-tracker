"use client";
import React, { memo } from "react";
import "./wallet.css";
import CustomCards from "@/components/Customcards/CustomCards";
import Title from "@/components/Title/Title";
import HighChartLineGraph from "@/components/Highcharts/HighChartLine";
import SmallCards from "@/components/DashbordComp/SmallCards";
import CustomTable from "@/components/Table";

const Wallet = memo((props) => {
  let BalanceTrendssData = [
    { name: "JAN", y: 3000 },
    { name: "FEB", y: 5474 },
    { name: "MAR", y: 4555 },
    { name: "APR", y: 6034 },
    { name: "MAY", y: 2103 },
    { name: "JUN", y: 3023 },
    { name: "JUL", y: 1107 },
    { name: "AUG", y: 1506 },
    { name: "SEP", y: 2505 },
    { name: "OCT", y: 4504 },
    { name: "NOV", y: 3504 },
    { name: "DEC", y: 5504 },
  ];
  const propsForLinechart = {
    title: "Balance Overtime",
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

  const propsForTitle = {
    title: "City Bank",
  };
  const propsForPersonalFunds = {
    className:
      "border border-gray-100 shadow-md rounded-md bg-white flex-col w-full p-6",
  };

  const propsForTotalBalance = {
    className:
      "border border-gray-100 shadow-md rounded-md bg-white flex-col w-full p-6",
    title: "Total Balance",
    amount: 245860,
    lastMonthAnt: 24478,
    type: "increase",
    percentage: "2.47%",
  };

  const propsForDebitCard = {
    className:
      "border border-gray-100 shadow-md rounded-md bg-[#23347b] flex-col w-full p-6",
  };

  const propsForMonthlyExpenses = {
    className:
      "border border-gray-100 shadow-md rounded-md bg-white flex-col w-full p-6",
      title: "Monthly Expenses",
      amount: 245860,
      lastMonthAnt: 24478,
      type: "increase",
      percentage: "2.47%",
  };
  return (
    <div className="bg-rgba(215, 226, 247, 0.48) flex flex-col container mx-auto py-10 gap-6">
      <div>
        <h3 className="text-xl font-semibold text-[#1e1b4b]">Wallets</h3>
        <p className="text-sm py-2 text-[#8c8baf]">
          You can manage your wallet and all card details over here.
        </p>
      </div>
      <div className="flex flex-row container h-full gap-6">
        <div className="bankCardSectionWrapper">
          <CustomCards />
          <CustomCards />
          <CustomCards />
          <CustomCards />
        </div>
        <div className="bankCardDetailsWrapper">
          <Title {...propsForTitle} />
          <div className="flex flex-row gap-6">
            <SmallCards {...propsForPersonalFunds} />
            <SmallCards {...propsForDebitCard} />
          </div>
          <div className="flex flex-row gap-6">
            <SmallCards {...propsForTotalBalance} />
            <SmallCards {...propsForMonthlyExpenses} />
          </div>
          <HighChartLineGraph {...propsForLinechart} />
          <CustomTable />
        </div>
      </div>
    </div>
  );
});

export default Wallet;
