import React, { memo } from "react";
import TextBar from "./TextBar";
import SingleProgressBar from "../ProgressBar/singleProgressBar";

const DebitCard = memo((props) => {
  const {
    title,
    subTitle,
    className,
    titleClass,
    subTitleClass,
    subfooterClassLeft,
    subfooterClassRight,
    footerClassLeft,
    footerClassRight,
    footerLeft,
    footerRight,
    footerWrapperClass,
    moreLink,
    subFooterLeft,
    subFooterRight,
    subFooterWrapperClass,
    hr,
    cardBody,
    cardBodyClass,
    moreLinkClass,
    progresBarProps,
  } = props;

  const propsForSubFooter = {
    textLeft: subFooterLeft,
    textRight: subFooterRight,
    wrapperClass: subFooterWrapperClass
      ? subFooterWrapperClass
      : "flex flex-row justify-between h-8",
    leftTextClass: subfooterClassLeft
      ? subfooterClassLeft
      : "text-md text-[#1f2c73]",
    rightTextClass: subfooterClassRight
      ? subfooterClassRight
      : "font-semibold text-md text-[#1f2c73]",
  };

  const propsForFooter = {
    textLeft: footerLeft,
    textRight: footerRight,
    wrapperClass: footerWrapperClass
      ? footerWrapperClass
      : "flex flex-row justify-between items-end",
    leftTextClass: footerClassLeft ? footerClassLeft : "text-md text-[#1f2c73]",
    rightTextClass: footerClassRight
      ? footerClassRight
      : "font-semibold text-md text-[#1f2c73]",
  };

  return (
    <div
      className={
        className
          ? className
          : "border border-gray-100 shadow-md rounded-md bg-white xs:flex-col xs:w-full sm:flex-col lg:w-1/4 sm:w-full xl:w-1/4 p-6"
      }
    >
      <div className="flex flex-row justify-between h-1/5">
        <p
          className={
            titleClass ? titleClass : "font-semibold text-md text-[#7184ad]"
          }
        >
          {title ? title : ""}
        </p>
        <p
          className={
            moreLinkClass
              ? moreLinkClass
              : "font-semibold text-md text-[#1f2c73]"
          }
        >
          {moreLink ? moreLink : ""}
        </p>
      </div>

      <div className={subTitleClass ? subTitleClass : "text-[#1f2c73] h-1/5"}>
        <b>{subTitle ? subTitle : ""}</b>
      </div>

      {cardBodyClass && (
        <div
          className={
            cardBodyClass
              ? cardBodyClass
              : "font-bold text-2xl text-[#fff] h-1/5"
          }
        >
          <p>{cardBody ? cardBody : ""}</p>
        </div>
      )}

      {/* <div className="h-8"> */}
      {subFooterWrapperClass && <TextBar {...propsForSubFooter} />}
      {/* </div> */}

      {hr === false ? (
        <div className="h-1"></div>
      ) : progresBarProps ? (
        <SingleProgressBar {...progresBarProps} />
      ) : (
        <hr className="h-1"></hr>
      )}

      <div className="h-5 mt-2">
        <TextBar {...propsForFooter} />
      </div>
    </div>
  );
});

export default DebitCard;
