/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import categoryList from '../assets/data/CategoryData.js';
import {Link} from "react-router-dom";
function Category() {
    return (
        <div className='m-16'>
            <h1 className='text-4xl text-center font-semibold'>What's on your mind Today?</h1>
            <div className='flex flex-wrap gap-8  lg:gap-12 lg:mx-16 my-16 justify-center'>
                {
                    categoryList.map((category, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center'>
                                <img src={category.image} alt={category.name} className='w-20 h-20 rounded-full' />
                                <Link className='hover:text-primary' to={category.href}><h1 className='text-xl text-center font-semibold '>{category.name}</h1></Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category
