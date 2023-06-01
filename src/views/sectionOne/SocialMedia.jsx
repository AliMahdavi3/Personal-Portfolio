import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaTelegram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='text-3xl md:text-5xl flex justify-center gap-5 md:gap-10 text-slate-700 py-3'>
            <BsGithub className='hover:text-blue-600 text-black cursor-pointer'/>
            <FaLinkedin className='hover:text-blue-800 text-blue-800 dark:text-blue-500 cursor-pointer'/>
            <FaEnvelope className='hover:text-blue-800 text-rose-700 cursor-pointer'/>
            <FaTelegram className='hover:text-blue-700 text-blue-600 cursor-pointer'/>
            <FaTwitter className='hover:text-blue-600 text-sky-600 cursor-pointer'/>
        </div>
    )
}

export default SocialMedia