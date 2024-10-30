import React, { memo } from "react";
import ExpenseItemSlides from "./expenseItemSlides";
import "./expences.css";
import MonthlyBudgetsSlides from "../DashbordComp/MonthlyBudgetsSlides";
import MultiprogressBar from "../ProgressBar/MultiProgressBar";
import PaymenthistorySlide from "../DashbordComp/PaymenthistorySlide";

const ExpenseTablewithBar = memo((props) => {
  const { data, slides, type, title, moreLink } = props;

  let expenseData = [
    {
      catagory: "Food",
      amount: 25600,
      style: {
        width: "17%",
        backgroundColor: "#23347b",
      },
    },
    {
      catagory: "fuel",
      amount: 22600,
      style: { width: "22%", backgroundColor: "red" },
    },
    {
      catagory: "Transport",
      amount: 20600,
      style: { width: "30%", backgroundColor: "lightgreen" },
    },
    {
      catagory: "Healthcare",
      amount: 15600,
      style: { width: "30%", backgroundColor: "yellow" },
    },
    {
      catagory: "Education",
      amount: 35600,
      style: { width: "10%", backgroundColor: "orange" },
    },
  ];

  return (
    <div className="border border-gray-200 rounded-lg shadow sm expenseTableWrapper">
      <div className="flex flex-row rounded-t-lg font-bold expenseTableheader justify-between">
        <p>{title}</p> {moreLink && <p>{moreLink}</p>}
      </div>
      {type && type == "Expense" && <MultiprogressBar data={data} />}

      <div className={type == "Expense"?"overflow-hidden":"overflow-auto"}>
        {data && data.length > 0 ? (
          data.map((e, i) => {
            let props = {
              name: e?.catagory,
              amount: e?.amount,
              percentage: e?.style?.width,
              color: e?.style?.backgroundColor,
            };
            return (
              <>
                {type && type == "Expense" ? (
                  <ExpenseItemSlides key={i} {...props} />
                ) : type == "Budget" ? (
                  <MonthlyBudgetsSlides key={i} {...props} />
                ) : type == "Payment" ? (
                  <PaymenthistorySlide key={i} {...props} />
                ) : (
                  <></>
                )}

                {(type && type == "Expense") ||
                  (type == "Payment" && <hr className="mt-2"></hr>)}
              </>
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
