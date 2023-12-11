import React, { useEffect, useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { SlSpeedometer } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  // const [services,setServices] = useState([]);
  // useEffect(()=>{
  //     fetch('data.json')
  //     .then(res => res.json())
  //     .then(date => setServices(date))
  // },[])
  return (
    <div className="px-[100px] mt-[100px] mb-[120px]">
      {/* <p className='font-signika text-center mt-10'>My Service</p>
            <h1 className='font-signika text-3xl text-center'>SERVICES I OFFER</h1>
            <div className='grid grid-cols-4 gap-3 mt-8'>
                {
                    services.map(service => 
                    <div className='p-10 shadow-xl border-2 rounded-md border-slate-300 transform transition duration-500 hover:scale-105' key={service.id}>
                        <img src={service.image} alt="" />
                        <h2 className='font-signika text-2xl '>{service.title}</h2>
                        <p className='font-thin'>{service.details}</p>
                    </div> )
                }
            </div> */}
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
    </div>
  );
};

export default Services;
