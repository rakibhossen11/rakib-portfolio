import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between p-4'>
            <h1 className='font-hammersmith'>Rakib's Web</h1>
            <ul className='flex gap-5 font-signika focus:border-2 border-green-500'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Resume</li>
                <li>Protfolio</li>
                <li>Testimonial</li>
                <li>Blog</li>
            </ul>
            <h1 className='font-hammersmith'>Contact Us</h1>
        </div>
    );
};

export default Navbar;