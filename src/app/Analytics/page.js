"use client";
import React, { memo } from 'react'
import "./analytics.css";
import CustomTable from '@/components/Table';
import Tabs from '@/components/Tabs';
import AnanalyticsTabComp from '@/components/AnalyticsComponents/AnanalyticsTabComp';
import ExpencesTabComp from '@/components/AnalyticsComponents/ExpencesTabComp';
import IncomeTabComp from '@/components/AnalyticsComponents/IncomeTabcomp';
import IncomevsExpTabComp from '@/components/AnalyticsComponents/IncomevsExpTabComp';
import TransactionHistoryTabComp from '@/components/AnalyticsComponents/TransactionHistoryTabComp';
import BalanceTabComp from '@/components/AnalyticsComponents/BalanceTabComp';


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
        content:<ExpencesTabComp/>,
      },
      {
        label: "Income",
        content:
          <IncomeTabComp />,
      },
      {
        label: "Income vs Expenses",
        content:
          <IncomevsExpTabComp />,
      },
      {
        label: "Balance",
        content:
          <BalanceTabComp />,
      },
      {
        label: "Transaction History",
        content:
          <TransactionHistoryTabComp />,
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