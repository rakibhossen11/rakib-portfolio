import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between p-4'>
            <h1 className='font-hammersmith'>Rakib's Web</h1>
            <ul className='flex gap-5 font-signika focus:border-2 border-green-500'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/service'>Services</Link>
                <li>Resume</li>
                <li>Protfolio</li>
                {/* <li>Testimonial</li> */}
                <li>Blog</li>
                <Link to='/contact'>Contact Us</Link>
            </ul>
            
        </div>
    );
};

export default Navbar;