import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';
function Recipes() {
    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/all-items')
                setItems(response.data)
            }
            catch (error) {
                console.error(error)
            }
        };
        fetchItems();
    }, [])
    console.log(items);
    return (
        <div className='py-24 w-full md:pt-32 md:px-48 bg-black pb-16'>
            <h1 className='text-4xl font-bold text-center text-white mb-8'>Discover Our Recipes</h1>
            <div className='flex justify-center flex-wrap gap-8'>
                {
                    items.map((item) => (
                        <div key={item._id} className='my-4 mx-8 shadow-lg shadow-white rounded-xl'>
                            <Card item={item} ></Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Recipes
