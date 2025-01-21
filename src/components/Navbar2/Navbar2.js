import React from "react";
import NavSideBar from "../NavSideBar/NavSideBar"
const Navbar2 = () => {
  const buttons = [
    <NavSideBar/>   ,
    "Fresh",
    "MX Player",
    "Sell",
    "Best Sellers",
    "Today's Deal",
    "Mobile Phones",
    "Electronics",
    "Customer Service"
  ];

  return (
    <div className="flex items-center justify-between px-4 py-0.5 bg-gray-800 border-b border-gray-700">
      {/* <NavSideBar/> */}
      <div className="flex gap-4">
        {buttons.map((button) => (
          <button
            key={button}
            className="px-4 py-0.5 rounded-md text-white bg-transparent hover:border-2 hover:border-white"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar2;
