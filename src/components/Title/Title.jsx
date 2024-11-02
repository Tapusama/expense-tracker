import React, { memo } from "react";
import "./Title.css";

const Title = memo((props) => {
  const { title, moreLink } = props;
  return (
    <div className="flex flex-row font-bold TitleContainer justify-between">
      <p>{title}</p> {moreLink && <p>{moreLink}</p>}
    </div>
  );
});

export default Title;
