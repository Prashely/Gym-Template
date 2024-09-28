import React, { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("1m");

  // Pricing data with actual values from the previous table
  const pricingData = {
    scholars: {
      label: "Scholars",
      prices: {
        "1m": "R300",
        "3m": "R750",
        "6m": "R1200",
        "1yr": "R2000",
        "2yrs": "R2900",
      },
    },
    students: {
      label: "Students/Pension",
      prices: {
        "1m": "R500",
        "3m": "R1200",
        "6m": "R1800",
        "1yr": "R2400",
        "2yrs": "R3900",
      },
    },
    adults: {
      label: "Adults",
      prices: {
        "1m": "R700",
        "3m": "R1500",
        "6m": "R2400",
        "1yr": "R3900",
        "2yrs": "R5900",
      },
    },
    couple: {
      label: "Couple",
      prices: {
        "1m": "R1000",
        "3m": "R2400",
        "6m": "R3900",
        "1yr": "R6900",
        "2yrs": "R9900",
      },
    },
  };

  // Tab labels
  const tabs = [
    { id: "1m", label: "1m" },
    { id: "3m", label: "3m" },
    { id: "6m", label: "6m" },
    { id: "1yr", label: "1yr" },
    { id: "2yrs", label: "2yrs" },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Tabs for Months */}
      <div className="tabs tabs-boxed flex justify-center mb-4 lg:hidden">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {/* Responsive grid for small screens */}
      <div className="lg:hidden grid grid-cols-2 gap-4">
        <div className="flex flex-col items-end text-right space-y-2">
          {Object.values(pricingData).map((category, index) => (
            <div key={index} className="font-semibold text-lg">
              {category.label}
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {Object.values(pricingData).map((category, index) => (
            <div
              key={index}
              className="text-green-500 font-bold text-lg text-center"
            >
              {category.prices[activeTab]}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive table for larger screens */}
      <div className="hidden lg:block overflow-x-auto mt-6">
        <table className="table-auto w-full text-center border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="border border-gray-300 p-4">Category</th>
              {tabs.map((tab) => (
                <th key={tab.id} className="border border-gray-300 p-4">
                  {tab.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(pricingData).map((category, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 font-semibold p-4">
                  {category.label}
                </td>
                {tabs.map((tab) => (
                  <td key={tab.id} className="border border-gray-300 p-4">
                    {category.prices[tab.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
