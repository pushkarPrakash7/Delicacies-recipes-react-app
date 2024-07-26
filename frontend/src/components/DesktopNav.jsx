/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";

function DesktopNav({ menuItems, logo }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const isSearchPage = location.pathname === "/search";

  return (
    <div className={`absolute top-0 w-full z-50 ${isHomePage || isAboutPage || isContactPage || isSearchPage ? 'bg-transparent' : 'bg-black'}`}>
      <div className="h-20 flex justify-between items-center px-6 lg:px-12">
        <a href="/">
          <img className="h-20 w-20" src={logo} alt="logo" />
        </a>
        <ul className="flex gap-7">
          {menuItems?.map((menu, index) => (
            <li key={index}>
              <Link to={menu} className="font-medium capitalize text-primary cursor-pointer">
                {menu}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4">
          <li>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Login
            </button>
          </li>
          <li>
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DesktopNav;
