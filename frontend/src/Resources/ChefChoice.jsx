/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import resourcesList from './ChefData.js';
import { IoBagCheck } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import Star from './Star.jsx';

function ChefChoice() {
    return (
        <div className="md:m-16">
            <h2 className="text-2xl text-center md:text-left md:mt-16 mt-4 md:text-3xl font-bold mb-4 text-white">Every Home Baker and Chef's Needs.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {resourcesList.map((item, index) => (
                    <div key={index} className="w-full h-auto flex gap-8 items-center shadow-lg rounded-lg overflow-hidden bg-white">
                        <div className="w-24 h-24 ml-4">
                            <img src={item.ImageSrc} alt={item.Name} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-between">
                            <h3 className="text-xl font-bold text-gray-600">{item.Name}</h3>
                            <h3 className="text-md text-black">₹ {item.Price}</h3>
                            <p className="text-gray-600">{item.Description}</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-yellow-500 flex items-center gap-2"><Star star={item.Rating} /> <span className='text-black mt-1'>({item.Rating})</span></span>
                            </div>
                            <div className='flex gap-2 text-white mt-2 items-center'>
                                <button className='bg-primary hover:bg-gray-700 w-full rounded-md py-1 px-2 flex justify-center items-center gap-1 group'>
                                    <IoBagCheck className='group-hover:hidden' />
                                    <span className='hidden group-hover:inline'>Add to Cart</span>
                                </button>
                                <button className='bg-primary hover:bg-gray-700 w-full rounded-md py-1 px-2 flex justify-center items-center gap-1 group'>
                                    <MdFavoriteBorder className='group-hover:hidden' />
                                    <span className='hidden group-hover:inline '>Wishlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChefChoice;
