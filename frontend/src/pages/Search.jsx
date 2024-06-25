import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import Shimmer from '../components/Shimmer';
function Search() {
    const { searchText } = useParams();
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParams = params.get('query');
        if (queryParams) {
            setQuery(queryParams);
        }
    }, []);

    const fetchItems = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:5000/api/items/search?query=${query}`);
            setResult(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error.message || 'Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    const handleSearchClick = () => {
        fetchItems();
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="my-24 h-screen lg:mx-16 sm:mx-8">
            <h1 className='text-center text-secondary text-4xl font-semibold py-5'>Search</h1>
            <div className='flex justify-center'>
                <input 
                    placeholder="Search your favorite Recipe Here" 
                    className="bg-[#f5f5f5] w-96 px-2 h-10 rounded-tl-md rounded-bl-md focus:outline-none" 
                    name="query" 
                    type="search" 
                    id="search" 
                    value={query}
                    onChange={handleInputChange}
                    required 
                />
                <button 
                    className="text-white bg-primary w-10 h-10 p-2 rounded-r-md flex items-center justify-center" 
                    onClick={handleSearchClick}
                >
                    <IoSearch />
                </button>
            </div>

            <ul className='lg:ml-32 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {loading && <Shimmer/>}
                {error && <p>{error}</p>}
                {
                    result && result.map(item => (
                        <Card item={item} key={item._id} />
                    ))
                }
            </ul>
        </div>
    );
}

export default Search;
