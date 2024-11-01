"use client";
import MonthlyBudgetsSlides from "@/components/DashbordComp/MonthlyBudgetsSlides";
import PaymenthistorySlide from "@/components/DashbordComp/PaymenthistorySlide";
import SavingsSlides from "@/components/DashbordComp/SavingsSlides";
import SmallCards from "@/components/DashbordComp/SmallCards";
import ExpenseItemSlides from "@/components/ExpenseTablewithBar/expenseItemSlides";
import ExpenseTablewithBar from "@/components/ExpenseTablewithBar/ExpenseTablewithBar";
import HighChartColumnGraph from "@/components/Highcharts/ColumChart";
import HighChartLineGraph from "@/components/Highcharts/HighChartLine";
import StackedColumnChart from "@/components/Highcharts/StackedColumnChart";
import React, { memo } from "react";

const Dashboard = memo((props) => {
  let expenseData = [
    {
      catagory: "Food",
      amount: 25600,
      style: {
        width: "17%",
        backgroundColor: "#23347b",
      },
    },
    {
      catagory: "Fuel",
      amount: 22600,
      style: { width: "22%", backgroundColor: "red" },
    },
    {
      catagory: "Transport",
      amount: 20600,
      style: { width: "30%", backgroundColor: "lightgreen" },
    },
    {
      catagory: "Healthcare",
      amount: 15600,
      style: { width: "30%", backgroundColor: "yellow" },
    },
    {
      catagory: "Education",
      amount: 35600,
      style: { width: "10%", backgroundColor: "orange" },
    },
    {
      catagory: "Pet",
      amount: 35600,
      style: { width: "10%", backgroundColor: "orange" },
    },
    {
      catagory: "Ration",
      amount: 35600,
      style: { width: "10%", backgroundColor: "orange" },
    },
    {
      catagory: "Education",
      amount: 35600,
      style: { width: "10%", backgroundColor: "orange" },
    },
  ];

  let savingsData = [
    {
      catagory: "Car",
      amount: 90,
    },
    {
      catagory: "Gift",
      amount: 87,
    },
    {
      catagory: "Land",
      amount: 95,
    },
    {
      catagory: "Vacation",
      amount: 99,
    },
  ];

  const propsForLinechart = {
    title: "Balace Trends",
    series: [
      {
        name: "Target (Rs.)",
        data: [
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
        ],
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

  const propsForcolumnchart = {
    title: "Monthly Income vs Expenses",
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
    // height: "300px",
    // Options,
    // styles: { fontFamily: "sans-serif", color: "#000", fontWeight: "bold",background:"red" },
    header: "Month",
    unit: "Rs.",
  };

  const propsForEXpenseBar = {
    data: expenseData,
    slides: <ExpenseItemSlides />,
    type: "Expense",
    title: "Monthly Expenses Breakdown",
  };

  const propsForBudgetBar = {
    data: expenseData,
    slides: <MonthlyBudgetsSlides />,
    type: "Budget",
    title: "Monthly Budgets",
  };

  const propsForPaymentHistory = {
    data: expenseData,
    slides: <PaymenthistorySlide />,
    type: "Payment",
    title: "Payment History",
    moreLink: "See more",
  };

  const propsForWeeklyExpensesChart = {
    title: "Weekly Expenses",
    series: [
      {
        name: "Week1",
        data: [148, 133, 124, 102, 90, 87, 45, 78, 98, 23, 23, 56],
        color: "#3b82f6",
      },
      {
        name: "Week2",
        data: [102, 98, 65],
        color: "#8b5cf6",
      },
      {
        name: "Week3",
        data: [113, 122, 95],
        color: "#a855f7",
      },
      {
        name: "Week4",
        data: [77, 72, 80],
        color: "#d946ef",
      },
      {
        name: "Week5",
        data: [77, 72, 80],
        color: "#EAC7EF",
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

  const propsForSavingGoals = {
    data: savingsData,
    slides: <SavingsSlides />,
    type: "Savings",
    title: "Saving Goals",
  };
  return (
    <div className="p-4 bg-rgba(215, 226, 247, 0.48)">
      <h3
        className="text-xl"
        style={{ color: "#23347b", fontWeight: "bolder" }}
      >
        Dashboard
      </h3>
      <p className="mt-2" style={{ color: "#8c8baf", fontSize: "14px" }}>
        Welcome Expense Tracker!!
      </p>
      <section className="flex flex-row justify-between mt-8 mb-2">
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
      </section>

      <section className="flex flex-row mt-6">
        <div
          className="border border-gray-100 shadow-md rounded-md"
          style={{
            width: "60%",
          }}
        >
          <HighChartLineGraph {...propsForLinechart} />
        </div>
        <div
          className="border border-gray-100 shadow-md rounded-md ms-4"
          style={{ width: "40%" }}
        >
          <ExpenseTablewithBar {...propsForEXpenseBar} />
        </div>
      </section>

      <section className="flex flex-row mt-6">
        <div
          className="border border-gray-100 shadow-md rounded-md"
          style={{
            width: "40%",
          }}
        >
          <ExpenseTablewithBar {...propsForBudgetBar} />
        </div>
        <div
          className="border border-gray-100 shadow-md rounded-md ms-4"
          style={{ width: "60%" }}
        >
          <HighChartColumnGraph {...propsForcolumnchart} />
        </div>
      </section>

      <section className="flex flex-row mt-6">
        <div
          className="border border-gray-100 shadow-md rounded-md"
          style={{
            width: "60%",
          }}
        >
          <StackedColumnChart {...propsForWeeklyExpensesChart} />
        </div>
        <div
          className="border border-gray-100 shadow-md rounded-md ms-4"
          style={{ width: "40%" }}
        >
          <ExpenseTablewithBar {...propsForPaymentHistory} />
        </div>
      </section>

      <section className="flex flex-row mt-6">
        <div
          className="border border-gray-100 shadow-md rounded-md"
          style={{
            width: "40%",
          }}
        >
          <ExpenseTablewithBar {...propsForSavingGoals} />
        </div>
        <div
          className="border border-gray-100 shadow-md rounded-md ms-4"
          style={{ width: "60%" }}
        ></div>
      </section>
    </div>
  );
});

export default Dashboard;
