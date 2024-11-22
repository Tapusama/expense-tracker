"use client";
import React, { memo } from 'react'
import "./goal.css";
import CustomCards from "@/components/Customcards/CustomCards";
import Title from "@/components/Title/Title";
import HighChartLineGraph from "@/components/Highcharts/HighChartLine";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import DebitCard from "@/components/Customcards/DebitCard";
import SimpleChips from "@/components/SimpleChips/SimpleChips";
import ProgressCircle from '@/components/ProgressCircle';
import SingleProgressBar from '@/components/ProgressBar/singleProgressBar';
import ExpenseTablewithBar from '@/components/ExpenseTablewithBar/ExpenseTablewithBar';
import MonthlyBudgetsSlides from '@/components/DashbordComp/MonthlyBudgetsSlides';
import { expenseData, goalsHistoryTableData } from '../../../public/data';
import CustomTable from '@/components/Table';
import MainPagelayOut from '@/components/MainPageLayOut';

const Goal = memo((props) => {
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
    title: "Budget Period",
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
    titleY: " ",
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
    title: "Grocery",
  };

  const propsAddMore = {
    title: "Add New Goals",
    titleTextClass: "text-sm text-[#1f2c73]",
    moreLink: <CiSquarePlus color="#1f2c73" size={20} />
  };

  const propsForGrocery = {
    ProgressCircle: <ProgressCircle progress={80} size={50} strokeWidth={5} color={"#51BB25"} RadiusOfCircle={20} fontSize="10px" />,
    title: "Grocery",
    subTitle: 1458.30
  };

  const propsForTransportation = {
    ProgressCircle: <ProgressCircle progress={50} size={50} strokeWidth={5} color={"#51BB25"} RadiusOfCircle={20} fontSize="10px" />,
    title: "Transportation",
    subTitle: 1458.30
  };

  const propsForCloths = {
    ProgressCircle: <ProgressCircle progress={30} size={50} strokeWidth={5} color={"#51BB25"} RadiusOfCircle={20} fontSize="10px" />,
    title: "Cloths", subTitle: 1458.30
  };

  const propsForEducation = {
    ProgressCircle: <ProgressCircle progress={70} size={50} strokeWidth={5} color={"#51BB25"} RadiusOfCircle={20} fontSize="10px" />,
    title: "Education", subTitle: 1458.30
  };

  const propsForSpending = {
    className:
      "border border-gray-100 shadow-sm rounded-md bg-white flex-col w-full p-6",
    title: "Spend",
    moreLink: "Budget",
    moreLinkClass: "text-xs text-[#7184ad]",
    // subFooterLeft: "Personal Funds",
    // subFooterRight: "$32,500.28",
    subTitle: "$1458.30",
    titleClass: "text-xs text-[#7184ad]",
    subTitleClass: "font-semibold text-xl text-[#1f2c73]",
    // subfooterClassLeft: "text-sm text-[#7184ad]",
    // subfooterClassRight: "font-semibold text-md text-[#1f2c73]",
    footerClassLeft: "text-xs text-[#7184ad]",
    footerClassRight: "text-xs text-[#7184ad]",
    // subFooter: "",
    cardBody: "",
    footerLeft: "25%",
    footerRight: "75%",
    progresBarProps: { percentage: "25%", color: "#1f2c73 " }
  };

  const propsForSmallAmounts = {
    data: [
      { heading: "Last Month", value: "$3000" },
      { heading: "Expenses", value: "$5474" },
      { heading: "Taxes", value: "$4555" },
      { heading: "Debt", value: "$6034" },
    ]
  }

  const propsForBudgetBar = {
    data: expenseData,
    // slides: <MonthlyBudgetsSlides />,
    type: "Budget",
    title: "Available by Wallet",
  };

  return (
    <MainPagelayOut>
      <div className="bg-rgba(215, 226, 247, 0.48) flex flex-col container mx-auto py-10 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-[#1e1b4b]">Goals</h3>
          <p className="text-sm py-2 text-[#8c8baf]">
            You can manage your Goals here.
          </p>
        </div>
        <div className="flex flex-row container h-full gap-6">
          <div className="goalLeftContainer">
            <CustomCards {...propsForGrocery} />
            <CustomCards {...propsForTransportation} />
            <CustomCards {...propsForCloths} />
            <CustomCards {...propsForEducation} />
            <Title {...propsAddMore} />
          </div>
          <div className="goalRightContainer">
            <Title {...propsForTitle} />
            <DebitCard {...propsForSpending} />
            <div className="flex flex-row border border-gray-100 shadow-sm rounded-md bg-white p-6">
              {propsForSmallAmounts.data && propsForSmallAmounts.data.length > 0 && propsForSmallAmounts.data.map((e, i) => {
                return <SimpleChips key={i} {...e} />
              })}
            </div>
            <div
              className="border border-gray-100 shadow-md rounded-md"
            >
              <ExpenseTablewithBar {...propsForBudgetBar} />
            </div>
            <div
              className="border border-gray-100 shadow-md rounded-md"
            >
              <CustomTable tableData={goalsHistoryTableData} />
            </div>
          </div>
        </div>
      </div>
    </MainPagelayOut>
  );
});


export default Goal