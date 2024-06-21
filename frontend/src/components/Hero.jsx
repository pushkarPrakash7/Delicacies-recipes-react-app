import React from "react";
import BackgroundImg from "../assets/Background.png";
import "../App.css";
import { IoSearch } from "react-icons/io5";
function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={BackgroundImg}
        alt="Background"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="lg:m-0 ml-16 w-3/4 lg:w-1/2 lg:left-[45%] relative z-10 flex flex-col gap-4 items-center justify-center h-full">
        <p className="text-white text-4xl text-center p-4 rounded">
          Welcome to <span className="font-bold text-primary">Delicacies</span>,
          where every recipe is a journey through flavors, crafted to delight
          your taste buds and inspire your culinary adventures!
        </p>
        <div className="bg-white rounded-lg w-2/3 lg:w-1/2 h-10 py-1 px-2">
          <form action="/search" className="flex">
            <input placeholder="Search your favorite Recipe Here" className="px-1 w-full h-8 rounded-tl-md rounded-bl-md focus:outline-none" name="query" type="search" id="search" required="" ></input>
            <IoSearch className="text-primary w-8 h-8 p-1" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
