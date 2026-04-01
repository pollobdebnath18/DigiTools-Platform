import React from "react";
import User from "../../assets/user.png";
import Package from "../../assets/package.png";
import Rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="max-w-[1100px] w-full mt-80 mb-20  mx-auto">
      <div className="text-center mb-10 space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#101727] ">
          Get Started in 3 Steps
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-8 md:mx-10 lg:mx-0 gap-10 md:gap-5 lg:gap-10 ">
        <div className="bg-white rounded-2xl shadow-2xl px-5 pb-12 text-center space-y-3 py-4 pt-16 relative">
          <img
            className="mx-auto text-[#9514FA] bg-[#cba9e3] rounded-full p-3"
            src={User}
            alt=""
          />
          <h3 className="text-[22px] font-bold text-[#101727]">
            Create Account
          </h3>
          <p className="text-[13px] text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-2 py-1 text-white rounded-full absolute top-4 right-4">
            01
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl px-5 pb-12 text-center space-y-3 py-4 pt-16 relative">
          <img
            className="mx-auto text-[#9514FA] bg-[#cba9e3] rounded-full p-3"
            src={Package}
            alt=""
          />
          <h3 className="text-[22px] font-bold text-[#101727]">
            Choose Products
          </h3>
          <p className="text-[13px] text-[#627382]">
            Browse our catalog and select the toolsthat fit your needs.
          </p>
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-2 py-1 text-white rounded-full absolute top-4 right-4">
            02
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl px-5 pb-12 text-center space-y-3 py-4 pt-16 relative">
          <img
            className="mx-auto text-[#9514FA] bg-[#cba9e3] rounded-full p-3"
            src={Rocket}
            alt=""
          />
          <h3 className="text-[22px] font-bold text-[#101727]">
            Start Creating
          </h3>
          <p className="text-[13px] text-[#627382]">
            Download and start using your premium tools immediately.
          </p>
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-2 py-1 text-white rounded-full absolute top-4 right-4">
            03
          </span>
        </div>
      </div>
    </div>
  );
};

export default Steps;
