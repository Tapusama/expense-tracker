"use client"
import BarChart from "@/components/Graphs/ColumnChart";
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

  const propsForBarchart = {
    height : 245,
    width : 680,
    marginTop : 20,
    marginBottom : 30,
    marginLeft : 40,
    marginRight : 20,
    data,
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">
        We are a company committed to providing the best services.
      </p>
      <BarChart {...propsForBarchart} />
    </div>
  );
});

export default Dashboard;
