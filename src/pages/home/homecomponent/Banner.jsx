import React from 'react';
import img1 from '../../../assets/banner1.png';

const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-[20px] items-center justify-center px-[100px] bg-orange-100 pb-[50px] border-b-[2px] border-b-[#3498DB]'>
            <div>
                <p className='font-signika text-2xl mb-[40px]'>I am a <span className='text-orange-600'>React Developer</span> </p>
                <h3 className='font-signika text-[44px] mb-[30px]'>Creative React Web Application and Solutions</h3>
                <p className='font-signika text-[18px] mb-[40px]'>I am Rakib. I am a React Develope.From programing hero I have complete my web developer course. Now I am fresher font end developer. I have some personal project of react.</p>
                <button className='bg-orange-500 py-4 px-6 rounded-xl font-signika text-2xl text-white'>Download Resume</button>
            </div>
            <div className='p-[16px]'>
                <img className='rounded-[6px]'  src='https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/361645941_1666710017429960_8233889087616637270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-2fMe2pEcdYAX9Wc_zj&_nc_oc=AQkD0KtNQ7Li2PTnwIxiHnsj34fIqOCjfu0Z0IGOohQ0JLVGHs_QJKAaNOFsvd9nstk&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCAPBTv-9QDS2BHGmdxgrSRHkV1Hk-4cSr2FlCVor9UzA&oe=657702AE' alt="" />
            </div>
        </div>
    );
};

export default Banner;