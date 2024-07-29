/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react';
import { WishlistContext } from '../Context/WishlistContext.jsx';
import { FaTrash } from 'react-icons/fa';
import { PiHeartBreakBold } from "react-icons/pi";
import Alert from '../components/Alert.jsx';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../Context/CartContext.jsx';
import { FaCartShopping } from "react-icons/fa6";
function Wishlist() {
    const { wishlistItems, setWishlistItems } = useContext(WishlistContext);
    const [alertMessage, setAlertMessage] = useState("");
    const { addToCart } = useContext(CartContext);
    const chefNeedsItems = wishlistItems.filter(item => !item.Category);
    const recipeBooks = wishlistItems.filter(item => item.Category);

    const handleRemoveItem = (index) => {
        const newCartItems = wishlistItems.filter((_, i) => i !== index);
        setWishlistItems(newCartItems);
        setAlertMessage("Item removed from Wishlist");
    };

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleAddToCart = (item) => {
        addToCart(item);
        setAlertMessage("Item successfully added to cart");
        setTimeout(() => setAlertMessage(""), 3000);
    };

    return (
        <div className="text-white min-h-screen w-full mb-8">
            {alertMessage && <Alert className='z-50' message={alertMessage} onClose={() => setAlertMessage("")} />}
            <div className="md:my-16 md:ml-40">
                {wishlistItems.length > 0 && <h2 className="text-3xl font-bold mb-4">Wishlist ({wishlistItems.length})</h2>}
                {chefNeedsItems.length > 0 && (
                    <>
                        <h3 className="text-2xl font-bold mb-2">Chef's Needs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {chefNeedsItems.map((item, index) => {
                                const originalIndex = wishlistItems.findIndex(wishlistItem => wishlistItem.Name === item.Name);
                                return (
                                    <div key={originalIndex} className="bg-gray-800 rounded-lg shadow-lg p-4 relative">
                                        <div className="w-full h-32">
                                            <img src={item.ImageSrc} alt={item.Name} className="w-full h-full object-cover rounded-t-lg" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold">{item.Name}</h3>
                                            <p className="text-gray-400">Price: ₹ {item.Price}</p>
                                            <div className="flex justify-end items-center">
                                                <button
                                                    className="text-white bg-green-600 rounded-full p-2 mr-2"
                                                    onClick={() => handleAddToCart(item)}
                                                >
                                                    <FaCartShopping />
                                                </button>
                                                <button
                                                    className="text-white bg-red-600 rounded-full p-2"
                                                    onClick={() => handleRemoveItem(originalIndex)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
                {recipeBooks.length > 0 && (
                    <>
                        <h3 className="text-2xl font-bold mb-2">Recipe Books</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {recipeBooks.map((item, index) => {
                                const originalIndex = wishlistItems.findIndex(wishlistItem => wishlistItem.Name === item.Name);
                                return (
                                    <div key={originalIndex} className="bg-gray-800 rounded-lg shadow-lg p-4 relative">
                                        <div>
                                            <div className='flex'>
                                                <div className="w-24 h-32">
                                                    <img src={item.ImageSrc} alt={item.Name} className="w-full h-full object-cover rounded-md" />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-xl font-semibold">{item.Name}</h3>
                                                    <p className="text-gray-400">Price: ₹ {item.Price}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end items-center">
                                                <button
                                                    className="text-white bg-green-600 rounded-full p-2 mr-2"
                                                    onClick={() => handleAddToCart(item)}
                                                >
                                                    <FaCartShopping />
                                                </button>
                                                <button
                                                    className="text-white bg-red-600 rounded-full p-2"
                                                    onClick={() => handleRemoveItem(originalIndex)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
                {wishlistItems.length === 0 && (
                    <p className='text-white text-4xl flex items-center gap-2'>Your wishlist is empty. <span className='text-6xl'><PiHeartBreakBold /></span></p>
                )}
            </div>
        </div>
    );
}

export default Wishlist;
