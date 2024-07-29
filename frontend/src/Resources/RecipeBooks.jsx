import React, { useContext, useState } from 'react';
import { BookCover } from 'book-cover-3d';
import BookList from './Data/BookData';
import Star from './Star';
import { IoClose } from "react-icons/io5";
import { CartContext } from '../Context/CartContext';
import Alert from '../components/Alert';
import { WishlistContext } from '../Context/WishlistContext';

function RecipeBooks() {
    const [selectedBook, setSelectedBook] = useState(null);
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);
    const [alertMessage, setAlertMessage] = useState("");

    const openModal = (book) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    const handleAddToCart = (item) => {
        addToCart(item);
        setAlertMessage("Item successfully added to cart");
        setTimeout(() => setAlertMessage(""), 3000);
    };
    
    const handleAddToWishlist = (item) => {
        addToWishlist(item);
        setAlertMessage("Item successfully added to wishlist");
        setTimeout(() => setAlertMessage(""), 3000);
    };

    return (
        <div className='md:py-16 md:ml-52 pl-4'>
            {alertMessage && <Alert className='z-50' message={alertMessage} onClose={() => setAlertMessage("")} />}
            <h1 className='text-3xl font-bold text-white'>Explore A wide Range of Cookbooks and Recipe Journals</h1>
            <div className='mt-4 flex gap-16 flex-wrap'>
                {BookList.map((book, index) => (
                    <div key={index} className='relative md:my-12 my-4 group w-60 flex items-center flex-col gap-6'>
                        <BookCover>
                            <img src={book.ImageSrc} alt={book.Name} className='w-full' />
                        </BookCover>
                        <button
                            className='mt-2 py-2 px-4 bg-primary text-white rounded hover:bg-slate-400 transition duration-300'
                            onClick={() => openModal(book)}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {selectedBook && (
                <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20 p-4 md:p-0'>
                    <div className='bg-white p-8 rounded shadow-lg md:w-[500px]  w-screen relative'>
                        <button
                            className='absolute text-xl top-2 right-2 bg-primary text-white rounded-md'
                            onClick={closeModal}
                        >
                            <IoClose />
                        </button>
                        <div>
                            <h2 className='text-4xl font-bold mb-4'>{selectedBook.Name}</h2>
                            <p>By <span className='underline font-semibold text-lg'>{selectedBook.Author}</span></p>
                            <p className='text-xl'><strong>₹{selectedBook.Price}</strong></p>
                            <p>{selectedBook.Description}</p>
                            <div><span className="text-yellow-500 flex items-center gap-2"><Star star={selectedBook.Rating} /> <span className='text-black mt-1'>({selectedBook.Rating})</span></span></div>
                            <p className='bg-primary inline-block text-white px-2 my-2 rounded-md'> {selectedBook.Category}</p>
                            <p><strong>Publisher:</strong> {selectedBook.Publisher}</p>
                            <p><strong>Language:</strong> {selectedBook.Language}</p>
                            <div className='flex gap-2 mt-4'>
                                <button className='w-full text-white rounded-md py-1 bg-primary hover:bg-gray-400 transition duration-300' onClick={()=>handleAddToCart(selectedBook)}>Add to Cart</button>
                                <button className='w-full text-white rounded-md py-1 bg-primary hover:bg-gray-400 transition duration-300' onClick={()=>handleAddToWishlist(selectedBook)}>Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecipeBooks;
