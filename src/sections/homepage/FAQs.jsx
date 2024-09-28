import React from "react";

const FAQs = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center sm:gap-2 my-6">
      <h2 className="text-4xl font-bold text-center mb-4">FAQs</h2>
      <div className="sm:w-[85vw]">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Do I need to be Fit to join the gym?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I join as a beginner?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I cancel my subscription anytime?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What are the gym's operating hours?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="text-xl font-black">HEALTHY BODY, HEALTHY MIND</p>
      </div>
    </section>
  );
};

export default FAQs;
