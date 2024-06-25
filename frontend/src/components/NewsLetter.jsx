import React from 'react'
import Loader from './Loader'

function NewsLetter() {
    return (
        <div className='text-center w-full h-auto bg-gray-300'>
            <div className='mt-8'>
                <h1 className='text-4xl font-semibold text-primary pt-10'>Sign up for my weekly Newsletter!</h1>
                <p className='text-xl lg:px-72 md:mt-8 mt-4'>Weekly emails with my latest recipes, cooking tips and tricks and product recommendations! You will be set up in minutes</p>
                <div className='flex flex-col md:flex-row justify-center my-4 gap-2'>
                    <input placeholder='Name' className='h-10 focus:outline-none md:w-[250px] px-2 mx-8 lg:mx-0'></input>
                    <input placeholder='Email Address' className='h-10 focus:outline-none md:w-[350px] px-2 lg:mx-0'></input>
                    <button className='bg-primary text-white hover:font-bold transition ease-in duration-200 mx-8 lg:mx-0 h-10 py-1 px-2 mb-8'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
