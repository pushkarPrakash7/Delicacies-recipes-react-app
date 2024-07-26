import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card.jsx';
import { Link } from 'react-router-dom';
import Loader from './Loader.jsx';
import { base_url } from '../Links/links.js';

function FeaturedRecipe() {
    const [ItemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItemList = async () => {
            try {
                const response = await axios.get(`${base_url}/api/all-items`);
                if (response.data && response.data.length > 0) {
                    setItemList(response.data.slice(0, 4)); // Corrected slicing
                } else {
                    setError('No items found');
                }
            } catch (error) {
                setError(error.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchItemList();
    }, []);

    if (loading) {
        return <div className='flex justify-center my-8'><Loader /></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='md:ml-4'>
            <p className='text-3xl w-full font-bold underline lg:ml-8 text-center md:text-left'>Latest Recipes</p>
            <div className="container lg:mx-4 px-4 py-8">
                {ItemList.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ItemList.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                ) : (
                    <div>No featured item available</div>
                )}
            </div>
            <div className='flex justify-center mt-4'>
            <Link to="/recipes">
                <button className='text-primary font-semibold hover:bg-primary hover:text-white rounded-lg md:w-44 h-12 border-primary border-2 hover:border-none transition ease-in duration-200 mb-12 mx-4 px-2'>View All Recipes</button>
            </Link>
            </div>
        </div>
    );
}

export default FeaturedRecipe;
