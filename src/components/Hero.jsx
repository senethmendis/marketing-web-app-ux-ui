import { Canvas } from "@react-three/fiber";
import { Play, Star } from "../assets";
import Button from "./Button";
import { Environment, OrbitControls } from "@react-three/drei";
import Laptop from "./Laptop";
import { BrandLogos } from "../constant";

const Hero = () => {
  return (
    <section className=" w-full h-full max-w-[1440px] mx-auto flex flex-col">
      <div className="px-10 md:px-5 w-full h-full flex md:flex-row flex-col items-start  md:pt-10">
        <div className="w-full flex flex-col items-start justify-center flex-1 md:w-1/2 ">
          <h1 className="font-bold text-7xl  md:text-8xl bg-gradient-to-l bg-purple-400 from-purple-800 bg-clip-text text-transparent">
            AI-Driven
          </h1>
          <h1 className="font-bold text-7xl md:text-8xl ">marketing</h1>
          <p className="py-5 pr-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio at
            sequi eos quo dolore ipsam repellendus suscipit qui assumenda!
            Numquam fugiat odit nam quos consequatur tempora placeat voluptatem
            quas dolore.
          </p>
          <div className="flex gap-5 py-5">
            <Button
              text="Get Stared"
              background={true}
              customStyles={"text-white"}
              isShadow={true}
            />
            <Button
              isShadow={true}
              icon={Play}
              isIcon={true}
              text={"Watch a Demo"}
            />
          </div>
          <div className="w-full">
            <div>
              <p className="py-3">Tested software reviews</p>
              <div className="w-full gap-2 flex flex-row items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img key={star} src={Star} alt="start" className="w-4 h-4" />
                ))}
                <strong>4.9/5.0</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:h-[600px] hidden md:flex justify-center items-center flex-1 md:w-1/2 bg-black ">
          <Canvas style={{ backgroundColor: "white" }}>
            <Environment preset="studio" />
            <OrbitControls enableZoom={false} />
            <Laptop
              scale={0.1}
              rotation={[1, 4.7, 0.7]}
              position={[1, -0.2, 0]}
            />
          </Canvas>
        </div>
      </div>
      <div className="w-full h-20 bg-primary rounded-none md:rounded-2xl flex items-center justify-around mt-10">
        {BrandLogos.map((logo, i) => (
          <img key={i} src={logo} alt="" className="w-24 invert" />
        ))}
      </div>
    </section>
  );
};

export default Hero;

//scale={0.1} rotation={[1, 4.7, 0.7]}
