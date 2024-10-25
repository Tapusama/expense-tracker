import React, { memo } from "react";

const Dashboard = memo((props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">We are a company committed to providing the best services.</p>
    </div>
  )
});

export default Dashboard;
