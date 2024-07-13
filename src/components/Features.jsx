import React from "react";
import { Glob, Laptop, Play } from "../assets";
import Button from "./Button";

const Features = () => {
  return (
    <section className="bg-purple-300 rounded-3xl  rounded-t-3xl mt-16 md:mt-0 w-full h-full md:py-16 max-w-[1440px] gap-5 mx-auto flex flex-col">
      <div className="w-full h-full flex flex-col md:flex-row pb-10 md:py-0">
        <div className="w-full h-full md:w-1/2 flex justify-center items-center">
          <img src={Laptop} alt="" className="w-[400px]" />
        </div>
        <div className="w-full md:w-1/2 px-5 md:px-10 flex flex-col items-start justify-center">
          <h1 className="text-4xl  md:text-6xl tracking-wide font-bold ">
            Navigation Success through Precision Ad Tracking
          </h1>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            modi cumque beatae debitis culpa delectus voluptatibus nisi
            necessitatibus laboriosam, autem odit repudiandae aliquid veritatis
            earum ad perferendis enim nam cupiditate.
          </p>
          <Button
            icon={Play}
            isIcon={true}
            text={"Watch Demo"}
            purpleBorder={true}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row py-10 md:py-0">
        <div className="w-full md:w-1/2 px-5 md:px-10 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl tracking-wide font-bold ">
            Navigation Success through Precision Ad Tracking
          </h1>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            modi cumque beatae debitis culpa delectus voluptatibus nisi
            necessitatibus laboriosam, autem odit repudiandae aliquid veritatis
            earum ad perferendis enim nam cupiditate.
          </p>
          <Button
            icon={Play}
            isIcon={true}
            text={"Watch Demo"}
            purpleBorder={true}
          />
        </div>
        <div className="w-full h-full md:w-1/2 flex justify-center items-center">
          <img src={Glob} alt="" className="w-[400px] " />
        </div>
      </div>
    </section>
  );
};

export default Features;
