import React from 'react';
import Banner from '../homecomponent/Banner';
import Aboutme from '../homecomponent/Aboutme';
import Services from '../homecomponent/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutme></Aboutme>
            <Services></Services>
        </div>
    );
};

export default Home;