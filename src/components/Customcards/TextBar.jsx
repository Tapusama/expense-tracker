import React, { memo } from "react";

const TextBar = memo((props) => {
  const { textLeft, textRight, wrapperClass, leftTextClass, rightTextClass } =
    props;
  return (
    <div
      className={
        wrapperClass
          ? wrapperClass
          : "flex flex-row justify-between items-end"
      }
    >
      <p
        className={
          leftTextClass ? leftTextClass : "font-semibold text-md text-[#fff]"
        }
      >
        {textLeft ? textLeft : ""}
      </p>
      <p
        className={
          rightTextClass ? rightTextClass : "font-semibold text-md text-[#fff]"
        }
      >
        {textRight ? textRight : ""}
      </p>
    </div>
  );
});

export default TextBar;
