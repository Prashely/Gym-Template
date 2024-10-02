import React from "react";
import Form from "../../assets/components/ui/Form";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">
            A Gym That Gives You More - Fitness Beyond Limits.
          </h1>
          <p className="py-6">
            Welcome to your next chapter, we are thrilled to have you join us -
            best gym in town. Please leave your contacts below and we'll get in
            touch asap. No commitments.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Prashely Maluleke"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="068 392 8066"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Call Me</button>
            </div>
            <p className="text-xs text-center">
              Don’t worry, we won’t show your contact details to anyone.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
