import React, { memo } from "react";
import "./slides.css";
import ProgressCircle from "../ProgressCircle";

const SavingsSlides = memo((props) => {
  const { name, amount, date, color } = props;
  return (
    <div className="flex flex-col ps-4 pe-4 m-2 justify-items-center">
      <ProgressCircle progress={amount} size={120} />
      <h5 className="font-semibold paycategory text-center pt-1">{name}</h5>
    </div>
  );
});

export default SavingsSlides;
