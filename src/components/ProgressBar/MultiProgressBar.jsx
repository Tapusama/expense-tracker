import React, { memo } from "react";
import "./progressBar.css";

const MultiprogressBar = memo(({data}) => {
  return (
    <div className="multiprogressBar rounded-lg">
      {data &&
        data.length > 0 &&
        data.map((e, i) => {
          return <div key={i} style={e?.style}></div>;
        })}
    </div>
  );
});

export default MultiprogressBar;
