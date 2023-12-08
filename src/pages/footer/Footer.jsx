import React from 'react';

const Footer = () => {
    return (
        <footer className='grid grid-cols-4 mt-10 p-5 bg-[#FFFFFF]'>
            <section>
                <h1 className='font-hammersmith text-3xl'>Rakib's web</h1>
                <p>We provide web design services for your business and also create content related to programming</p>
            </section>
            <section>
                <h3 className='font-signika text-xl'>Feature Technology</h3>
                <p className='font-hammersmith text-zinc-400'>HTML</p>
                <p className='font-hammersmith text-zinc-400'>CSS</p>
                <p className='font-hammersmith text-zinc-400'>Javascript</p>
                <p className='font-hammersmith text-zinc-400'>React Js</p>
            </section>
            <section>
                <h2 className='font-signika text-xl'>Supports Technology</h2>
                <p className='font-hammersmith text-zinc-400'>Tailwind Css</p>
                <p className='font-hammersmith text-zinc-400'>Bootstrap</p>
                <p className='font-hammersmith text-zinc-400'>Daisy Ui</p>
                <p className='font-hammersmith text-zinc-400'>React Roter Dom</p>
                <p className='font-hammersmith text-zinc-400'>React Component Library</p>
            </section>
            <section>
                <h2 className='font-signika text-xl'>Contact Us</h2>
                <p className='font-hammersmith text-zinc-400'>Phone: (+088) 1966 366 745</p>
                <p className='font-hammersmith text-zinc-400'>Email: info@rakib.com</p>
                <p className='font-hammersmith text-zinc-400'>Whatsapp: @rakib_support</p>
            </section>
            <p className='pt-16 pb-10 text-zinc-400'>© 2023 Rakib Co. All rights reserved.</p>
        </footer>   
    );
};

export default Footer;