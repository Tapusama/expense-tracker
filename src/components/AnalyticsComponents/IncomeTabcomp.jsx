import React, { memo } from "react";
import { expenseData, tableData } from "../../../public/data";
import ExpenseTablewithBar from "../ExpenseTablewithBar/ExpenseTablewithBar";
import CustomTable from "../Table";

const IncomeTabComp = memo(() => {
  const propsForEXpenseBar = {
    data: expenseData,
    type: "ExpenseTab",
    title: "Income Breakdown",
  };

  return (
    <div className="container flex flex-row gap-4">
      <div className="LeftContainer">
        <ExpenseTablewithBar {...propsForEXpenseBar} />
      </div>
      <div className="RightContainer">
        <CustomTable tableData={tableData} />
      </div>
    </div>
  );
});

export default IncomeTabComp;