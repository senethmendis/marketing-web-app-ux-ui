import React from "react";
import { FooterDetaisls, SocialLogs } from "../constant";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary rounded-t-3xl text-white py-5  px-5 md:px-0 mt-16 md:mt-0 w-full h-full  md:py-16 max-w-[1440px]  mx-auto">
      <div className="border-b border-b-white/15 w-full flex flex-col md:flex-row md:px-10 ">
        <div className="my-5 w-full h-[100px] md:w-1/3 flex flex-col justify-between">
          <div className="flex">
            <img src={Logo} alt="logo" className="w-5 invert" />
            <h2 className="font-bold text-purple-600">MRK</h2>
          </div>
          <div className="w-full flex flex-row gap-5">
            {SocialLogs.map((logo, i) => (
              <div className="bg-purple-600 rounded-full w-10 h-10 flex justify-center items-center">
                <img src={logo} alt="" key={i} className="w-5 h-5 invert" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-1/2 ">
          <div className=" w-full h-full grid grid-cols-1 md:grid-cols-4">
            {FooterDetaisls.map((set, i) => (
              <div key={i}>
                <h1 className="text-xl font-semibold">{set.head}</h1>
                {set.Items.map((item, i) => (
                  <p key={i} className="capitalize py-2 text-gray-400">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between md:px-10 py-6">
        <div className="py-5">
          {new Date().getFullYear() + " Alright Reserved"}
        </div>
        <div className="flex flex-col md:flex-row gap-6 text-gray-400">
          <p>Privacy</p>
          <p>Terms of Service</p>
          <p>Discover</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
