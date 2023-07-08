import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(date => setServices(date))
    },[])
    return (
        <div >
            <p className='font-signika text-center mt-10'>My Service</p>
            <h1 className='font-signika text-3xl text-center'>SERVICES I OFFER</h1>
            <div className='grid grid-cols-4 gap-3 mt-8'>
                {
                    services.map(service => 
                    <div className='p-10 shadow-xl border-2 rounded-md border-slate-300 transform transition duration-500 hover:scale-105' key={service.id}>
                        <img src={service.image} alt="" />
                        <h2 className='font-signika text-2xl '>{service.title}</h2>
                        <p className='font-thin'>{service.details}</p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Services;