import React from "react";

const User = () => {
  return (
    <div className="grid grid-cols-3 place-items-center py-13 mb-20  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="md:ml-48">
        <h2 className="text-xl md:text-5xl font-extrabold text-white pb-1">50K+</h2>
        <p className="text-sm md:text-lg font-medium text-white">
          Active Users
        </p>
      </div>
      <div>
        <h2 className="text-xl md:text-5xl font-extrabold text-white pb-1">200+</h2>
        <p className="text-sm md:text-lg font-medium text-white">
          Premium Tools
        </p>
      </div>
      <div className="md:mr-48">
        <h2 className="text-xl md:text-5xl font-extrabold text-white pb-1">4.9</h2>
        <p className=" md:text-lg font-medium text-white">Rating</p>
      </div>
    </div>
  );
};

export default User;
