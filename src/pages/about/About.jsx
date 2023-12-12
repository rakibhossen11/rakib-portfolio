import React from 'react';
import Testimonial from './Testimonial';
import rakib from '../../assets/rakib.jpg';

const About = () => {
    return (
        <div className='px-[100px]'>
            <h2 className='font-hammersmith text-[64px] text-center pt-10'>About Us</h2>
            <p className='font-signika text-[24px] px-24 text-center mt-[30px] mb-[70px] text-gray-400'>We are a creative team that provides digital services such as <br /> Web development, SEO, Mobile app development, Graphic design <br /> and so much more!</p>
            <div className='grid grid-cols-2 gap-[28px] mt-[40px]'>
                <div>
                    <img className='rounded-[6px] border-[2px] border-[#3498DB]' src={rakib} alt="" />
                </div>
                <div>
                    <p className='text-blue-600 text-[16px]'>FEATURES</p>
                    <h2 className='font-hammersmith text-[44px]'>We deliver exceptional <br /> customer service</h2>
                    <div>
                        <p className='font-signika text-[18px] pt-[12px]'><span className='text-blue-500 text-[24px]'>#1</span> Mission </p>
                        <p className='text-[14px] text-zinc-600 pt-[12px]'>Our mission is to empower businesses of all sizes to achieve their online goals through innovative and customized web solutions.</p>
                    </div>
                    <div>
                        <p className='font-signika text-[18px] pt-[12px]'><span className='text-orange-400 text-[24px]'>#2</span> Goals </p>
                        <p className='text-[14px] text-zinc-600 pt-[12px]'>Our mission is to empower businesses of all sizes to achieve their online goals through innovative and customized web solutions.</p>
                    </div>
                    <div>
                        <p className='font-signika text-[18px] pt-[12px]'><span className='text-sky-400 text-[24px]'>#3</span> Why Us ?</p>
                        <p className='text-[14px] text-zinc-600 pt-[12px]'>We want to build long-lasting relationships with our clients based on trust, communication, and mutual success, so it's the most important thing for us to make you satisfied with your needs.</p>
                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    );
};

export default About;