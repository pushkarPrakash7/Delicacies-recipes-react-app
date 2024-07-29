/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/CartContext.jsx';
import { FaPlus, FaMinus, FaTrash, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa6";
import Alert from '../components/Alert.jsx';

function Cart() {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleIncreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
    };

    const handleDecreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity -= 1;
        }
        setCartItems(newCartItems);
    };

    const handleRemoveItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setAlertMessage("Item removed from cart");
        setCartItems(newCartItems);
    };

    const handleCheckout = () => {
        setIsCheckoutVisible(true);
    };

    const handleCloseCheckout = () => {
        setIsCheckoutVisible(false);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.Price * item.quantity), 0);
    };

    // Separate chef's needs and recipe books
    const chefNeedsItems = cartItems.filter(item => !item.Category);
    const recipeBooks = cartItems.filter(item => item.Category);

    return (
        <div className="text-white min-h-screen mb-16 w-full relative">
            {alertMessage && <Alert className='z-50' message={alertMessage} onClose={() => setAlertMessage("")} />}
            <div className={`md:my-16 md:ml-40 ${isCheckoutVisible ? 'opacity-25' : 'opacity-100'}`}>
                {cartItems.length >0 && <h2 className="text-3xl font-bold mb-4">Cart ({cartItems.length})</h2>}
                {cartItems.length === 0 ? (
                    <div>
                    <div className='flex  items-center gap-4'>
                        <p className='text-white text-left text-4xl'>Your cart is empty!</p>
                        <FaOpencart className='text-7xl' />
                    </div>
                    <p className='text-white text-2xl'>Shop from Our store now</p>
                    </div>
                ) : (
                    <>
                        <div>
                            {chefNeedsItems.length>0 && <h3 className="text-2xl font-bold mb-2">Chef's Needs</h3>}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {chefNeedsItems.map((item, index) => {
                                    const originalIndex = cartItems.findIndex(cartItem => cartItem === item);
                                    return (
                                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-4 relative">
                                            <div className="w-full h-32">
                                                <img src={item.ImageSrc} alt={item.Name} className="w-full h-full object-cover rounded-t-lg" />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-xl font-semibold">{item.Name}</h3>
                                                <div className="flex items-center">
                                                    <button
                                                        className="text-white bg-primary rounded-full p-1"
                                                        onClick={() => handleDecreaseQuantity(originalIndex)}
                                                    >
                                                        <FaMinus />
                                                    </button>
                                                    <p className="text-gray-400 mx-2">Quantity: {item.quantity}</p>
                                                    <button
                                                        className="text-white bg-primary rounded-full p-1"
                                                        onClick={() => handleIncreaseQuantity(originalIndex)}
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                                <p className="text-gray-400">Price: ₹ {item.Price * item.quantity}</p>
                                                <button
                                                    className="absolute bottom-4 right-4 text-white bg-red-600 rounded-full p-2"
                                                    onClick={() => handleRemoveItem(originalIndex)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            {recipeBooks.length >0 && <h3 className="text-2xl font-bold mb-2">Recipe Books</h3>}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {recipeBooks.map((item, index) => {
                                    const originalIndex = cartItems.findIndex(cartItem => cartItem === item);
                                    return (
                                        <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-4 relative">
                                            <div className='flex items-center'>
                                                <div className="w-24 h-32">
                                                    <img src={item.ImageSrc} alt={item.Name} className="w-full h-full object-cover rounded-t-lg" />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-xl font-semibold">{item.Name}</h3>
                                                    <p className="text-gray-400">By {item.Author}</p>
                                                    <div className="flex items-center">
                                                        <button
                                                            className="text-white bg-primary rounded-full p-1"
                                                            onClick={() => handleDecreaseQuantity(originalIndex)}
                                                        >
                                                            <FaMinus />
                                                        </button>
                                                        <p className="text-gray-400 mx-2">Quantity: {item.quantity}</p>
                                                        <button
                                                            className="text-white bg-primary rounded-full p-1"
                                                            onClick={() => handleIncreaseQuantity(originalIndex)}
                                                        >
                                                            <FaPlus />
                                                        </button>
                                                    </div>
                                                    <p className="text-gray-400">Price: ₹ {item.Price * item.quantity}</p>
                                                    <button
                                                        className="absolute bottom-4 right-4 text-white bg-red-600 rounded-full p-2"
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
                        </div>
                    </>
                )}
                <button
                    className="absolute top-0 right-4 text-white bg-green-600 rounded-full p-2"
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>
            {isCheckoutVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-black relative">
                        <button
                            className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2"
                            onClick={handleCloseCheckout}
                        >
                            <FaTimes />
                        </button>
                        <h2 className="text-2xl mb-4">Checkout</h2>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="font-bold">Item</div>
                            <div className="font-bold">Quantity</div>
                            <div className="font-bold">Price</div>
                            {cartItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div>{item.Name}</div>
                                    <div>{item.quantity}</div>
                                    <div>₹ {item.Price * item.quantity}</div>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="mt-4">
                            <p className="text-lg">Total Price: <span className="font-bold">₹ {calculateTotalPrice()}</span></p>
                        </div>
                        <button className="mt-4 text-white bg-green-600 rounded-full w-full p-2">
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
