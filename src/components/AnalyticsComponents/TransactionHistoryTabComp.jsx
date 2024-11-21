import React, { memo } from "react";
import HighChartColumnGraph from "../Highcharts/ColumChart";
import { tableData } from "../../../public/data";
import CustomTable from "../Table";

const TransactionHistoryTabComp = memo((props) => {
  return (
    <div className="container">
      <div className="border border-gray-100 shadow-md rounded-md">
        <CustomTable tableData={tableData} />
      </div>
    </div>
  );
});

export default TransactionHistoryTabComp;
