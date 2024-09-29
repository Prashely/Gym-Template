import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="bg-black py-4">
      <h2 className="text-2xl text-white font-bold text-center ml-5 italic mb-4">
        get more...
      </h2>
      <div className="flex flex-col items-center space-y-4">
        {/* Centered image */}
        <div className="flex justify-center w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box w-[92vw] max-w-md"
          />
        </div>

        {/* Horizontal row of benefits that wrap */}
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2 w-full">
          <ul className="list-none flex flex-wrap justify-center gap-4">
            <li className="flex items-center text-white text-xl font-semibold italic">
              <FaRegCheckCircle className="mr-2 text-white text-2xl" />
              Saunas
            </li>
            <li className="flex items-center text-white text-xl font-semibold italic">
              <FaRegCheckCircle className="mr-2 text-white text-2xl" />
              Showers
            </li>
            <li className="flex items-center text-white text-xl font-semibold italic">
              <FaRegCheckCircle className="mr-2 text-white text-2xl" />
              Free WiFi
            </li>
            <li className="flex items-center text-white text-xl font-semibold italic">
              <FaRegCheckCircle className="mr-2 text-white text-2xl" />
              Commercial Cardio
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
