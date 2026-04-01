import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#101727]  mt-56 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 pt-20 space-y-20 md:space-y-12 lg:space-y-0 ">
        <div className="ml-10 md:ml-20 text-white">
          <h1 className="text-5xl mb-6">DigiTools</h1>
          <p className="text-sm leading-6 opacity-80">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="grid grid-cols-3 text-white pl-1 md:pl-12 md:pl-0 ml-10 ">
          <div className="leading-9">
            <h3 className="text-xl font-bold">Product</h3>
            <div className="opacity-80">
              <p>Features</p>
              <p>Pricing</p>
              <p>Templates</p>
              <p>Integrations</p>
            </div>
          </div>
          <div className="leading-9">
            <h3 className="text-xl font-bold">Company</h3>
            <div className="opacity-80">
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
          </div>
          <div className="leading-9">
            <h3 className="text-xl font-bold">Resource</h3>
            <div className="opacity-80">
              <p>Documentation</p>
              <p>Help Center</p>
              <p>Community</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="ml-15  pl-25 md:pl-10 md:pl-0">
          <h3 className="text-xl font-bold mb-5 text-white">Social Links</h3>
          <div className="flex gap-4 items-center">
            <div className="bg-white p-1 rounded-full flex items-center justify-center">
              <FaFacebook className="text-white-600 text-lg" />
            </div>
            <div className="bg-white p-1 rounded-full flex items-center justify-center">
              <FaInstagram className="text-white-600 text-lg"></FaInstagram>
            </div>
            <div className="bg-white p-1 rounded-full flex items-center justify-center">
              <FaSquareXTwitter className="text-white-600 text-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="bg-[#101727] p-4 pt-16 pb-10">
        <div className="max-w-[1100px] mx-auto border-t border-white"></div>
      </div>
      <div className="bg-[#101727] pb-10">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-[16px] text-[#FAFAFA] opacity-50 pb-10 md:pb-0 pl-10 md:pl-0">
            © 2026 Digitools. All rights reserved.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 pl-15">
            <p className="text-[16px] text-[#FAFAFA] opacity-50">
              Privacy Policy{" "}
            </p>
            <p className="text-[16px] text-[#FAFAFA] opacity-50">
              Terms of Service
            </p>
            <p className="text-[16px] text-[#FAFAFA] opacity-50">Cookies</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
