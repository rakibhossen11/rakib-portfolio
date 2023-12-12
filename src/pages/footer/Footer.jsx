import React from "react";

const Footer = () => {
  return (
    <div className="px-[10px] md:px-[100px]">
      <footer className="flex flex-col items-center md:flex md:flex-row gap-[60px] mt-[100px] bg-[#FFFFFF]">
        <section>
          <h1 className="font-hammersmith text-3xl">Rakib's web</h1>
          <p className="font-signika text-[16px] mt-[30px]">
            We provide web design services for your business <br /> and also
            create content related to programming
          </p>
          <h3 className="mt-[30px] font-signika text-[18px] ">
            Join our news letter
          </h3>
          <div className="md:flex mt-[16px] h-[80px]">
            <input
              type="Email"
              placeholder="Email address"
              className="font-signika text-[16px] px-[8px] py-[4px] border-[2px] border-[#CFD8DC] rounded-[4px]"
            />
            <button className="ml-[4px] font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px]">
              join
            </button>
          </div>
        </section>
        <section>
          <h3 className="font-signika text-[24px]">Feature Technology</h3>
          <p className="mt-[30px] font-signika text-[18px] text-[#979A9A]">
            HTML
          </p>
          <p className="font-signika text-[18px] text-[#979A9A]">CSS</p>
          <p className="font-signika text-[18px] text-[#979A9A]">Javascript</p>
          <p className="font-signika text-[18px] text-[#979A9A]">React Js</p>
        </section>
        <section>
          <h2 className="font-signika text-[24px]">Information</h2>
          <p className="mt-[30px] font-signika text-[18px] text-[#979A9A]">
            FAQ
          </p>
          <p className="font-signika text-[18px] text-[#979A9A]">Site Map</p>
          <p className="font-signika text-[18px] text-[#979A9A]">
            Cookies Policy
          </p>
          <p className="font-signika text-[18px] text-[#979A9A]">Contact Us</p>
        </section>
        <section>
          <h2 className="font-signika text-[24px]">Contact Us</h2>
          <p className="mt-[30px] font-signika text-zinc-400">
            Phone: (+088) 1966 366 745
          </p>
          <p className="font-signika text-[18px] text-[#979A9A]">
            Email: info@rakib.com
          </p>
          <p className="font-signika text-[18px] text-[#979A9A]">
            Whatsapp: @rakib_support
          </p>
        </section>
      </footer>
      <p className="pt-[150px] pb-[30px] font-signika">
        © 2023 Rakib Co. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
