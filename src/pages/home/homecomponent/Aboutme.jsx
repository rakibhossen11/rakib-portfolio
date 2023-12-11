import React from "react";
import about from "../../../assets/about.webp";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-2 px-[100px] mt-16 items-center justify-center">
      <div className="w-full">
        <img className="rounded-[6px]" src={about} alt="" />
      </div>
      <div>
      <p className="font-signika text-blue-600 text-[18px] mb-[40px]">About Me</p>
        <h1 className="text-[45px] font-signika mb-[40px]">I Can Design Anything <br /> You Want</h1>
        <p className="font-serif mb-[40px]">
          I am Rakib. I am a React Develope.From programing hero I have complete
          my web developer course. Now I am fresher font end developer. I have
          some personal project of react.
        </p>
        <div className="flex gap-3 mb-[40px]">
          <div className="flex gap-2">
            <div>
              <img src={logo1} alt="" />
            </div>
            <div className="font-signika">
              <span className="text-orange-500">3+</span>
              <p>Complete Project</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <div>
                <img src={logo2} alt="" />
              </div>
              <div className="font-signika">
                <span className="text-orange-500">6+</span>
                <p>Month of Exprience</p>
              </div>
            </div>
          </div>
        </div>
        <button className='bg-orange-500 py-4 px-6 rounded-xl font-signika text-2xl text-white'>Download Resume</button>
      </div>
    </div>
  );
};

export default Aboutme;
