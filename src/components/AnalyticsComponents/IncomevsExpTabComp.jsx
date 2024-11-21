import React, { memo } from "react";
import HighChartColumnGraph from "../Highcharts/ColumChart";

const IncomevsExpTabComp = memo((props) => {
  const propsForcolumnchart = {
    title: "Income vs Expense Graph",
    series: [
      {
        name: "Income (Rs.)",
        data: [
          { name: "JAN", y: 30522 },
          { name: "FEB", y: 54745 },
          { name: "MAR", y: 45550 },
          { name: "APR", y: 30230 },
          { name: "MAY", y: 21032 },
          { name: "JUN", y: 30230 },
          { name: "JUL", y: 11076 },
          { name: "AUG", y: 15065 },
          { name: "SEP", y: 25056 },
          { name: "OCT", y: 45043 },
          { name: "NOV", y: 35043 },
          { name: "DEC", y: 55043 },
        ],
        color: "#7271e9",
      },
      {
        name: "Expenses (Rs.)",
        data: [
          { name: "JAN", y: 30520 },
          { name: "FEB", y: 54740 },
          { name: "MAR", y: 11076 },
          { name: "APR", y: 60343 },
          { name: "MAY", y: 21032 },
          { name: "JUN", y: 30230 },
          { name: "JUL", y: 11076 },
          { name: "AUG", y: 15060 },
          { name: "SEP", y: 25050 },
          { name: "OCT", y: 45040 },
          { name: "NOV", y: 35040 },
          { name: "DEC", y: 55040 },
        ],
        color: "#b7afe3",
      },
    ],
    titleY: "in Rupees(Rs",
    drillDownDataSeries: [],
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
      <HighChartColumnGraph {...propsForcolumnchart} />
      </div>
    </div>
  );
});

export default IncomevsExpTabComp;
