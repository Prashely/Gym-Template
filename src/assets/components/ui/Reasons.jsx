import React from "react";
import { FaRegLightbulb } from "react-icons/fa"; // Placeholder icon, feel free to change

const Reasons = ({ imageSrc, title, description }) => {
  return (
    <div className="relative w-[80vw] h-[450px] overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover filter blur-sm"
        />
      </div>
      <div className="relative bg-black bg-opacity-50 backdrop-blur-sm p-6 flex flex-col items-center justify-center h-full text-center text-white">
        <FaRegLightbulb className="text-4xl mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Reasons;
