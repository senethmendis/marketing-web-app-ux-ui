import React from "react";
import { Annouce, HSK, Music } from "../assets";
import GridItem from "./GridItem";

const Discover = () => {
  return (
    <section className="mt-16 md:mt-0 w-full h-full md:py-16 max-w-[1440px] mx-auto flex flex-col">
      <div className="md:w-[60%] px-5 md:px-0 text-center gap-8 flex mx-auto flex-col justify-center items-center mb-10">
        <h1 className="text-5xl font-bold">
          Discover Our Comprehensive <br /> Suite of Features
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          excepturi voluptatibus ab temporibus eaque reiciendis perferendis
          optio aut. Eum, atque? Blanditiis eum laborum architecto nesciunt
          corporis voluptate amet, laudantium omnis!
        </p>
      </div>

      {/* bento layout */}
      <div className="grid gap-5 grid-cols-1 px-8 md:px-16">
        <div className="bg-yellow-200 flex flex-col md:flex-row py-5 px-7 rounded-2xl">
          <div className="w-full md:w-1/2 pr-5 flex items-start justify-center flex-col">
            <h1 className="text-3xl font-bold py-5">
              Harness Insights for Success
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto recusandae quidem voluptatum enim aut asperiores itaque
              distinctio veritatis totam, earum vitae ipsum sequi culpa labore
              sint doloribus quo, neque delectus?
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={Music} alt="" className="w-[300px] h-full" />
          </div>
        </div>

        {/* layout 2 */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <GridItem
            image={Annouce}
            title="Seamless Lead Generation"
            color="bg-green-500"
          />
          <GridItem
            image={HSK}
            title="Targeted Campaign Excellence"
            color="bg-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
