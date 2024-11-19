import React, { memo } from "react";
import TextBar from "./TextBar";

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

  const propsForSubFooter = {
    textLeft: subFooterLeft,
    textRight: subFooterRight,
    wrapperClass: "flex flex-row justify-between",
    leftTextClass: "font-semibold text-md text-[#1f2c73]",
    rightTextClass: "font-semibold text-md text-[#1f2c73]",
  };
  const propsForFooter = {
    textLeft: footerLeft,
    textRight: footerRight,
    wrapperClass: "flex flex-row justify-between h-12 items-end",
    leftTextClass: "font-semibold text-md text-[#1f2c73]",
    rightTextClass: "font-semibold text-md text-[#1f2c73]",
  };

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
          <p
            className={
              titleClass ? titleClass : "font-semibold text-md text-[#7184ad]"
            }
          >
            {title ? title : ""}
          </p>
          <p className="font-semibold text-md text-[#1f2c73]">
            {moreLink ? moreLink : ""}
          </p>
        </div>

        <div className="text-2xl">
          <b className={subTitleClass ? subTitleClass : "text-[#1f2c73]"}>
            &nbsp;{subTitle ? subTitle : ""}
          </b>
        </div>
      </div>

      <div>
        <p className="font-bold text-2xl text-[#fff]">
          {cardBody ? cardBody : "1234  5679  6789  7899"}
        </p>
      </div>

      <TextBar {...propsForSubFooter} />

      {hr === false ? (
        <div className="p-1 pt-1"></div>
      ) : (
        <hr className="p-1 pt-1"></hr>
      )}

      <TextBar {...propsForFooter} />
    </div>
  );
});

export default DebitCard;
