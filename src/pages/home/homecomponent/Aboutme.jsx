import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiTimerFlashFill } from "react-icons/ri";
import about from "../../../assets/about.webp";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-[10px] md:px-[100px] mt-16 items-center justify-center">
      <div className="w-full">
        <img className="rounded-[6px]" src={about} alt="" />
      </div>
      <div>
      <p className="font-signika text-blue-600 text-[18px] mb-[40px]">About Me</p>
        <h1 className="text-[45px] font-signika mb-[40px]">I Can Design Anything <br /> You Want</h1>
        <p className="font-signika text-[20px] mb-[40px]">
          I am Rakib. I am a React Develope.From programing hero I have complete
          my web developer course. Now I am fresher font end developer. I have
          some personal project of react.
        </p>
        <div className="flex gap-[30px] mb-[40px]">
          <div className="flex gap-[10px]">
            <div>
            <AiFillSafetyCertificate className="h-12 w-12 text-[#1E88E5]" />
            </div>
            <div className="font-signika">
              <span className="text-orange-500">5+</span>
              <p>Complete Project</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <div>
              <RiTimerFlashFill className="h-12 w-12 text-[#1E88E5]" />
              </div>
              <div className="font-signika">
                <span className="text-orange-500">1+</span>
                <p>Year of Exprience</p>
              </div>
            </div>
          </div>
        </div>
        <button className="font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px] mr-[24px]">
            Contact Me
          </button>
      </div>
    </div>
  );
};

export default Aboutme;
