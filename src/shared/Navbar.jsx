import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between p-4'>
            <h1 className='font-hammersmith'>Rakib's Web</h1>
            <ul className='flex gap-5 font-signika focus:border-2 border-green-500'>
                <li>Home</li>
                <Link to='/about'>About</Link>
                <li>Services</li>
                <li>Resume</li>
                <li>Protfolio</li>
                <li>Testimonial</li>
                <li>Blog</li>
            </ul>
            <Link to='/contact' className='font-hammersmith'>Contact Us</Link>
        </div>
    );
};

export default Navbar;