import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/rakib_web_logo.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 h-[110px] border-b-[2px] border-b-[#5D6D7E]'>
            {/* <h1 className='font-hammersmith'>Rakib's Web</h1> */}
            <Link to='/' className='h-32 w-32 flex items-center'><img src={logo} alt="" /></Link>
            <ul className='flex gap-5 font-signika mr-[100px]'>
                <NavLink to='/'>Home</NavLink>
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