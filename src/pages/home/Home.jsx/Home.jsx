import React from 'react';
import Banner from '../homecomponent/Banner';
import Aboutme from '../homecomponent/Aboutme';
import Services from '../homecomponent/Services';
import Service from '../../service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutme></Aboutme>
            <Services></Services>
            {/* <Service></Service> */}
        </div>
    );
};

export default Home;