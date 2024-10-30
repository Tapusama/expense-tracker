import React, { memo } from "react";
import "./slides.css";
import ProgressCircle from "../ProgressCircle";

const SavingsSlides = memo((props) => {
  const { name, amount, date, color } = props;
  return (
    <div className="flex flex-col ps-4 pe-4">
      <ProgressCircle progress={amount / 1000} size={120} />
      <h5 className="font-semibold paycategory">{name}</h5>
    </div>
  );
});

export default SavingsSlides;
