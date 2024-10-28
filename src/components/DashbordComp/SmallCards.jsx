import React, { memo } from "react";

const SmallCards = memo(() => {
  return (
    <div className="border border-gray-100 shadow-md rounded-md w-1/4 h-32 p-3 me-4 bg-white">
      <p className="">SmallCards</p>
      <div className="p-1">
        <b>$ 456460</b>
      </div>
      <hr className="p-1 pt-1"></hr>
      <div className="p-1">2.47%Last month $24,478</div>
    </div>
  );
});

export default SmallCards;
