import React, { memo } from "react";
import "./Title.css";

const Title = memo((props) => {
  const { title, moreLink, onclickFunction, titleTextClass } = props;
  return (
    <div className="flex flex-row font-bold TitleContainer justify-between">
      <p className={titleTextClass ? titleTextClass : ""}>{title}</p>
      {moreLink && (
        <p onClick={onclickFunction ? onclickFunction : () => {}}>{moreLink}</p>
      )}
    </div>
  );
});

export default Title;
