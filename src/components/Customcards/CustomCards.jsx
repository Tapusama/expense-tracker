import React, { memo } from "react";
import "./CustomCards.css";

const CustomCards = memo((props) => {
  const {
    icon,
    title,
    amount,
    percentage,
    subTitle,
    type,
    body,
    footer,
    ProgressCircle,
    color,
    hideRight,
  } = props;
  console.log(title);
  return (
    <div className="border border-gray-100 shadow-sm rounded-md bg-white flex-col w-full p-4">
      <div className="p-1 flex flex-row justify-between text-[#7184ad] gap-2">
        <div className="flex flex-row">
          {icon ? (
            <div className="iconWrapper" style={{ backgroundColor: color }}>
              {icon}
            </div>
          ) : ProgressCircle ? (
            <div className="iconWrapper" style={{ backgroundColor: color }}>
              {ProgressCircle}
            </div>
          ) : (
            <div className="iconWrapper" style={{ backgroundColor: color }}>
              <span className={"flex flex-row text-green-500"}>
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
              </span>
            </div>
          )}

          <div className="flex flex-col">
            <b className="font-semibold text-[#1f2c73]">
              {title ?? "City Bank"}
            </b>
            <p className="text-sm text-slate-500">
              &#8377;&nbsp;{subTitle ?? 98000}
            </p>
          </div>
        </div>

        {hideRight ? <></> : <div className="text-sm text-slate-500">Week</div>}
      </div>

      {body && (
        <div>
          <div className="py-4 text-2xl">
            <b className="text-[#1f2c73]">&#8377;&nbsp;{amount}</b>
          </div>
          <hr className="p-1 pt-1"></hr>
        </div>
      )}

      {footer && (
        <div>
          <div></div>
        </div>
      )}
    </div>
  );
});

export default CustomCards;
