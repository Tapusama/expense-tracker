"use client";
import React, { memo } from 'react'
import "./analytics.css";
import CustomCards from "@/components/Customcards/CustomCards";
import Title from "@/components/Title/Title";
import HighChartLineGraph from "@/components/Highcharts/HighChartLine";
import { CiSquarePlus } from "react-icons/ci";
import DebitCard from "@/components/Customcards/DebitCard";
import SimpleChips from "@/components/SimpleChips/SimpleChips";
import ProgressCircle from '@/components/ProgressCircle';
import ExpenseTablewithBar from '@/components/ExpenseTablewithBar/ExpenseTablewithBar';
import { expenseData, goalsHistoryTableData } from '../../../public/data';
import CustomTable from '@/components/Table';
import Tabs from '@/components/Tabs';
import AnanalyticsTabComp from '@/components/AnalyticsComponents/AnanalyticsTabComp';


const Analytics = memo((props) => {

  const propsForTabs = {
    tabsData: [
      {
        label: "Analytics",
        content:
          <AnanalyticsTabComp />,
      },
      {
        label: "Expenses",
        content:
          "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
      },
      {
        label: "Income",
        content:
          <CustomTable />,
      },
      {
        label: "Income vs Expenses",
        content:
          <CustomTable />,
      },
      {
        label: "Balance",
        content:
          <CustomTable />,
      },
      {
        label: "Transaction History",
        content:
          <CustomTable />,
      },
    ],
  }

  return (
    <div className="bg-rgba(215, 226, 247, 0.48) flex flex-col container mx-auto py-10 gap-6">
      <div>
        <h3 className="text-xl font-semibold text-[#1e1b4b]">Analytics</h3>
        <p className="text-sm py-2 text-[#8c8baf]">
          You can manage your Analytics here.
        </p>
      </div>
      <div className="flex flex-row container h-full w-full gap-6">
        <Tabs {...propsForTabs} />
      </div>
    </div>
  );
});


export default Analytics