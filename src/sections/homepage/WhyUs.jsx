import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css"; // Swiper styles
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Reasons from "../../assets/components/ui/Reasons";
import Twelve from "../../assets/images/12.jpg";
import Seven from "../../assets/images/7.jpg";
import Eleven from "../../assets/images/11.jpg";
import { BiDumbbell } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdPricetags } from "react-icons/io";

// Add preloading utility for images
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

const WhyUs = () => {
  // Memoize the list of items
  const items = useMemo(
    () => [
      {
        id: 1,
        image: Twelve,
        icon: <BiDumbbell />,
        title: "Personal Trainer",
        description:
          "We have coaches with a ton of experience ready to help you achieve all your body goals",
      },
      {
        id: 2,
        image: Seven,
        icon: <HiUserGroup />,
        title: "Group Classes",
        description:
          "Want to stay motivated and consistent? We offer group classes to help you stay on track.",
      },
      {
        id: 3,
        image: Eleven,
        icon: <IoMdPricetags />,
        title: "Variety of Plans",
        description:
          "We offer plans for students, families, and everyone else that fits your budget.",
      },
    ],
    []
  );

  // Preload all images once
  useMemo(() => {
    items.forEach((item) => preloadImage(item.image));
  }, [items]);

  return (
    <section className="w-full flex flex-col items-center justify-center my-6">
      <h2 className="text-xl text-bgPrimary font-semibold text-center mb-4 tracking-tighter">
        Personal Training <span className="text-bgSecondary">+</span> Group
        Classes <span className="text-bgSecondary">+</span> Affordable Rates
      </h2>

      {/* Swiper.js Carousel */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full flex flex-col justify-center"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Reasons
              imageSrc={item.image}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhyUs;
