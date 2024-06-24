/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";

const Card = ({ item }) => {
    const getDifficultyColor = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'easy':
                return 'bg-green-500';
            case 'medium':
                return 'bg-yellow-500';
            case 'hard':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className='container mx-auto flex justify-center md:justify-start '>
            <div className='h-[380px] w-[300px] shadow-2xl rounded-xl relative'>
                <img className="w-[300px] h-[200px] rounded-t-xl" src={item.thumbnail_image}></img>
                <div>
                    <Link to={`/items/${item._id}`}>
                        <h1 className='text-xl  hover:text-primary hover:cursor-pointer font-semibold p-2'>{item?.name}</h1>
                    </Link>
                    <div className='flex gap-2 flex-wrap mx-2'>
                        <p className='px-2 bg-primary text-white capitalize rounded-md'>{item.category}</p>
                        {
                            item.tags.map((tag, index) => {
                                return (
                                    <p key={index} className='px-2 bg-primary text-white capitalize rounded-md'>{tag}</p>
                                )
                            })
                        }
                    </div>
                    <div className='flex gap-2 mt-4 items-center mx-2'>
                        <CiClock2 className='font-bold text-xl' />
                        <p >{item.more.cook_time!=="0 minutes"?item.more.cook_time:item.more.prep_time}</p>
                    </div>
                    <div className={`inline-block absolute top-1 right-1 text-center gap-2 mt-2 items-center mx-2 px-2 rounded-md ${getDifficultyColor(item.more.difficulty)}`}>
                        <p className='text-white capitalize'>{item.more.difficulty}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;