import React from 'react'
import { useParams } from 'react-router-dom'
import categoryList from '../assets/data/CategoryData';
import {Link} from "react-router-dom"
function SelectedCategory() {
    const {category} = useParams();
     return (
        <div className='mt-28'>
            <h1 className='text-4xl text-center py-10 capitalize font-semibold sm:leading-relaxed'>{category}</h1>
            <div className='flex flex-wrap gap-8 lg:gap-12 mx-16 justify-center'>
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

export default SelectedCategory
