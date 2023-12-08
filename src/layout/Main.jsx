import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
            <Footer />
        </div>
    );
};

export default Main;