import React from 'react';
import { FaTelegram, FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='bg-white'>
            <h2 className='font-hammersmith text-[64px] text-center py-10'>Contact</h2>
            <div className='grid grid-cols-3 gap-5'>
            <div className='flex flex-col justify-center items-center bg-[#FBFBF9] h-[320px] hover:bg-blue-500 hover:text-white rounded-xl'>
                <FaTelegram className='w-12 h-12' />
                <h2 className='py-6 font-hammersmith text-2xl'>Telegram</h2>
                <p className='font-signika text-zinc-300'>@rakib_support</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#FBFBF9] h-[320px] px-32 py-28 hover:bg-blue-500 hover:text-white rounded-xl'>
                <MdMail className='w-12 h-12' />
                <h2 className='py-[10px] font-hammersmith text-2xl'>Email</h2>
                <p className='font-signika text-zinc-300'>rakibhossen1660@gmail.com</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#FBFBF9] h-[320px] px-32 py-28 hover:bg-blue-500 hover:text-white rounded-xl'>
                <FaPhoneAlt  className='w-6 h-6' />
                <h2 className='p-[10px] font-hammersmith text-2xl'>Phone</h2>
                <p className='font-signika text-zinc-300'>+088 019 663 66 745</p>
            </div>
            </div>
        </div>
    );
};

export default Contact;