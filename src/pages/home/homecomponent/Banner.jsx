import React from "react";
import img1 from "../../../assets/rakib.jpg";

const Banner = () => {
  return (
    <section className='px-[10px] md:px-[100px] py-[100px] bg-cover bg-hero-pattern bg-no-repeat'>
      <div>
        <p className="text-blue-600 font-signika uppercase">
          FULLSTACK DEVELOPER
        </p>
        <h1 className="font-signika text-[80px] text-[#FFFFFF]">
          I'm <br /> Mohammad <br /> Rakib Hossen
        </h1>
        <p className="font-signika text-[24px]">
          it's been about 3 years that I'm working with <br /> JavaScript, its
          Frameworks, and Libraries. as a fullstack <br /> developer
        </p>
        {/* buttons */}
        <div>
          <button className="font-signika text-[18px] bg-[#1E88E5] text-white rounded-[6px] px-[36px] py-[10px] mt-[24px] mr-[24px]">
            Hire Me
          </button>
          <button className="font-signika text-[18px] bg-[#FFFFFF] rounded-[6px] px-[36px] py-[10px] mt-[24px]">
            Projects
          </button>
        </div>
        {/* clients */}
        <div className="mt-[50px] flex gap-[34px]">
            <div>
                <p className="font-signika text-[36px] ">+1</p>
                <p className="font-signika text-[18px] ">Clients worldwide</p>
            </div>
            <div>
                <p className="font-signika text-[36px] ">5</p>
                <p className="font-signika text-[18px] ">Projects done</p>
            </div>
        </div>
      </div>
    </section>
    // <div className='grid grid-cols-2 gap-[20px] items-center justify-center px-[100px] bg-orange-100 pb-[50px] border-b-[2px] border-b-[#3498DB]'>
    //     <div>
    //         <p className='font-signika text-[30px] mb-[40px]'>I am a <span className='text-orange-600'>React Developer</span> </p>
    //         <h3 className='font-signika text-[44px] mb-[30px]'>Creative React Web Application and Solutions</h3>
    //         <p className='font-signika text-[18px] mb-[40px]'>I am Rakib. I am a React Develope.From programing hero I have complete my web developer course. Now I am fresher font end developer. I have some personal project of react.</p>
    //         <button className='bg-orange-500 py-4 px-6 rounded-xl font-signika text-2xl text-white'>Download Resume</button>
    //     </div>
    //     <div className='p-[16px]'>
    //         <img className='rounded-[6px]'  src='https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/361645941_1666710017429960_8233889087616637270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-2fMe2pEcdYAX9Wc_zj&_nc_oc=AQkD0KtNQ7Li2PTnwIxiHnsj34fIqOCjfu0Z0IGOohQ0JLVGHs_QJKAaNOFsvd9nstk&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCAPBTv-9QDS2BHGmdxgrSRHkV1Hk-4cSr2FlCVor9UzA&oe=657702AE' alt="" />
    //     </div>
    // </div>
  );
};

export default Banner;
