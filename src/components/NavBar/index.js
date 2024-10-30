"use client";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import SearchBar from "../SearchBar";
import { useState } from "react";
import Notificationscreen from "../NotificationScreen";

export default function NavBar() {
  const [showNotificationScreen, setShowNotificationScreen] = useState(false);
  const onClickNotification = (e) => {
    console.log(e);
    setShowNotificationScreen(!showNotificationScreen);
  };
  return (
    <nav className="ps-4 pe-4 flex flex-row justify-between">
      <SearchBar />
      <ul className="flex space-x-4 relative">
        <li>
          <button type="button" className="p-1">
            <CiLight size={24} />
          </button>
        </li>
        <li>
          <button type="button" className="p-1" onClick={onClickNotification}>
            <IoNotificationsCircleOutline size={24} />
          </button>
          {/* <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span> */}
        </li>
        <li>
          <button type="button" className="p-1">
            <CgProfile size={24} />
          </button>
        </li>
      </ul>
      <Notificationscreen showNotificationScreen={showNotificationScreen} />
    </nav>
  );
}
