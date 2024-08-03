import React, { useEffect } from "react";
import BackgroundImg from "../assets/Background.png";
import "../App.css";
import { IoSearch } from "react-icons/io5";

function Hero() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={BackgroundImg}
        alt="Background"
        className="absolute top-0 left-0 h-full md:w-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:w-1/2 md:items-end md:ml-auto md:mr-16">
        <p className="text-white text-2xl md:text-4xl text-center md:text-right md:p-4 p-2 rounded">
          Welcome to <span className="font-bold text-primary">Delicacies</span>,
          where every recipe is a journey through flavors, crafted to delight
          your taste buds and inspire your culinary adventures!
        </p>
        <div className="bg-white rounded-lg w-full max-w-md h-10 py-1 px-2 lg:mr-12">
          <form action="/search" className="flex">
            <input
              placeholder="Search your favorite Recipe Here"
              className="px-1 w-full h-8 rounded-tl-md rounded-bl-md focus:outline-none"
              name="query"
              type="search"
              id="search"
              required=""
            />
            <button type="submit" className="text-primary w-8 h-8 p-1">
              <IoSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
