import React, { memo } from "react";

const NotificationSlides = memo((props) => {
  return (
    <div className="border border-gray-300 rounded-lg w-50 h-30 flex flex-row p-1 m-1">
      <div className="w-10 h-10 bg-gray-100 pt-2 rounded-3xl border-r-8 justify-start"></div>
      <div className="w-44"></div>
      <div className="w-10 h-10 bg-gray-100 pt-2 rounded-3xl border-r-8 justify-end"></div>
    </div>
  );
});

export default NotificationSlides;
