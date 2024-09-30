import React from "react";

const Reasons = ({ imageSrc, title, description, icon }) => {
  return (
    <div className="relative  w-[90vw] h-[450px] overflow-hidden rounded-lg shadow-lg">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      {/* Black background on the lower half */}
      <div className="absolute bottom-0 w-full h-[200px] bg-black bg-opacity-85 p-4 flex flex-col items-center justify-center text-center text-white">
        <p className="text-4xl mb-2">{icon}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Reasons;
