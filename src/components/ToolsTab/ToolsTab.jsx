import React from "react";

const ToolsTab = ({ activeTab, setActiveTab, carts }) => {
  // console.log(activeTab);
  return (
    <div className="max-w-[1100px] w-full mt-80 mb-20  mx-auto">
      <div className="text-center mb-5 space-y-3">
        <h1 className="text-5xl font-extrabold text-[#101727] ">
          Premium Digital Tools
        </h1>
        <p className="text-[16px] text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center items-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${activeTab == "Products" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab("Products")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${activeTab === "Cart" && "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
            aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("Cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolsTab;
