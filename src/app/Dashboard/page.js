"use client";
import MonthlyBudgetsSlides from "@/components/DashbordComp/MonthlyBudgetsSlides";
import PaymenthistorySlide from "@/components/DashbordComp/PaymenthistorySlide";
import SmallCards from "@/components/DashbordComp/SmallCards";
import ExpenseItemSlides from "@/components/ExpenseTablewithBar/expenseItemSlides";
import ExpenseTablewithBar from "@/components/ExpenseTablewithBar/ExpenseTablewithBar";
import HighChartColumnGraph from "@/components/Highcharts/ColumChart";
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
      catagory: "fuel",
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
  ];

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
    moreLink:"See more"
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
          <HighChartColumnGraph {...propsForLinechart} />
        </div>
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
          <ExpenseTablewithBar {...propsForBudgetBar} />
        </div>
        <div
          className="border border-gray-100 shadow-md rounded-md ms-4"
          style={{ width: "60%" }}
        >
          <HighChartLineGraph {...propsForLinechart} />
        </div>
      </section>
    </div>
  );
});

export default Dashboard;
