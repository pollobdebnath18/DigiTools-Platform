import React from "react";
import Feature from "./Feature";

const DisplayCart = ({ tools }) => {
  console.log(tools);
  const { name, description, price, features, icon, period, tag } = tools;
  return (
    <div className=" p-5 rounded-2xl bg-white shadow-xl space-y-4 pt-5 relative">
      <div>
        <img className="w-[60px] h-[50px] object-contain" src={icon} alt="" />
      </div>
      <div>
        <h1 className="text-[#101727] text-xl">{name}</h1>
      </div>
      <div>
        <p className="text-sm text-[#627382] leading-6">{description}</p>
      </div>
      <div>
        <span className="text-2xl font-bold">{price}</span>/
        <span className="text-sm text-[#627382]">{period}</span>
      </div>
      <div>
        {features.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
      </div>
      <div>
        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full">
          Buy Now
        </button>
        {/* <p>{tag}</p> */}
      </div>
      <div className="">
        <span
          className={`text-sm px-3 py-1 rounded-4xl top-5 right-3 absolute 
            ${
              tag === "Best Seller"
                ? "bg-yellow-100  text-[#BB4D00]"
                : tag === "New"
                  ? "bg-[#DBFCE7] text-[#0A883E]"
                  : "bg-[#E1E7FF] text-[#9514FA]"
            }
            }  `}
        >
          {tag}
        </span>
      </div>
    </div>
  );
};

export default DisplayCart;
