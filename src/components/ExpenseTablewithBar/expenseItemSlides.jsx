import React, { memo } from "react";
import "./expences.css";

const ExpenseItemSlides = memo((props) => {
  const { name, percentage, amount, color} = props;
  return (
    <div className="expenceSlice">
      <div className="expenceSliceLeftwrapper">
        <div className="expenceSlicedot" style={{backgroundColor:color}}></div>
        <p>{name}</p>
      </div>

      <div className="expenceSliceRightwrapper">
        <p className="pe-2 expenceamount">${amount}</p>
        <p className="expencePercentage">{percentage}</p>
      </div>
    </div>
  );
});

export default ExpenseItemSlides;
