/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext } from 'react';
import { PiChefHat } from "react-icons/pi";
import { IoIosHeart } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import ChefChoice from '../Resources/ChefChoice';
import RecipeBooks from '../Resources/RecipeBooks';
import Wishlist from '../Resources/Wishlist';
import Cart from '../Resources/Cart';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Recipes from './Recipes';
import { CartContext } from '../Context/CartContext.jsx'; 

function Resources() {
    const [activeComponent, setActiveComponent] = useState('ChefChoice');
    const [hoveredButton, setHoveredButton] = useState(null);
    const { cartItems } = useContext(CartContext); 

    const renderComponent = () => {
        switch (activeComponent) {
            case 'ChefChoice':
                return <ChefChoice />;
            case 'RecipeBooks':
                return <RecipeBooks />;
            case 'Wishlist':
                return <Wishlist />;
            case 'Cart':
                return <Cart />;
            default:
                return <ChefChoice />;
        }
    };

    return (
        <div className='flex flex-col md:flex-row bg-black mt-20'>
            <div className='md:w-30 p-4'>
                <div className='bg-primary md:fixed md:p-4 pt-3 md:mt-24 mt-4 md:ml-8 rounded-full flex flex-row md:flex-col items-center justify-around md:justify-start'>
                    <button
                        className={`block text-3xl mb-4 rounded relative ${activeComponent === 'ChefChoice' ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setActiveComponent('ChefChoice')}
                        onMouseEnter={() => setHoveredButton('ChefChoice')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        <PiChefHat />
                        {hoveredButton === 'ChefChoice' && (
                            <span className='absolute left-full ml-2 px-2 py-1 text-sm bg-gray-700 text-white rounded md:top-0 md:left-full md:ml-2'>
                                Chef's Choice
                            </span>
                        )}
                    </button>
                    <button
                        className={`block text-3xl mb-4 rounded relative ${activeComponent === 'RecipeBooks' ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setActiveComponent('RecipeBooks')}
                        onMouseEnter={() => setHoveredButton('RecipeBooks')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        <IoBookSharp />
                        {hoveredButton === 'RecipeBooks' && (
                            <span className='absolute left-full ml-2 px-2 py-1 text-sm bg-gray-700 text-white rounded md:top-0 md:left-full md:ml-2'>
                                Recipe Books
                            </span>
                        )}
                    </button>
                    <button
                        className={`block text-3xl mb-4 rounded relative ${activeComponent === 'Wishlist' ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setActiveComponent('Wishlist')}
                        onMouseEnter={() => setHoveredButton('Wishlist')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        <IoIosHeart />
                        {hoveredButton === 'Wishlist' && (
                            <span className='absolute left-full ml-2 px-2 py-1 text-sm bg-gray-700 text-white rounded md:top-0 md:left-full md:ml-2'>
                                Wishlist
                            </span>
                        )}
                    </button>
                    <button
                        className={`block text-3xl mb-4 rounded relative ${activeComponent === 'Cart' ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setActiveComponent('Cart')}
                        onMouseEnter={() => setHoveredButton('Cart')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        <FaShoppingCart />
                        {cartItems.length > 0 && (
                            <span className="absolute top-0 left-6 bg-gray-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        )}
                        {hoveredButton === 'Cart' && (
                            <span className='absolute left-full ml-2 px-2 py-1 text-sm bg-gray-700 text-white rounded md:top-0 md:left-full md:ml-2'>
                                Cart
                            </span>
                        )}
                    </button>
                </div>
            </div>
            <div className='w-full px-4 md:px-16 '>
                {renderComponent()}
            </div>
        </div>
    );
}

export default Resources;
