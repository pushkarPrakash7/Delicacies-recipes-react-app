import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import categoryList from '../assets/data/CategoryData';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import Shimmer from '../components/Shimmer';
import { IoSearch } from 'react-icons/io5';

function SelectedCategory() {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async () => {
            setLoading(true);

            try {
                const response = await axios.get(`http://localhost:5000/api/categories/${category}`);
                setItems(response.data);
                setError(null); // Clear any previous errors
            } catch (error) {
                setError(error.message || "Error loading category");
            } finally {
                setLoading(false); // Ensure loading is stopped after request
            }
        };

        fetchCategoryData();
    }, [category]);

    return (
        <div className='mt-16'>
            <h1 className='text-4xl text-center py-10 capitalize font-semibold sm:leading-relaxed'>{category}</h1>
            <div className='flex flex-wrap gap-8 lg:gap-12 mx-16 justify-center'>
                {
                    categoryList.map((category, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <img src={category.image} alt={category.name} className='w-20 h-20 rounded-full' />
                            <Link className='hover:text-primary' to={category.href}>
                                <h1 className='text-xl text-center font-semibold '>{category.name}</h1>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center items-center mt-8">
                <div className="bg-white rounded-lg w-1/2 lg:w-1/3 h-10 py-1 px-2">
                    <form action="/search" className="flex">
                        <input 
                            placeholder="Search your favorite Recipe Here" 
                            className="px-2 w-full h-10 rounded-tl-md rounded-bl-md focus:outline-none bg-gray-300" 
                            name="query" 
                            type="search" 
                            id="search" 
                            required 
                        />
                        <IoSearch className="text-white bg-primary rounded-r-md w-10 h-10 p-2" />
                    </form>
                </div>
            </div>
            <div>
                {loading && <Shimmer />}
                {error && <p>{error}</p>}
                <ul className='lg:ml-48 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {
                        items && items.map(item => (
                            <Card item={item} key={item._id} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default SelectedCategory;
