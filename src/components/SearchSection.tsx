"use client";

import React from "react";

const PropertySearchSection: React.FC = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Box Container */}
        <div className="">
          {/* Buttons */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-[#816629] text-white text-[22px]  rounded-tl-2xl  transition">
              Buy
            </button>
            <button className="px-6 py-3 bg-[#332910] text-white text-[22px]  rounded-tr-2xl  transition">
              Rent
            </button>
          </div>
          <div className="bg-[#ECECED] bg-opacity-70 shadow-md rounded-lg p-6 space-y-6 py-14">
            {/* Search and Dropdowns */}
            <div className="space-y-4 md:space-y-0 md:space-x-3  md:items-center">
              {/* Search Field */}
              <input
                type="text"
                placeholder="Area, compound, real estate developer..."
                className="text-gray-800 w-full md:w-[40%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[blue-500] transition"
              />

              {/* Property Types Dropdown */}
              <select className="text-gray-800 w-full md:w-[50%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#816629] transition">
                <option value="">Property Types</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="space-y-4 md:space-y-0 md:space-x-3  md:items-center mx-auto">
              {/* Bedrooms Dropdown */}
              <select className="text-gray-800 w-full md:w-[43%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#816629] transition">
                <option value="">Bedrooms</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              {/* Price Dropdown */}
              <select className="text-gray-800 w-full md:w-[40%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none  focus:ring-[#816629]transition">
                <option value="">Price</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              {/* Search Button */}
              <button className="w-full md:w-auto px-9 py-3 bg-[#816629] text-white font-semibold rounded-md hover:bg-[#816629] transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchSection;
