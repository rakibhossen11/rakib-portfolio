import React from 'react';

const Footer = () => {
    return (
        <footer className='grid grid-cols-3 items-center justify-center mt-10 bg-slate-200 p-5'>
            <section className='font-hammersmith text-3xl'>Rakib's web</section>
            <section>
                <h3 className='font-signika text-xl'>Feature Technology</h3>
                <p className='font-hammersmith'>HTML</p>
                <p className='font-hammersmith'>CSS</p>
                <p className='font-hammersmith'>Javascript</p>
                <p className='font-hammersmith'>React Js</p>
            </section>
            <section>
                <h2 className='font-signika text-xl'>Supports Technology</h2>
                <p className='font-hammersmith'>Tailwind Css</p>
                <p className='font-hammersmith'>Bootstrap</p>
                <p className='font-hammersmith'>Daisy Ui</p>
                <p className='font-hammersmith'>React Roter Dom</p>
                <p className='font-hammersmith'>React Component Library</p>
            </section>
        </footer>   
    );
};

export default Footer;