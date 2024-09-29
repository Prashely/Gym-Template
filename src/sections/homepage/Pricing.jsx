import React, { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("1m");

  // Pricing data with actual values from the previous table
  const pricingData = {
    scholars: {
      label: "Scholars (under 19)",
      prices: {
        "1m": "R300",
        "3m": "R250",
        "6m": "R200",
        "1yr": "R166",
        "2yr": "---",
      },
    },
    students: {
      label: "Students/Pensioners",
      prices: {
        "1m": "R500",
        "3m": "R400",
        "6m": "R300",
        "1yr": "R241",
        "2yr": "---",
      },
    },
    adults: {
      label: "Adults",
      prices: {
        "1m": "R700",
        "3m": "R500",
        "6m": "R400",
        "1yr": "R325",
        "2yr": "R245",
      },
    },
    couple: {
      label: "Couple",
      prices: {
        "1m": "R1000",
        "3m": "R800",
        "6m": "R650",
        "1yr": "R575",
        "2yr": "R206",
      },
    },
  };

  // Tab labels
  const tabs = [
    { id: "1m", label: "1m" },
    { id: "3m", label: "3m" },
    { id: "6m", label: "6m" },
    { id: "1yr", label: "1yr" },
    { id: "2yr", label: "2yr" },
  ];

  return (
    <section className="my-6">
      <h2 className="text-4xl font-bold text-black mb-4 text-center">FAQs</h2>
      <div className="container w-3 p-4 border-2 border-black rounded-2xl">
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
    </section>
  );
};

export default Pricing;
