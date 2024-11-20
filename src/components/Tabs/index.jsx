"use client";
import React, { memo } from "react";
import { useState } from "react";

export default function Tabs(props) {
  const { tabsData } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="container">
      <div className="flex space-x-5">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 transition-colors duration-300 text-sm  ${
                idx === activeTabIndex
                  ? "text-[#2f2cd8]"
                  : "border-transparent hover:border-gray-200 text-gray-400"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Show active tab content. */}
      <div className="py-4">{tabsData[activeTabIndex].content}</div>
    </div>
  );
}
