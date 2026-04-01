import React from "react";
// import ShoppingCart from '../../assets/products/shopping-cart.png'
import { ShoppingCart } from "lucide-react";
import CartDataDisplay from "./CartDataDisplay";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const handleProceed = () => {
    setCarts([]);
    toast.success("Successfuly Checkout");
  };
  // console.log(carts);
  const cartsSize = carts.length;
  const totalPrice = carts.reduce(
    (sum, item) => sum + Number(item.price.replace("$", "")),
    0,
  );
  //   console.log(cartsSize);
  return (
    <div className="max-w-[1100px] w-full mt-16 mb-20  mx-auto bg-white shadow-2xl rounded-xl ">
      <h1 className="text-2xl font-extrabold text-[#101727] mx-10 pt-10 pb-7">
        Your Cart
      </h1>
      {cartsSize === 0 && (
        <div className="text-center p-20">
          {/* <img className=' mx-auto  w-' src={ShoppingCart} alt="" /> */}
          <ShoppingCart className="mx-auto w-[200px] h-[100px] text-[#627382]"></ShoppingCart>
          <p className="text-[16px] text-[#627382] ">Your Cart is Empty</p>
        </div>
      )}
      <div className="">
        {carts.map((cart) => (
          <CartDataDisplay
            key={cart.id}
            cart={cart}
            carts={carts}
            setCarts={setCarts}
          ></CartDataDisplay>
        ))}
      </div>
      {cartsSize >= 1 && (
        <div>
          <div className="flex justify-between items-center bg-white mx-10 my-5   px-8 py-5 shadow-sm rounded-lg">
            <p className="text-lg">Total</p>
            <p className="text-[#101727] text-2xl font-extrabold">
              $ {totalPrice}
            </p>
          </div>
          <div className="mx-2 my-5   px-8 py-5">
            <button
              onClick={handleProceed}
              className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
