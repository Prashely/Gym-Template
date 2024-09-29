import React from "react";
import { GoDot } from "react-icons/go";

const WhyUs = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center my-6">
      <h2 className="text-4xl text-black font-bold text-center mb-4">
        WHY CHOOSE US?
      </h2>
      <div className="w-full flex flex-col justify-center">
        <div className="carousel carousel-center bg-bgPrimary rounded-box space-x-6 p-4">
          <div id="item1" className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box"
            />
          </div>
          <div id="item2" className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box"
            />
          </div>
          <div id="item3" className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="bg-bgPrimary">
            <GoDot className="font-black" />
          </a>
          <a href="#item2" className="bg-bgPrimary">
            <GoDot className="font-black" />
          </a>
          <a href="#item3" className="bg-bgPrimary">
            <GoDot className="font-black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
