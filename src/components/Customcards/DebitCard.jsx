import React, { memo } from "react";

const DebitCard = memo((props) => {
  const {
    title,
    subTitle,
    className,
    titleClass,
    subTitleClass,
    subfooterClass,
    footerClass,
    moreLink,
    subFooterLeft,
    subFooterRight,
    hr,
    cardBody,
    footerLeft,
    footerRight,
  } = props;
  return (
    <div
      className={
        className
          ? className
          : "border border-gray-100 shadow-md rounded-md bg-white xs:flex-col xs:w-full sm:flex-col lg:w-1/4 sm:w-full xl:w-1/4 p-6"
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-md text-[#7184ad]">
            {title ? title : ""}
          </p>
          <p className="font-semibold text-md text-[#1f2c73]">
            {moreLink ? moreLink : ""}
          </p>
        </div>

        <div className="text-2xl">
          <b className="text-[#1f2c73]">&nbsp;{subTitle ? subTitle : ""}</b>
        </div>
      </div>

      <div >
        <p className="font-bold text-2xl text-[#fff]">
          {cardBody ? cardBody : "1234  5679  6789  7899"}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="font-semibold text-md text-[#1f2c73]">
          {subFooterLeft ? subFooterLeft : ""}
        </p>
        <p className="font-semibold text-md text-[#1f2c73]">
          {subFooterRight ? subFooterRight : ""}
        </p>
      </div>

      {hr === false ? (
        <div className="p-1 pt-1"></div>
      ) : (
        <hr className="p-1 pt-1"></hr>
      )}

      <div className="flex flex-row justify-between h-12 items-end">
        <p className="font-semibold text-md text-[#fff]">
          {footerLeft ? footerLeft : ""}
        </p>
        <p className="font-semibold text-md text-[#fff]">
          {footerRight ? footerRight : ""}
        </p>
      </div>
    </div>
  );
});

export default DebitCard;
