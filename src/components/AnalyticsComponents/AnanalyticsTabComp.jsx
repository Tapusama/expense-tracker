import React, { memo } from "react";
import StackedColumnChart from "../Highcharts/StackedColumnChart";
import SmallCards from "../DashbordComp/SmallCards";
import CustomCards from "../Customcards/CustomCards";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { color } from "highcharts";

const AnanalyticsTabComp = memo((props) => {
  const propsForWeeklyExpensesChart = {
    title: "Weekly Expenses",
    series: [
      {
        name: "Week1",
        data: [148, 133, 124, 102, 90, 87, 45, 78, 98, 23, 23, 56],
        color: "#3b82f6",
        pointWidth: 35, // Set the width of the columns here
      },
      {
        name: "Week2",
        data: [102, 98, 65],
        color: "#8b5cf6",
        pointWidth: 35,
      },
      {
        name: "Week3",
        data: [113, 122, 95],
        color: "#a855f7",
        pointWidth: 35,
      },
      {
        name: "Week4",
        data: [77, 72, 80],
        color: "#d946ef",
        pointWidth: 35,
      },
      {
        name: "Week5",
        data: [77, 72, 80],
        color: "#EAC7EF",
        pointWidth: 35,
      },
    ],
    titleY: "in Rupees(Rs",
    drillDownDataSeries: [],
    header: "Month",
    unit: "Rs.",
    xAxis: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
  };

  let sectionOneData = [
    {
      icon: <MdOutlineLocalGroceryStore color="white" size={20} />,
      title: "Daily Average",
      subTitle: 1458.3,
      hideRight:true,
      color: "blue",
    },
    {
      icon: <MdOutlineLocalGroceryStore color="white" size={20} />,
      title: "Change",
      subTitle: 1458.3,
      hideRight:true,
      color: "green",
    },
    {
      icon: <MdOutlineLocalGroceryStore color="white" size={20} />,
      title: "Total Transaction",
      subTitle: 1458.3,
      hideRight:true,
      color: "seagreen",
    },
    {
      icon: <MdOutlineLocalGroceryStore color="white" size={20} />,
      title: "Categories",
      subTitle: 1458.3,
      hideRight:true,
      color: "yellow",
    },
  ];

  return (
    <div className="container">
      <section className="flex flex-row w-full py-4 gap-6">
        {sectionOneData &&
          sectionOneData.length > 0 &&
          sectionOneData.map((e, i) => {
            let propsFor = e;
            return <CustomCards key={i} {...propsFor} />;
          })}
      </section>
      <div className="border border-gray-100 shadow-md rounded-md">
        <StackedColumnChart {...propsForWeeklyExpensesChart} />
      </div>
    </div>
  );
});

export default AnanalyticsTabComp;
