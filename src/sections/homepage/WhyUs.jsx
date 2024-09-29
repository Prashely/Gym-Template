import React from "react";
import { GoDot } from "react-icons/go";
import Reasons from "../../assets/components/ui/Reasons";
import Twelve from "../../assets/images/12.jpg";
import Four from "../../assets/images/4.jpg";
import Eleven from "../../assets/images/11.jpg";

const WhyUs = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center my-6">
      <h2 className="text-4xl text-black font-bold text-center mb-4">
        WHY CHOOSE US?
      </h2>
      <div className="w-full flex flex-col justify-center">
        <div className="carousel carousel-center bg-bgPrimary rounded-box space-x-6 p-4">
          <div id="item1" className="carousel-item">
            <Reasons
              imageSrc={Twelve}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div id="item2" className="carousel-item">
            <Reasons
              imageSrc={Four}
              title="Dolor Sit Amet"
              description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div id="item3" className="carousel-item">
            <Reasons
              imageSrc={Eleven}
              title="Consectetur Adipiscing"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
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
