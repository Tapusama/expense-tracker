import React, { memo } from "react";
import "./Table.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineSavings } from "react-icons/md";

const CustomTable = memo((props) => {
  const { tableData } = props;
  ;
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow sm bg-white tableWrapper">
      <h4 className="tableTitle font-bold">Transaction History</h4>
      <table className="text-sm table-responsive mt-2 ">
        <thead className="t-head">
          <tr className="border-b">
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Currency
            </th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {tableData &&
            tableData.length > 0 &&
            tableData.map((e, i) => {
              return (
                <tr key={i} className="border-b ms-4">
                  <th
                    scope="row"
                    className="flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="dot" style={{ backgroundColor: e?.color }}>
                      {e?.icon}
                    </div>
                    <span className="text-[#7184ad]">
                      {e.category ?? "Apple MacBook Pro 17"}
                    </span>
                  </th>
                  <td className="px-6 py-4"> {e.description}</td>
                  <td className="px-6 py-4"> {e.date.toDateString()}</td>
                  <td className="px-6 py-4"> {e.amount}</td>
                  <td className="px-6 py-4"> {e.currency}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
});

export default CustomTable;
