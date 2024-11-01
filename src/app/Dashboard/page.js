"use client";
import MonthlyBudgetsSlides from "@/components/DashbordComp/MonthlyBudgetsSlides";
import PaymenthistorySlide from "@/components/DashbordComp/PaymenthistorySlide";
import SavingsSlides from "@/components/DashbordComp/SavingsSlides";
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
      catagory: "Education",
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
      amount: 25600,
      style: {
        width: "17%",
        backgroundColor: "#23347b",
      },
    },
    {
      catagory: "Gift",
      amount: 22600,
      style: { width: "22%", backgroundColor: "red" },
    },
    {
      catagory: "Land",
      amount: 20600,
      style: { width: "30%", backgroundColor: "lightgreen" },
    },
    {
      catagory: "Vacation",
      amount: 15600,
      style: { width: "30%", backgroundColor: "yellow" },
    },
    
  ];

  const propsForLinechart = {
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
    height: "300px",
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
    moreLink: "See more",
  };

  const propsForWeeklyExpensesChart = {
    title: "Weekly Expenses",
    series: [{
      name: 'Norway',
      data: [148, 133, 124],
      stack: 'Europe'
  }, {
      name: 'Germany',
      data: [102, 98, 65],
      stack: 'Europe'
  }, {
      name: 'United States',
      data: [113, 122, 95],
      stack: 'North America'
  }, {
      name: 'Canada',
      data: [77, 72, 80],
      stack: 'North America'
  }],
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

      <section className="flex flex-row mt-6 ">
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
          <HighChartColumnGraph {...propsForWeeklyExpensesChart} />
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
        >
        </div>
      </section>
    </div>
  );
});

export default Dashboard;
