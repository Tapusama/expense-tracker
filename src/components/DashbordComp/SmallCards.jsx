import React, { memo } from "react";

const SmallCards = memo((props) => {
  const { title, amount, percentage, lastMonthAnt, type, className } = props;
  return (
    <div
      className={
        className
          ? className
          : "border border-gray-100 shadow-md rounded-md bg-white xs:flex-col xs:w-full sm:flex-col lg:w-1/4 sm:w-full xl:w-1/4 p-6"
      }
    >
      <p className="font-semibold text-xs text-[#1f2c73]">{title}</p>
      <div className="py-4 text-2xl">
        <b className="text-[#1f2c73]">&#8377;&nbsp;{amount}</b>
      </div>
      <hr className="p-1 pt-1"></hr>
      <div className="p-1 flex flex-row text-[#7184ad]">
        <span
          className={
            type == "increase"
              ? "flex flex-row text-green-500"
              : "flex flex-row text-red-500"
          }
        >
          {type == "increase" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
              />
            </svg>
          )}
          {percentage}
        </span>
        &nbsp; Last month{" "}
        <b className="text-slate-500">&#8377;&nbsp;{lastMonthAnt}</b>
      </div>
    </div>
  );
});

export default SmallCards;
