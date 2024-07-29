import React from 'react'
import { IoLogoDesignernews } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaSkype } from "react-icons/fa";
function Logo() {
    return (
        <div className='bg-gray-300 py-8 h-auto'>
            <p className='text-2xl md:text-3xl font-semibold text-center mb-4'>Trusted By our Promoters and Partners!</p>
            <div className='flex gap-4 md:gap-8 justify-center items-center text-xl md:text-3xl'>
                <FaInstagram />
                <FaLinkedin />
                <FaYoutube />
                <FaTwitter />
                <FaSkype />
            </div>
        </div>
    )
}

export default Logo
