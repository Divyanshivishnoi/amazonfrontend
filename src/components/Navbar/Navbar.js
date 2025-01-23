import React from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../../assests/amazonLogo.png";
import LanguageDropdown from "../languageDropdown/languageDropdown";
import AccountDropdown from "../AccountDropdown/AccountDropdown";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const count = useSelector((state) => state.cart.cartItems.length);
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-black text-white space-y-4 sm:space-y-0 sticky top-0 z-50  ">
      <img
        src={amazonLogo}
        alt="Amazon Logo"
        className="h-8 mb-4 sm:mb-0 hover:border-2 hover:border-white mr-4 "
      />
      <div className="text-center sm:text-left sm:ml-4 hover:border-2 hover:border-white mr-4">
        <h1 className="text-sm">Delivering to Moradabad 244001</h1>
        <h2 className="text-lg font-semibold">Update location</h2>
      </div>

      {/* dropdown input searchbar */}
      <select
        name="category"
        className="p-3 bg-gray-200 border-r border-black text-black focus:outline-none w-16 text-sm rounded-l-md"
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="books">Books</option>
        <option value="fashion">Fashion</option>
        <option value="home-kitchen">Home & Kitchen</option>
        <option value="sports">Sports</option>
        <option value="toys">Toys</option>
      </select>

      {/*  Input */}
      <input
        type="text"
        name="query"
        placeholder="Search Amazon.in"
        className="p-3 flex-1 text-sm text-black focus:outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-400 transition duration-200 text-black p-3 rounded-r-md mr-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.5 9.5a7.5 7.5 0 010 7.5z"
          />
        </svg>
      </button>

      <LanguageDropdown />
      <AccountDropdown />

      <div className="flex flex-col sm:flex-row items-center mr-4">
        <button className="px-4 py-2 bg-black rounded-lg   hover:border-2 hover:border-white ">
          Returns & Orders
        </button>
      </div>

      {/*  cart */}

      <Link
        to="/cart"
        className="flex items-center space-x-2 hover:border-2 hover:border-white "
      >
        <div className="relative">
          <BsCart3 size={24} />
          <span className="absolute -top-2 -right-3 bg-yellow-500 text-black rounded-full px-1 text-xs font-bold">
            {count}
          </span>
        </div>
        <span className="text-sm font-bold">Cart</span>
                
      </Link>
    </div>
  );
};
export default Navbar;
