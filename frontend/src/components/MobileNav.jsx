/* eslint-disable react/prop-types */
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function MobileNav({ menuItems, logo, onClose, hideLeft, onOpen }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="absolute top-0 w-full z-20">
      <div className={`h-20 ${isHomePage ? 'bg-transparent' : 'bg-black'} flex justify-between items-center px-6 lg:px-12`}>
        <a href="/">
          <img className="h-20 w-20" src={logo} alt="Logo" />
        </a>
        <button onClick={onOpen}>
          <HiBars3BottomRight className="w-7 h-7 text-primary" />
        </button>
      </div>

      <div
        className={`transition-all w-full h-full fixed bg-black z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-8 top-10">
          <IoClose className="w-7 h-7 text-primary" />
        </button>
        <div className="mr-52">
          <img className="h-20 w-20 relative bottom-28" src={logo} alt="Logo" />
          <ul className="flex flex-col gap-4">
            {menuItems.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-primary text-xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 my-8">
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Login
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
