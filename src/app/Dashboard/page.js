"use client";
import SmallCards from "@/components/DashbordComp/SmallCards";
import BarChart from "@/components/Graphs/ColumnChart";
import HighChartLineGraph from "@/components/Highcharts/HighChartLine";
import React, { memo } from "react";

const Dashboard = memo((props) => {
  const data = [
    { name: "JAN", value: 30 },
    { name: "FEB", value: 80 },
    { name: "MAR", value: 45 },
    { name: "APR", value: 60 },
    { name: "MAY", value: 210 },
    { name: "JUN", value: 30 },
    { name: "JUL", value: 110 },
    { name: "AUG", value: 150 },
    { name: "SEP", value: 250 },
    { name: "OCT", value: 450 },
    { name: "NOV", value: 350 },
    { name: "DEC", value: 550 },
  ];

  const propsForBarchart = {
    height: 245,
    width: 680,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 40,
    marginRight: 20,
    data,
  };

  const propsForLinechart = {
    title: "Balace Trends Monthly",
    series: [
      {
        name: "Target (Rs.)",
        data: [
          { name: "JAN", y: 30522 },
          { name: "FEB", y: 54745 },
          { name: "MAR", y: 4555 },
          { name: "APR", y: 603431 },
          { name: "MAY", y: 210325 },
          { name: "JUN", y: 3023 },
          { name: "JUL", y: 11076 },
          { name: "AUG", y: 150657 },
          { name: "SEP", y: 25056 },
          { name: "OCT", y: 45043 },
          { name: "NOV", y: 350436 },
          { name: "DEC", y: 550435 },
        ],
      },
    ],
    titleY: "in Rupees(Rs",
    drillDownDataSeries: [],
    // onClickviewHandler,
    // inverted,
    height: "300px",
    // Options,
    // styles: { fontFamily: "sans-serif", color: "#000", fontWeight: "bold",background:"red" },
    header: "Month",
    unit: "Rs.",
  };
  return (
    <div className="p-4 bg-rgba(215, 226, 247, 0.48)">
      <h3 className="text-3xl" style={{color:"#23347b",fontWeight:"bolder"}}>Dashboard</h3>
      <p className="mt-2" style={{color:"#8c8baf",fontSize:"14px"}}>Welcome Expense Tracker!!</p>
      <section className="flex flex-row justify-between mt-8 mb-2">
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
      </section>
      <section className="flex flex-row mt-4">
        <div
          className="border border-gray-100 shadow-md rounded-md"
          style={{
            width: "60%",
          }}
        >
          <HighChartLineGraph {...propsForLinechart} />
        </div>
        <div className="border border-gray-100 shadow-md rounded-md"></div>
        <BarChart {...propsForBarchart} />
      </section>
    </div>
  );
});

export default Dashboard;
