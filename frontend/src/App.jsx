// App.jsx
import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subcription"
import Logo from "./components/Logo";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from './Context/CartContext.jsx'; // Import CartProvider
import { WishlistProvider } from './Context/WishlistContext.jsx';

function App() {
    return (
        <CartProvider>
            <WishlistProvider>
                <div className="max-w-screen-2xl mx-auto">
                    <Navbar />
                    <Outlet />
                    <Logo />
                    <Subscription />
                </div>
            </WishlistProvider>
        </CartProvider>
    );
}

export default App;
