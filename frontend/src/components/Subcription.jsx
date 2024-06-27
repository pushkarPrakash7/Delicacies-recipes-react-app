import React from 'react';
import Footer from './Footer';

function Subscription() {
    return (
        <div className='bg-gray-300 text-center'>
            <div className='flex flex-col md:flex-row items-center justify-center py-12 px-6 bg-white mx-6 md:mx-16 w-auto'>
            <div className='md:w-2/3 w-full'>
                <h2 className='text-2xl md:text-3xl font-bold text-primary mb-2'>Subscribe to our newsletter.</h2>
                <p className='text-gray-600 mb-4 lg:px-24'>Become a VIP Member by subscribing to our newsletter and get access to exclusive recipes curated by top rated chef.</p>
            </div>
            <div className='px-4 mr-0 md:w-1/3 flex lg:mr-24'>
                <input
                    type='email'
                    name='email'
                    id='email-address'
                    autoComplete='email'
                    required
                    placeholder='Enter your email'
                    className='flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none'
                />
                <button type='submit' className='bg-primary bg-ambe text-white p-2 rounded-r-lg hover:bg-gray-700 '>
                    Subscribe
                </button>
            </div>
        </div>
        <hr className='mx-16'/>
        <div className='lg:mx-16 mx-6'>
            <Footer />
        </div>
        </div>
    );
}

export default Subscription;
