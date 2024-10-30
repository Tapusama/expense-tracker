import React, { memo } from "react";
import "./progressBar.css";

const SingleProgressBar = memo((props) => {
  const { percentage, color } = props;
  return (
    <div className="singleProgressBar rounded-lg bg-slate-200">
      <div style={{ width: percentage, backgroundColor: color }}></div>;
    </div>
  );
});

export default SingleProgressBar;
