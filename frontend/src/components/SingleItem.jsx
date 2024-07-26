import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
function SingleItem() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    const convertToMinutes = (time) => {
        return parseInt(time, 10);
    };

    const parseInstructions = (instructions) => {
        return instructions.split(/\d+\./).filter(Boolean).map(step => step.trim());
    };

    const items = useLoaderData();
    const { prep_time, cook_time } = items.more;
    const total_time = convertToMinutes(prep_time) + convertToMinutes(cook_time);

    const parsedInstructions = parseInstructions(items.instructions);

    return (
        <section className='min-h-screen md:flex justify-center items-center bg-black mt-20'>
            <article>
                <div className='bg-black pb-16 rounded-lg'>
                    <picture className='bg-white'>
                        <img className='px-4 md:px-48 md:pt-8' src={items.thumbnail_image} alt="" />
                    </picture>
                    <div className='mx-4 md:mx-48 bg-white py-4 px-4 rounded-b-lg'>
                        <p className='text-primary font-semibold text-3xl'>{items.name}</p>
                        <div className='flex my-2 gap-2 flex-wrap'>
                            <span className='bg-primary rounded-lg py-1 px-2 inline-block text-white capitalize'>{items.category}</span>
                            {items.tags.map((tag, index) => (
                                <span key={index} className='bg-primary rounded-lg py-1 px-2 inline-block text-white capitalize'>{tag}</span>
                            ))}
                        </div>
                        <p>{items.description}</p>
                        <article className='bg-gray-300 rounded-lg p-2 my-2'>
                            <div className='flex items-center mb-2 gap-2'>
                                <CiClock2 className='text-lg font-bold' />
                                <h2 className='text-lg font-semibold'>Preparation time</h2>
                            </div>
                            <ul className='list-disc px-5'>
                                <li>Total Time - {total_time} minutes</li>
                                <li>Prep Time - {items.more.prep_time}</li>
                                <li>Cooking Time - {items.more.cook_time}</li>
                            </ul>
                        </article>
                        <article className='my-4 mx-6'>
                            <h1 className='text-xl font-semibold'>Ingredients</h1>
                            <ul className='list-disc'>
                                {items.ingredients.map((item) => (
                                    <li key={item._id}>{item.name} - {item.quantity}</li>
                                ))}
                            </ul>
                        </article>
                        <article className='py-4 px-6 rounded-lg bg-gray-300'>
                            <h1 className='text-xl font-semibold'>Instructions</h1>
                            <ol className='list-decimal'>
                                {parsedInstructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ol>
                        </article>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default SingleItem;
