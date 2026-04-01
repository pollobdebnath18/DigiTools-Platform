import { Play } from "lucide-react";
import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-[1100px] mx-auto mt-15 mb-30 grid grid-cols-1 md:grid-cols-2 gap-10  items-center ">
      <div className="space-y-4 text-center lg:text-start">
        <span className="inline-flex justify-center items-center gap-2 bg-[#E1E7FF] p-2 rounded-2xl text-[12px] md:text-sm text-[#4F39F6]">
          <span className="bg-[#4F39F6] w-4 h-4   rounded-full inline-block"></span>{" "}
          New: AI-Powered Tools Available
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-sm text-[#627382] leading-7">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex gap-5 ml-15 md:ml-0">
          <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            Explore Products
          </a>
          <button className="btn btn-outline rounded-full hover:bg-[#4F39F6] hover:text-white ">
            <Play className="w-[20px] h-[20px]"></Play> Watch Demo
          </button>
        </div>
      </div>
      <div className="mx-8 md:mx-0">
        <img className="w-[500px] h-[500px]" src={bannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
