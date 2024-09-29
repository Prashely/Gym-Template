import React from "react";
import Form from "../../assets/components/ui/Form";

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-bgPrimary min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-center">Box Office News!</h1>
            <p className="py-2 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
