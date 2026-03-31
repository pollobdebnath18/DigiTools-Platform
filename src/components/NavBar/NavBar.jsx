import { ShoppingCart } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="max-w-[1100px] w-full  mx-auto flex ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            
              
            </ul>
          </div>
          <a className="text-2xl font-bold text-[#9514FA]">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/feautre">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
            <div className="flex items-center gap-4">
               <ShoppingCart></ShoppingCart>
               <p className="mr-3">Login</p>
            </div>
          <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
