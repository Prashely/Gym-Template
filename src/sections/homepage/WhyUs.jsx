import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
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

  // Memoize the list of items to prevent re-calculation on every render
  const items = useMemo(() => {
    return [
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
    ];
  }, []); // The empty array means this will only be calculated once

  // Use callback to memoize the function
  const handleItemClick = useCallback((index) => {
    setActiveItem(index);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            if (index !== activeItem) {
              setActiveItem(index);
            }
          }
        });
      },
      {
        threshold: 0.6, // Adjust threshold for sensitivity
      }
    );

    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [activeItem]); // Only re-run effect if `activeItem` changes

  return (
    <section className="w-full flex flex-col items-center justify-center my-6 ">
      <h2 className="text-xl text-bgPrimary font-semibold text-center mb-4 tracking-tighter ">
        Personal Training <span className="text-bgSecondary">+</span> Group
        Classes <span className="text-bgSecondary">+</span> Affordable Rates
      </h2>
      <div className="w-full flex flex-col justify-center">
        <div
          ref={carouselRef}
          className="carousel carousel-center rounded-box space-x-6 p-4"
        >
          {items.map((item) => (
            <div
              key={item.id}
              id={`item${item.id}`}
              className="carousel-item"
              data-index={item.id}
            >
              <Reasons
                imageSrc={item.image}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {items.map((item) => (
            <a key={item.id} href={`#item${item.id}`} className="bg-white">
              {activeItem === item.id ? (
                <GoDotFill className="transition-all duration-200 ease-in-out text-xl text-bgPrimary" />
              ) : (
                <GoDot className="transition-all duration-200 ease-in-out text-xl" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyUs);
