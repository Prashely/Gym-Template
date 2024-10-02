import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

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
        <div className="w-full flex gap-5 justify-center">
          <div className="text-center">
            <div className="flex gap-1 items-center">
              <span>
                <FcGoogle />
              </span>
              <span className="font-black">4/5</span>
              <span>
                <FaStar className="text-yellow-500" />
              </span>
            </div>
            <span>Google</span>
          </div>
          <div className="border-l border-gray-500 h-auto"></div>
          <div className="text-center">
            <div className="flex gap-1 items-center">
              <span>
                <BsPeopleFill />
              </span>
              <span className="font-black">1200+</span>
            </div>
            <span>Members</span>
          </div>
          <div className="border-l border-gray-500 h-auto"></div>
          <div className="text-center">
            <div className="flex gap-1 items-center">
              <span>
                <IoLocationSharp />
              </span>
              <span className="font-black">3</span>
            </div>
            <span>Locations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
