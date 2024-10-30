import React, { memo } from "react";
import "./slides.css";

const PaymenthistorySlide = memo((props) => {
  const { name, amount, date, color } = props;
  return (
    <div className="paymentSlide ps-1">
      <div className="paymentSlideLeftDiv">
        <h5 className="font-semibold paycategory">{name}</h5>
        <p className="paymentdate">
          {date ?? "5th January 2024"} 
        </p>
      </div>
      <div className="paymentSliderightDiv">
        <h5 className="paycategory"> +{amount / 1000} </h5>
        <span className="paidFlag">Paid</span>
      </div>
    </div>
  );
});

export default PaymenthistorySlide;
