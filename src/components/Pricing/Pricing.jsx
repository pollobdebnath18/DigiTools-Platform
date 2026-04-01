import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="max-w-[1100px] w-full mt-96 mb-20  mx-auto">
      <div className="text-center mb-10 space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#101727] ">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[16px] text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 md:mx-0 gap-10 ">
        {/* Pricing - 1 */}
        <div className="flex flex-col bg-[#F2F2F2] p-5 space-y-4 rounded-2xl">
          <div className="leading-7">
            <h3 className="text-[#22px] font-bold">Starter</h3>
            <p className="text-[14px] text-[#627382]">
              Perfect for getting started
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#627382]">
              <span className="text-[35px] text-[#101727] font-bold">$0</span>
              /Month
            </p>
          </div>
          <div className="flex-1 text-[14px] text-[#627382] leading-6">
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check> Access to 10 free
              tools
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Basic templates
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Community support
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>1 project per month
            </p>
          </div>
          <div className="">
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full py-5">
              Get Started Free
            </button>
          </div>
        </div>
        {/* Pricing -2 */}
        <div className="flex flex-col bg-gradient-to-r from-[#9514FA] to-[#4F39F6] p-5 space-y-4 rounded-2xl text-white relative">
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] rounded-full px-3 py-1 text-xs font-semibold">
            Popular
          </span>
          <div className="leading-7">
            <h3 className="text-[22px] font-bold">Pro</h3>
            <p className="text-[14px] ">Best for professionals</p>
          </div>
          <div>
            <p className="text-[14px] ">
              <span className="text-[35px]  font-bold">$29</span>
              /Month
            </p>
          </div>
          <div className="flex-1 text-[14px] leading-6">
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check> Access to all
              premium tools
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Unlimited templates
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Priority support
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Unlimited projects
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Cloud sync
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Advanced analytics
            </p>
          </div>

          <div className="">
            <button className="btn  text-[#4F39F6] bg-white w-full rounded-full">
              Start Pro Trial
            </button>
          </div>
        </div>
        {/* Pricing- 3 */}
        <div className="flex flex-col bg-[#F2F2F2] p-5 space-y-4 rounded-2xl">
          <div className="leading-7">
            <h3 className="text-[#22px] font-bold">Enterprise</h3>
            <p className="text-[14px] text-[#627382]">
              For teams and businesses
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#627382]">
              <span className="text-[35px] text-[#101727] font-bold">$99</span>
              /Month
            </p>
          </div>
          <div className="flex-1 text-[14px] text-[#627382] leading-6">
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check> Everything in Pro
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Team collaboration
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Custom integrations
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Dedicated support
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>SLA guarantee
            </p>
            <p className="flex  gap-1">
              <Check className="w-[20px] h-[20px]"></Check>Custom branding
            </p>
          </div>
          <div className="">
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full py-5">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
