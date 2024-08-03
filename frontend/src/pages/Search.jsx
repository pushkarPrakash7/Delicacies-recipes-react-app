import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import Shimmer from '../components/Shimmer';
import { base_url } from '../Links/links';

function Search() {
    const { searchText } = useParams();
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        console.log(params);
        const queryParams = params.get('query');
        if (queryParams) {
            setQuery(queryParams);
        }
    }, []);

    useEffect(() => {
        const fetchAllRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${base_url}/api/all-items`);
                setAllRecipes(response.data);
                setResult(response.data); 
            } catch (error) {
                setError(error.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchAllRecipes();
    }, []);
    console.log(allRecipes);

    const fetchItems = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${base_url}/api/items/search?query=${query}`);
            setResult(response.data);
        } catch (error) {
            setError(error.message || 'Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    const handleSearchClick = () => {
        if (query) {
            fetchItems();
        } else {
            setResult(allRecipes); 
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="my-16 md:my-24 max-h-full pb-8 lg:mx-16 sm:mx-8 bg-gray-300 md:rounded-2xl">
            <h1 className='text-center text-primary text-4xl font-semibold py-8'>Search For your Recipe here</h1>
            <div className='flex justify-center'>
                <input 
                    placeholder="Search your favorite Recipe Here" 
                    className="bg-[#f5f5f5] md:w-96 px-2 h-10 rounded-tl-md rounded-bl-md focus:outline-none" 
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

            <ul className='md:mx-16 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {loading && <Shimmer />}
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
