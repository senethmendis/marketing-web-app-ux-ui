import React from "react";

import Button from "./Button";
import { PricingItems } from "../constant";
import { Check } from "../assets";

const Pricing = () => {
  return (
    <section className="bg-black text-white rounded-3xl mt-16 md:mt-0 w-full h-full md:py-16 max-w-[1440px] gap-5 mx-auto flex flex-col items-center">
      <div className="w-full md:w-[50%] text-center px-5">
        <h1 className="text-5xl py-8">
          You Don't have to bother bringinf in customers
        </h1>
        <p className="text-sm pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nihil
          iste, ex cumque atque eveniet in saepe, voluptate distinctio at earum
          dignissimos? Fuga cumque iste mollitia amet, nisi quasi cupiditate!
        </p>
      </div>

      <div className="px-10 md:px-0 w-full h-full flex flex-col md:flex-row items-center justify-center gap-5">
        <PriceCard price={12} />
        <PriceCard price={40} isCenter />
        <PriceCard price={60} />
      </div>
    </section>
  );
};

export default Pricing;

const PriceCard = ({ price, isCenter }) => {
  return (
    <div className="bg-white text-black rounded-3xl w-full md:w-[250px]  hover:scale-105 transition-all duration-200">
      {isCenter && (
        <div className="w-full h-10 rounded-t-2xl bg-gradient-to-l bg-purple-400 flex items-center justify-center ">
          Most Popular 🔥
        </div>
      )}
      <div className="p-5">
        <div className="w-full flex flex-col mb-5">
          <p>Basic Plan</p>
          <h1
            className={`text-4xl font-bold py-2 ${
              isCenter
                ? "text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700"
                : ""
            }`}
          >
            ${price}
          </h1>
          <span className="text-sm font-normal text-gray-400">per month</span>
          <p className="text-sm py-5">Unlimited swipes and interface</p>
        </div>
        <Button text={"Get Started"} purpleBorder />
        <div className="w-full mt-8">
          <h2 className="text-xl font-bold mb-5">Features</h2>
          {PricingItems.map((text, i) => (
            <p key={i} className="text-gray-400 text-md flex gap-2">
              <img src={Check} alt="" className="w-5 h-5" /> {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
