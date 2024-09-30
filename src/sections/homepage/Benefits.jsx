import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import One from "../../assets/images/1.jpg";

const Benefits = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat text-white py-8"
      style={{
        backgroundImage: `url(${One})`, // Replace with your image URL
        backgroundAttachment: "fixed", // This gives the parallax effect
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 flex flex-col items-start ml-6 mt-14">
        <div>
          <p className="font-black tracking-tighter mb-4">
            HEALTH ZONE FITNESS CENTER
          </p>
          <h2 className="text-2xl text-left font-black mb-4 tracking-tighter">
            JOIN THE BEST GYM IN
            <span className="text-4xl block">MOKOPANE.</span>
          </h2>
        </div>
        <div>
          <p className="text-lg pr-7 mb-8">
            Our gym offers everything you need to stay healthy, from a beautiful
            environment to a friendly staff. Our facilities are designed to make
            your workout experience unforgettable and Peaceful. With over 5
            years of experience and a commitment to providing a safe and
            welcoming environment, you will be more than a member, you will be
            part of a our family.
          </p>
        </div>
        <div>
          <ul className="flex flex-col justify-center gap-2 text-lg ">
            <li className="flex items-center">
              <FaRegCheckCircle className="text-yellow-500 mr-2 text-2xl font-black" />{" "}
              Free internet
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-yellow-500 mr-2 text-2xl font-black" />{" "}
              Showers & Steam Rooms
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-yellow-500 mr-2 text-2xl font-black" />{" "}
              Flexible class schedules
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-yellow-500 mr-2 text-2xl font-black" />{" "}
              Expert coaching
            </li>
            <li className="flex items-center">
              <FaRegCheckCircle className="text-yellow-500 mr-2 text-2xl font-black" />{" "}
              Parking
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-md">
          Join Us
        </button>
      </div>
    </section>
  );
};

export default Benefits;
