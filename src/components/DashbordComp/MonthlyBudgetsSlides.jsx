import React, { Children, memo } from "react";
import "./slides.css";
import SingleProgressBar from "../ProgressBar/singleProgressBar";

const MonthlyBudgetsSlides = memo((props) => {
  const { name, percentage, amount, color,icon } = props;
  const propsForSingleProgressBat = { percentage, color };
  return (
    <div className="budgetSlide">
      <div className="budgetdot" style={{ backgroundColor: color }}>
       {icon}
      </div>
      <div className="budgetRightwrapper">
        <div className="budgetAmountNameWrapperDiv">
          <p>{name}</p>
          <p className="pe-2 budgetamount flex flex-row font-bold">
            {amount / 1000} &nbsp;
            <span style={{ color: "#ada8a8" }}>/&nbsp;100</span>
          </p>
        </div>

        <SingleProgressBar {...propsForSingleProgressBat} />
      </div>
    </div>
  );
});

export default MonthlyBudgetsSlides;
