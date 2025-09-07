import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        StayFinder
      </div>

      {/* Search Bar */}
      <div className="flex w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search accommodations..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-4 rounded-r-md">
          Search
        </button>
      </div>

      {/* Auth Links */}
      <div className="flex space-x-4">
        <button className="text-blue-600 hover:underline">Sign In</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="w-full mt-4 md:mt-0 flex justify-center md:justify-start space-x-4 text-sm text-gray-600">
        <span className="cursor-pointer hover:text-blue-600">Rooms</span>
        <span className="cursor-pointer hover:text-blue-600">Mansion</span>
        <span className="cursor-pointer hover:text-blue-600">Countryside</span>
        <span className="cursor-pointer hover:text-blue-600">Cabins</span>
      </nav>
    </header>
  );
};

export default Header;
