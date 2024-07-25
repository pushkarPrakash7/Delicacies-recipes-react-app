/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import cook1Image from "../assets/cook2.jpg";

function About() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    return (
        <div className="relative flex flex-col-reverse py-16 mt-16 md:mt-0 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl md:mb-16">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        About Delcacies
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
                        Everything you 
                        <br className="hidden md:block" />
                        {' '}can imagine here{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            is delicious.
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        Welcome to Delicacies, your go-to destination for mouth-watering recipes and culinary inspiration! Our platform is dedicated to food lovers and home chefs, offering a diverse collection of recipes from around the world. Whether you're looking to try new dishes or perfect your favorite ones, Delicacies brings you easy-to-follow guides and tips. Join our community, share your own creations, and discover the joy of cooking with us!
                    </p>
                    <div className="flex items-center">
                        <a
                            href="/recipes"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-gray-300 hover:text-black focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </a>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-800 transition duration-200 rounded shadow-md bg-gray-300 hover:bg-gray-300 hover:text-black focus:shadow-outline focus:outline-none"
                        >
                            Learn more
                        </a>
                    </div>
                    <p className='text-gray-600 mt-4 text-lg'>
                    "One cannot think well, love well, sleep well, if one has not dined well." — Virginia Woolf
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
