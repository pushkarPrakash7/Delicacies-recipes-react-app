import React from 'react';
import userImage1 from '../assets/user1.jpg';
import userImage2 from '../assets/user2.jpg';
import userImage3 from '../assets/user3.jpg';

function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            position: "Chef",
            review: {
                text: "This recipe is a culinary delight! The instructions were clear and easy to follow, resulting in a delicious dish. Highly recommended for anyone looking to impress with a professional-quality meal.",
                dateOfPosting: "2024-06-25"
            },
            image: userImage1
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Home Cook",
            review: {
                text: "As a home cook, I found this recipe to be fantastic. The ingredients were simple and easy to find, making this a go-to recipe for busy weeknights. Will definitely make it again!",
                dateOfPosting: "2024-06-20"
            },
            image: userImage2
        },
        {
            id: 3,
            name: "Alice Johnson",
            position: "Food Blogger",
            review: {
                text: "I tried this recipe for my blog and was thoroughly impressed. The flavors were rich and well-balanced. This is now one of my favorite recipes to share with my followers. A must-try!",
                dateOfPosting: "2024-06-22"
            },
            image: userImage3
        }
    ];

    return (
        <div className='mt-8'>
            <p className='text-center text-2xl md:text-3xl font-semibold mb-8'>Reviews from our Users!</p>
            <div className='flex flex-wrap justify-center gap-8'>
                {reviews.map((review) => (
                    <div key={review.id} className='lg:w-[400px] sm:w-[300px] mx-8 w-full h-auto shadow-2xl rounded-lg p-6 my-4 bg-white'>
                        <div className='flex items-center'>
                            <img src={review.image} alt="" className='w-16 h-16 rounded-full'></img>
                            <div className='ml-4'>
                                <p className='text-lg font-semibold'>{review.name}, {review.position}</p>
                                <p className='text-sm text-gray-500'>{review.review.dateOfPosting}</p>
                            </div>
                        </div>
                        <p className='mt-4 text-gray-700'>{review.review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
