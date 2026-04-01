import React from "react";
import { toast } from "react-toastify";

const CartDataDisplay = ({ cart, carts, setCarts }) => {
  const { id, name, price, icon } = cart;
  const handleDelete = () => {
    const remaining = carts.filter((item) => item.id !== id);
    setCarts(remaining);
    toast.error("Item Removed", { duration: 800 });
  };
  //   console.log(cart);
  return (
    <>
      <div className="  bg-[#ebecef] mx-10 my-5  px-8 py-5 shadow-sm rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="">
              <img
                className="w-[55px] h-[40px] object-contain"
                src={icon}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-[#101727] text-lg">{name}</h3>
              <p className="text-sm text-[#627382] text-lg">{price}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleDelete}
              className=" text-[#FF3980] cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDataDisplay;
