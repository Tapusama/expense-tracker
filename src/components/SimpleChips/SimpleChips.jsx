import React, { memo } from "react";

const SimpleChips = memo((props) => {
  const { heading, value, headingTextClass } = props;
  return (
    <div className="flex flex-col font-bold container justify-between gap-4">
      <p
        className={
          headingTextClass ? headingTextClass : "text-xs text-[#7184ad]"
        }
      >
        {heading}
      </p>
      <p className="text-2xl font-semibold  text-[#1f2c73]">{value}</p>
    </div>
  );
});

export default SimpleChips;
