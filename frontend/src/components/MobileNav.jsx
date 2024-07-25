/* eslint-disable react/prop-types */
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function MobileNav({ menuItems, logo, onClose, hideLeft, onOpen }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="absolute top-0 w-full z-20">
      <div className={`h-20 ${isHomePage || isAboutPage || isContactPage ? 'bg-transparent' : 'bg-black'} flex justify-between items-center px-4 lg:px-12`}>
        <a href="/">
          <img className="h-16 w-16 md:h-20 md:w-20" src={logo} alt="Logo" />
        </a>
        <button onClick={onOpen} className="focus:outline-none">
          <HiBars3BottomRight className="w-7 h-7 text-primary" />
        </button>
      </div>

      <div
        className={`transition-all w-full h-full fixed bg-black z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-4 top-8 md:right-8 md:top-10 focus:outline-none">
          <IoClose className="w-7 h-7 text-primary" />
        </button>
        <div className="flex flex-col items-center">
          <img className="h-16 w-16 mb-8" src={logo} alt="Logo" />
          <ul className="flex flex-col gap-6 text-center">
            {menuItems.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-primary text-lg md:text-xl"
                  onClick={onClose}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-8">
            <button className="bg-primary text-white px-6 py-2 rounded-lg">
              Login
            </button>
            <button className="bg-primary text-white px-6 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
