import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";
import { RiBarChart2Fill } from "react-icons/ri";
import { BsBookmarkFill } from "react-icons/bs";
import { BsCameraReelsFill } from "react-icons/bs";
import { BsFillDisplayFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-2 border-b-2 bg-gray-800 border-gray-50 flex items-center justify-between">
      <Link to={"/"} className="mx-8">
        <h1 className="text-4xl m-auto font-bold text-yellow-500">Movinfos</h1>
      </Link>
      <HiMenuAlt3
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl z-50 ml-auto md:hidden text-yellow-500"
      />
      <nav
        onClick={() => setIsOpen(false)}
        className={isOpen ? "grid" : "hidden md:grid"}
      >
        <ul className="fixed z-40 p-40 md:px-4 gap-2 md:relative md:bg-transparent md:h-auto md:flex md:p-0 w-full bg-black bg-opacity-80 h-full top-0 left-0 grid justify-center items-center">
          <li className="md:hidden">
            <Link
              onClick={() => setIsOpen(false)}
              className="group md:flex-row-reverse flex items-center text-white hover:text-yellow-500"
              to={"/"}
            >
              <span className="w-11/12 text-2xl md:text-base">Home</span>
              <AiFillFire className=" fill-white group-hover:fill-yellow-500 transition-all text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="group md:flex-row-reverse flex items-center text-white hover:text-yellow-500"
              to={"/trends"}
            >
              <span className="w-11/12 text-2xl md:text-base">Trends</span>
              <AiFillFire className=" fill-white group-hover:fill-yellow-500 transition-all text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="group md:flex-row-reverse flex items-center text-white hover:text-yellow-500"
              to={"/top_rated"}
            >
              <span className="w-11/12 text-2xl md:text-base">Top Rated</span>
              <RiBarChart2Fill className=" fill-white group-hover:fill-yellow-500 transition-all text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="group md:flex-row-reverse flex items-center text-white hover:text-yellow-500"
              to={"/movie"}
            >
              <span className="w-11/12 text-2xl md:text-base ">Movies</span>
              <BsCameraReelsFill className=" fill-white group-hover:fill-yellow-500 transition-all text-xl" />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="group md:flex-row-reverse flex items-center text-white hover:text-yellow-500"
              to={"/tv"}
            >
              <span className="w-11/12 text-2xl md:text-base">Series</span>
              <BsFillDisplayFill className=" fill-white group-hover:fill-yellow-500 transition-all text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="group md:flex-row-reverse flex items-center text-white hover:text-yellow-500"
              to={"/bookmarks"}
            >
              <span className="w-11/12 text-2xl md:text-base">Bookmarks</span>
              <BsBookmarkFill className=" fill-white group-hover:fill-yellow-500 transition-all text-xl" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
