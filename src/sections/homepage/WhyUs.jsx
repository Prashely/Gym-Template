import React, { useEffect, useState, useRef } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import Reasons from "../../assets/components/ui/Reasons";
import Twelve from "../../assets/images/12.jpg";
import Seven from "../../assets/images/7.jpg";
import Eleven from "../../assets/images/11.jpg";
import { BiDumbbell } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdPricetags } from "react-icons/io";

const WhyUs = () => {
  const [activeItem, setActiveItem] = useState(1); // Track the active card
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setActiveItem(index);
          }
        });
      },
      {
        threshold: 0.6, // Adjust threshold for sensitivity
      }
    );

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => observer.observe(item));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center my-6">
      <h2 className="text-4xl text-black font-bold text-center mb-4">
        Personal Training <span>+</span> Group classes <span>+</span> Affordable
        Rates
      </h2>
      <div className="w-full flex flex-col justify-center">
        <div
          ref={carouselRef}
          className="carousel carousel-center bg-bgPrimary rounded-box space-x-6 p-4"
        >
          <div id="item1" className="carousel-item" data-index="1">
            <Reasons
              imageSrc={Twelve}
              icon={<BiDumbbell />}
              title="Personal Trainer"
              description="We have coaches with a ton of experience ready to help you achieve all your body goals"
            />
          </div>
          <div id="item2" className="carousel-item" data-index="2">
            <Reasons
              imageSrc={Seven}
              icon={<HiUserGroup />}
              title="Group Classes"
              description="Want to stay motivated and consistent in your fitness Journey, Health Zone offers a variety of group classes to help you stay consistent and reach your body goals"
            />
          </div>
          <div id="item3" className="carousel-item" data-index="3">
            <Reasons
              imageSrc={Eleven}
              icon={<IoMdPricetags />}
              title="Variety of Plans"
              description="Are you scholar, student, spouse, parent or even a grandparent? Health Zone offers a variety of plans that suit your your budget."
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="bg-bgPrimary">
            {activeItem === 1 ? (
              <GoDotFill className="transition-all duration-500 ease-in-out text-xl text-black" />
            ) : (
              <GoDot className="transition-all duration-500 ease-in-out text-xl" />
            )}
          </a>
          <a href="#item2" className="bg-bgPrimary">
            {activeItem === 2 ? (
              <GoDotFill className="transition-all duration-500 ease-in-out text-xl text-black" />
            ) : (
              <GoDot className="transition-all duration-500 ease-in-out text-xl" />
            )}
          </a>
          <a href="#item3" className="bg-bgPrimary">
            {activeItem === 3 ? (
              <GoDotFill className="transition-all duration-500 ease-in-out text-xl text-black" />
            ) : (
              <GoDot className="transition-all duration-500 ease-in-out text-xl" />
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
