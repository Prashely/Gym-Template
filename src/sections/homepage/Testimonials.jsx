import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Reviews from "../../assets/components/ui/Reviews";

const Testimonials = () => {
  const reviews = Reviews(); // Get the review data from the Reviews component

  // Function to display the stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? true : false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaRegStar key={index} className="text-yellow-500" />
          ))}
      </div>
    );
  };

  return (
    <section className="bg-black py-8">
      <h2 className="text-4xl text-white font-bold text-center my-4">
        TESTIMONIALS
      </h2>
      <div className="w-full flex justify-center">
        <div className="carousel carousel-center rounded-box space-x-4 p-4 smooth">
          {reviews.map((review, index) => (
            <div className="carousel-item w-[85vw]" key={index}>
              <div className="p-6 bg-bgPrimary rounded-2xl shadow-lg text-center">
                <FaQuoteLeft className="text-4xl text-black mx-auto mb-4" />
                <p className="text-lg text-gray-600 dark:text-black">
                  {review.text}
                </p>
                <div className="w-full flex justify-center mt-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-md font-semibold mt-2">{review.reviewer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4">
        <p className="text-center">
          Are you a member?
          <a href="#" target="_blank" className="ml-1 underline text-white">
            Leave a review
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
