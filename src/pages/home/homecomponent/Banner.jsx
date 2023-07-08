import React from 'react';
import img1 from '../../../assets/banner1.png';

const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-2 items-center justify-center px-2 bg-orange-100 leading-8 pt-8'>
            <div>
                <p className='font-signika text-2xl'>I am a <span className='text-orange-600'>React Developer</span> </p>
                <h3 className='font-hammersmith text-4xl'>Creative React Web Application and Solutions</h3>
                <p className='font-serif text-xl mb-4'>I am Rakib. I am a React Develope.From programing hero I have complete my web developer course. Now I am fresher font end developer. I have some personal project of react.</p>
                <button className='bg-orange-500 py-4 px-6 rounded-xl font-signika text-2xl text-white'>Download Resume</button>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Banner;