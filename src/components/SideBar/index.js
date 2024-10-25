"use client"; // This file is a client component
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for menu and close

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="mt-4 space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded"><a href="/Dashboard">Dashboard</a></li>
            <li className="hover:bg-gray-700 p-2 rounded"><a href="/Wallet">Wallet</a></li>
            <li className="hover:bg-gray-700 p-2 rounded"><a href="/Budget">Budget</a></li>
            <li className="hover:bg-gray-700 p-2 rounded"><a href="/Analytics">Analytics</a></li>
            <li className="hover:bg-gray-700 p-2 rounded"><a href="/Expenses">Expenses</a></li>
            <li className="hover:bg-gray-700 p-2 rounded"><a href="/Settings">Settings</a></li>
          </ul>
        </div>
      </div>

      {/* Content and Sidebar toggle for mobile */}
      <div className="flex-1 p-4 md:ml-64">
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Main content */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
