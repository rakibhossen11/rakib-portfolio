import React from "react";
import about from "../../../assets/about.webp";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-2 mt-16 items-center justify-center">
      <div className="w-full pl-10">
        <img src={about} alt="" />
      </div>
      <div>
        <p className="font-hammersmith">About me</p>
        <h1 className="text-3xl font-signika">I Can Design Anything You Want</h1>
        <p className="font-serif">
          I am Rakib. I am a React Develope.From programing hero I have complete
          my web developer course. Now I am fresher font end developer. I have
          some personal project of react.
        </p>
        <div className="flex gap-3">
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
