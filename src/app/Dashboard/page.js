"use client";
import React, { memo } from "react";
import MonthlyBudgetsSlides from "@/components/DashbordComp/MonthlyBudgetsSlides";
import PaymenthistorySlide from "@/components/DashbordComp/PaymenthistorySlide";
import SavingsSlides from "@/components/DashbordComp/SavingsSlides";
import SmallCards from "@/components/DashbordComp/SmallCards";
import ExpenseItemSlides from "@/components/ExpenseTablewithBar/expenseItemSlides";
import ExpenseTablewithBar from "@/components/ExpenseTablewithBar/ExpenseTablewithBar";
import HighChartColumnGraph from "@/components/Highcharts/ColumChart";
import HighChartLineGraph from "@/components/Highcharts/HighChartLine";
import StackedColumnChart from "@/components/Highcharts/StackedColumnChart";
import CustomTable from "@/components/Table";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineSavings } from "react-icons/md";


const Dashboard = memo((props) => {
  let expenseData = [
    {
      catagory: "Food",
      amount: 25600,
      style: {
        width: "17%",
        backgroundColor: "#f97316",
      },
      icon: <IoFastFoodOutline size={25} color="white" />
    },
    {
      catagory: "Fuel",
      amount: 22600,
      style: { width: "22%", backgroundColor: "#f59e0b" },
      icon: <BsFuelPump  size={25} color="white" />
    },
    {
      catagory: "Transport",
      amount: 20600,
      style: { width: "30%", backgroundColor: "#eab308" },
      icon: <MdOutlineEmojiTransportation size={25} color="white" />
    },
    {
      catagory: "Healthcare",
      amount: 15600,
      style: { width: "30%", backgroundColor: "#84cc16" },
      icon: <GiHealthNormal  size={25} color="white" />
    },
    {
      catagory: "Education",
      amount: 35600,
      style: { width: "10%", backgroundColor: "#22c55e" },
      icon: <FiBookOpen size={25} color="white" />
    },
    {
      catagory: "Pet",
      amount: 35600,
      style: { width: "10%", backgroundColor: "#06b6d4" },
      icon: <MdOutlinePets size={25} color="white" />
    },
    {
      catagory: "Ration",
      amount: 35600,
      style: { width: "10%", backgroundColor: "#78716c" },
      icon: <MdOutlineLocalGroceryStore size={25} color="white" />
    },
    {
      catagory: "Savings",
      amount: 35600,
      style: { width: "10%", backgroundColor: "navy" },
      icon: <MdOutlineSavings size={25} color="white" />
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

  let sectionOneData = [
    {
      title: "Total Balance",
      amount: 432568,
      lastMonthAnt: 24478,
      type: "decrease",
      percentage: "2.47%",
    },
    {
      title: "Total Period Change",
      amount: 245860,
      lastMonthAnt: 24478,
      type: "increase",
      percentage: "2.47%",
    },
    {
      title: "Total Period Expenses",
      amount: 25.35,
      lastMonthAnt: 24478,
      type: "increase",
      percentage: "2.47%",
    },
    {
      title: "Total Period Income",
      amount: 22.56,
      lastMonthAnt: 24478,
      type: "increase",
      percentage: "2.47%",
    },
  ];

  const propsForLinechart = {
    title: "Balace Trends",
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

  const propsForcolumnchart = {
    title: "Monthly Income vs Expenses",
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

  const propsForSavingGoals = {
    data: savingsData,
    slides: <SavingsSlides />,
    type: "Savings",
    title: "Saving Goals",
  };
  return (
    <div className="bg-rgba(215, 226, 247, 0.48) flex flex-col container mx-auto py-10 gap-6">
      <div>
        <h3 className="text-xl font-semibold text-[#23347b]">Dashboard</h3>
        <p style={{ color: "#8c8baf", fontSize: "14px" }}>
          Welcome Expense Tracker!!
        </p>
      </div>

      <section className="flex xl:gap-2 lg:gap-2 sm:gap-2 xl:flex-row md:flex-row sm:flex-col sm:w-full">
        {sectionOneData &&
          sectionOneData.length > 0 &&
          sectionOneData.map((e, i) => {
            let propsFor=e
            return <SmallCards key={i} {...propsFor} />;
          })}
      </section>

      <section className="flex flex-row">
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

      <section className="flex flex-row">
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

      <section className="flex flex-row">
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

      <section className="flex flex-row">
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
          <CustomTable />
        </div>
      </section>
    </div>
  );
});

export default Dashboard;
