import React from "react";
import { RiApps2Line } from "react-icons/ri";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { SlSpeedometer } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="p-[100px]">
      <section>
        <h2 className="font-hammersmith text-[64px] text-center pt-10">
          Services
        </h2>
        <p className="font-signika text-[24px] px-24 text-center mt-[30px] mb-[70px] text-[#979A9A]">
          Do you have a great idea but can’t turn it into a reality? <br />
          don’t worry! Rakib's team is here to help you with your project.
          <br />
          We do our best to provide high-quality services for your digital
          <br /> project.
        </p>
      </section>
      {/* services What is that i provide */}
      <section className="grid grid-cols-3 gap-[30px] mt-[30px] mb-[100px]">
        <div className="flex flex-col justify-center items-center bg-zinc-200 h-[320px] hover:bg-blue-500 hover:text-white rounded-xl px-[60px]">
          <RiApps2Line className="h-12 w-12" />
          <h1 className="py-6 font-hammersmith text-2xl">UI-X Design</h1>
          <p className="font-signika text-[16px]">
            we can design whatever you are thinking about. including Minimal,
            Modern and Creative designs.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-zinc-200 h-[320px] hover:bg-blue-500 hover:text-white rounded-xl px-[60px]">
          <IoExtensionPuzzleOutline className="h-12 w-12" />
          <h1 className="py-6 font-hammersmith text-2xl">App Development</h1>
          <p className="font-signika">
            Provide a greate experience for your mobile users by creating native
            apps. we can develop your app in no time!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-zinc-200 h-[320px] hover:bg-blue-500 hover:text-white rounded-xl px-[60px]">
          <TbWorld className="h-12 w-12" />
          <h1 className="py-6 font-hammersmith text-2xl">Web Development</h1>
          <p className="font-signika">
            do you want a unique website with a greate user experience? just
            trust us and see the incredible result.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-zinc-200 h-[320px] hover:bg-blue-500 hover:text-white rounded-xl px-[60px]">
          <SlSpeedometer className="h-12 w-12" />
          <h1 className="py-6 font-hammersmith text-2xl">Deployment</h1>
          <p className="font-signika">
            if you're looking for someone to deploy and maintain your project,
            then you're in a right place! you can leave it for us and get rid of
            extra work.
          </p>
        </div>
      </section>
      {/* pricing */}
      <section className="">
        <button className="bg-orange-300 font-signika text-white px-4 py-2 rounded-[4px] text-[16px] mb-[20px]">
          01
        </button>
        <h2 className="font-hammersmith text-[64px] text-left pt-10">
          Pricing
        </h2>
        {/* price card */}
        <div className="grid grid-cols-4 gap-[24px] pt-[80px]">
          {/* personal price */}
          <div className="bg-[#F4F6F6] rounded-lg px-[24px] py-[80px] text-center">
            <p className="font-signika text-[18px]">Personal</p>
            <h2 className="font-hammersmith text-[72px] text-[#263238 ]">
              $100
            </h2>
            <div className="flex flex-col gap-y-[10px]">
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Web pages: 5
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Custom Domain Connection
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Free SSL
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Website languages: 1
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> SEO Friendly
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Preminum support
              </p>
            </div>
            <button className="font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px]">
              Contact
            </button>
          </div>
          {/* corporate web price */}
          <div className="bg-[#F4F6F6] rounded-lg px-[24px] py-[80px] border-[2px] border-[#1E88E5] text-center">
            <p className="font-signika text-[18px]">Corporate website</p>
            <h2 className="font-hammersmith text-[72px] text-[#263238]">
              $500
            </h2>
            <div className="flex flex-col gap-y-[10px]">
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Web pages: 10
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Custom Domain Connection
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Free SSL
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Website languages: 2
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> SEO Friendly
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Preminum support
              </p>
            </div>
            <button className="font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px]">
              Contact
            </button>
          </div>
          {/* Ecommerce website */}
          <div className="bg-[#F4F6F6] rounded-lg px-[24px] py-[80px] text-center">
            <p className="font-signika text-[18px]">Ecommerce</p>
            <h2 className="font-hammersmith text-[72px] text-[#263238 ]">
              $3000
            </h2>
            <div className="flex flex-col gap-y-[10px]">
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Web pages: 30
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Custom Domain Connection
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Free SSL
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Website languages: 2
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> SEO Friendly
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Preminum support
              </p>
            </div>
            <button className="font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px]">
              Contact
            </button>
          </div>
          {/* Blockchain projects */}
          <div className="bg-[#F4F6F6] rounded-lg px-[24px] py-[80px] text-center">
            <p className="font-signika text-[18px]">Blockchain projects</p>
            <h2 className="font-hammersmith text-[72px] text-[#263238 ]">
              $200+
            </h2>
            <div className="flex flex-col gap-y-[10px]">
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Web pages: 30
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Custom Domain Connection
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Free SSL
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Website languages: 1
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> SEO Friendly
              </p>
              <p className="flex items-center gap-[10px] font-signika text-[18px]">
                <FaCheck /> Preminum support
              </p>
            </div>
            <button className="font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px]">
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
