import React from "react";
import { Annouce } from "../assets";

const GridItem = ({ image, title, color }) => {
  return (
    <div className={`w-full px-7 py-5 rounded-3xl ${color}`}>
      <h1 className="text-3xl font-bold py-4">{title}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio earum vel
        vitae iusto minus. Officia, tenetur illo iste quisquam in libero porro
        explicabo voluptatum nobis? Cum harum libero blanditiis porro.
      </p>
      <div className="w-full flex items-center justify-center py-6 ">
        <img src={image} alt="" className="w-[200px]" />
      </div>
    </div>
  );
};

export default GridItem;
