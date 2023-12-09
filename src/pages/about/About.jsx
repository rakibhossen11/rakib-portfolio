import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='font-hammersmith text-[64px] text-center pt-10'>About Us</h2>
            <p className='font-signika text-[24px] px-24 text-center mt-1 text-gray-400'>We are a creative team that provides digital services such as <br /> Web development, SEO, Mobile app development, Graphic design <br /> and so much more!</p>
            <div className='grid grid-cols-2 px-[100px] gap-[28px] mt-[40px]'>
                <div>
                    <img className='rounded-lg ' src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/361645941_1666710017429960_8233889087616637270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-2fMe2pEcdYAX9Wc_zj&_nc_oc=AQkD0KtNQ7Li2PTnwIxiHnsj34fIqOCjfu0Z0IGOohQ0JLVGHs_QJKAaNOFsvd9nstk&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCAPBTv-9QDS2BHGmdxgrSRHkV1Hk-4cSr2FlCVor9UzA&oe=657702AE" alt="" />
                </div>
                <div>
                    <p className='text-blue-600 text-[16px]'>FEATURES</p>
                    <h2 className='font-hammersmith text-[44px]'>We deliver exceptional <br /> customer service</h2>
                    <div>
                        <p className='font-signika text-[18px] pt-[12px]'><span className='text-blue-500'>#1</span> Mission </p>
                        <p className='text-[14px] text-zinc-600 pt-[12px]'>Our mission is to empower businesses of all sizes to achieve their online goals through innovative and customized web solutions.</p>
                    </div>
                    <div>
                        <p className='font-signika text-[18px] pt-[12px]'><span className='text-orange-400'>#2</span> Goals </p>
                        <p className='text-[14px] text-zinc-600 pt-[12px]'>Our mission is to empower businesses of all sizes to achieve their online goals through innovative and customized web solutions.</p>
                    </div>
                    <div>
                        <p className='font-signika text-[18px] pt-[12px]'><span className='text-sky-400'>#3</span> Why Us ?</p>
                        <p className='text-[14px] text-zinc-600 pt-[12px]'>We want to build long-lasting relationships with our clients based on trust, communication, and mutual success, so it's the most important thing for us to make you satisfied with your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;