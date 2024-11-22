import React, { memo } from "react";
import NotificationSlides from "./notificationSlides";

const Notificationscreen = memo((props) => {
  const { showNotificationScreen, notificationData = [1,2,35,4,3] } = props;

  return (
    <>
      {showNotificationScreen ? (
        <div className="border border-gray-300 shadow-md rounded-lg w-50 h-80 bg-red-150 absolute z-20 right-10 top-20 w-64 flex flex-col text-center">
          <div className="h-10 bg-gray-100 pt-2 rounded-t-lg font-bold">
            Notifications
          </div>
          <div className="container">
            {notificationData && notificationData.length > 0 ? (
              notificationData.map((e, i) => {
                return <NotificationSlides key={i} />;
              })
            ) : (
              <div className="text-gray-300 border h-full flex flex-col justify-center">
                <p>Nothing to show here</p>
              </div>
            )}
          </div>
          <div className="h-8 bg-gray-100 pt-1 rounded-b-lg text-blue-700">
            See more...
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});

export default Notificationscreen;
