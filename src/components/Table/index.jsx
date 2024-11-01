import React, { memo } from "react";
import "./Table.css";

const CustomTable = memo((props) => {
  const { title, moreLink } = props;
  const tableData = [
    {
      category: "Pet Food",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Royal Canin",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Comb",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Cat",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Dog",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Ethernet cable",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Router",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Mouse",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Dog",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Plant",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
    {
      category: "Table",
      date: new Date(),
      amount: 2400,
      currency: "INR",
      description: "Grocery Items and Beverage soft drinks",
    },
  ];
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
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e.category ?? "Apple MacBook Pro 17"}
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
