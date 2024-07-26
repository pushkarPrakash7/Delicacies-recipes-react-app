import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiClock2 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { base_url } from '../Links/links';
function FeaturedRecipe() {
    const [featuredItem, setFeaturedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedItem = async () => {
            try {
                const response = await axios.get(`${base_url}/api/all-items`);
                if (response.data && response.data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * response.data.length);
                    setFeaturedItem(response.data[randomIndex]);
                } else {
                    setError('No items found');
                }
            } catch (error) {
                setError(error.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedItem();
    }, []);

    if (loading) {
        return <div className='flex justify-center my-8'><Loader/></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='overflow-hidden flex flex-col md:flex-row justify-between items-center my-4 sm:my-20 gap-8 md:gap-12 px-4 sm:px-8 lg:px-16'>
            {featuredItem ? (
                <div className='relative flex flex-col md:flex-row w-full'>
                    <div className='w-full md:w-1/2'>
                        <img src={featuredItem.thumbnail_image} alt={featuredItem.name} className='w-full h-auto object-cover rounded-lg' />
                    </div>
                    <div className='mt-4 md:mt-0 md:ml-4 flex flex-col justify-between w-full md:w-1/2 lg:pl-8'>
                        <div className='mt-16'>
                            <p className='text-2xl lg:text-3xl font-semibold'>{featuredItem.name}</p>
                            <div className='flex gap-2 flex-wrap items-center my-4'>
                                <p className='bg-primary text-white text-center inline-block capitalize px-2 rounded-md'>{featuredItem.category}</p>
                                {featuredItem.tags.map((tag, index) => (
                                    <p key={index} className='px-2 bg-primary text-white capitalize rounded-md'>{tag}</p>
                                ))}
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiClock2 className='text-lg font-bold' />
                                <p className='text-lg'>{featuredItem.more.cook_time !== "0 minutes" ? featuredItem.more.cook_time : featuredItem.more.prep_time}</p>
                            </div>
                            <p className='mt-4'>
                                {featuredItem.description.slice(0, 300)} ...<Link to={`/items/${featuredItem._id}`} className='text-blue-500 hover:underline'>Read More</Link>
                            </p>
                        </div>
                        <Link to={`/items/${featuredItem._id}`}><button className='hover:bg-primary hover:text-white rounded-lg w-full md:w-32 h-12 border border-black hover:border-none transition ease-in duration-200 mb-12 sm:mt-4'>View Recipe</button></Link>
                        <span className='inline-block bg-primary text-white px-2 rounded-md py-0.5 absolute top-3 right-3 md:right-3 lg:top-3 lg:right-[630px]'>Featured</span>
                    </div>
                </div>
            ) : (
                <div>No featured item available</div>
            )}
        </div>
    );
}

export default FeaturedRecipe;
