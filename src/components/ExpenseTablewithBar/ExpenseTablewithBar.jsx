import React, { memo } from "react";
import ExpenseItemSlides from "./expenseItemSlides";
import "./expences.css";
import MonthlyBudgetsSlides from "../DashbordComp/MonthlyBudgetsSlides";
import MultiprogressBar from "../ProgressBar/MultiProgressBar";
import PaymenthistorySlide from "../DashbordComp/PaymenthistorySlide";
import SavingsSlides from "../DashbordComp/SavingsSlides";

const ExpenseTablewithBar = memo((props) => {
  const { data, slides, type, title, moreLink } = props;

  return (
    <div className="border border-gray-200 rounded-lg shadow sm expenseTableWrapper">
      <div className="flex flex-row rounded-t-lg font-bold expenseTableheader justify-between">
        <p>{title}</p> {moreLink && <p>{moreLink}</p>}
      </div>
      {type && type == "Expense" && <MultiprogressBar data={data} />}

      <div
        className={
          type == "Expense"
            ? "overflow-hidden"
            : type == "Savings"
            ? "flex flex-row flex-wrap pt-2"
            : "overflow-auto"
        }
      >
        {data && data.length > 0 ? (
          data.map((e, i) => {
            let props = {
              name: e?.catagory,
              amount: e?.amount,
              percentage: e?.style?.width,
              color: e?.style?.backgroundColor,
            };
            return (
              <div key={i}>
                {type && type == "Expense" ? (
                  <ExpenseItemSlides key={i} {...props} />
                ) : type == "Budget" ? (
                  <MonthlyBudgetsSlides key={i} {...props} />
                ) : type == "Payment" ? (
                  <PaymenthistorySlide key={i} {...props} />
                ) : type == "Savings" ? (
                  <SavingsSlides key={i} {...props} />
                ) : (
                  <></>
                )}

                {(type && type == "Expense") ||
                  (type == "Payment" && <hr className="mt-2"></hr>)}
              </div>
            );
          })
        ) : (
          <div className="text-gray-300 h-full flex flex-col justify-center"></div>
        )}
      </div>
    </div>
  );
});

export default ExpenseTablewithBar;
