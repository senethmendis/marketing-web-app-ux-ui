import React from "react";
import { Chart, Play } from "../assets";
import Button from "./Button";

const Review = () => {
  return (
    <section className="px-5 md:px-0 mt-16 md:mt-0 w-full h-screen  md:py-16 max-w-[1440px]  mx-auto flex flex-col md:flex-row ">
      <div className="w-full md:2-1/2 flex justify-center items-center">
        <img src={Chart} alt="" className="w-full" />
      </div>
      <div className="w-full md:2-1/2 flex flex-col gap-8 items-start justify-center">
        <h1 className="font-bold text-4xl md:text-6xl">
          Ready to boost your marketing & sales?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel
          perferendis sunt repellat hic maxime amet ex cum, odit dolorum,
          quisquam facilis animi in laboriosam itaque recusandae ullam corrupti
          fugiat.
        </p>
        <div className="flex gap-8">
          <Button
            isShadow
            background
            text={"Get Started"}
            customStyles={"text-white"}
          />
          <Button isShadow icon={Play} isIcon purpleBorder text={"Watch Now"} />
        </div>
      </div>
    </section>
  );
};

export default Review;
