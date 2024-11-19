import React, { memo } from "react";
import TextBar from "./TextBar";

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
    leftTextClass: subfooterClassLeft?subfooterClassLeft:"text-md text-[#1f2c73]",
    rightTextClass: subfooterClassRight?subfooterClassRight:"font-semibold text-md text-[#1f2c73]",
  };

  const propsForFooter = {
    textLeft: footerLeft,
    textRight: footerRight,
    wrapperClass: "flex flex-row justify-between items-end",
    leftTextClass: footerClassLeft?footerClassLeft:"text-md text-[#1f2c73]",
    rightTextClass: footerClassRight?footerClassRight:"font-semibold text-md text-[#1f2c73]",
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
        <p className="font-semibold text-md text-[#1f2c73]">
          {moreLink ? moreLink : ""}
        </p>
      </div>

      <div className="h-1/5">
        <b className={subTitleClass ? subTitleClass : "text-[#1f2c73]"}>
          {subTitle ? subTitle : ""}
        </b>
      </div>

      <div className="h-1/5">
        <p className="font-bold text-2xl text-[#fff]">
          {cardBody ? cardBody : ""}
        </p>
      </div>

      <div className="h-8">
        <TextBar {...propsForSubFooter} />
      </div>

      
        {hr === false ? <div className="h-1"></div> : <hr className="h-1"></hr>}

      <div className="h-5 mt-2">
        <TextBar {...propsForFooter} />
      </div>
    </div>
  );
});

export default DebitCard;
