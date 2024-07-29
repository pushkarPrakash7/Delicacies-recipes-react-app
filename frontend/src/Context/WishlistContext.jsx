/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishlist = (item) => {
        setWishlistItems((prevItems) => {
            if (prevItems.find(wishlistItem => wishlistItem.Name === item.Name)) {
                return prevItems;
            }
            return [...prevItems, item]; 
        });
    };

    const removeFromWishlist = (id) => {
        setWishlistItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, setWishlistItems }}>
            {children}
        </WishlistContext.Provider>
    );
};
