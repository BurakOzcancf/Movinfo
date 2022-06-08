import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBookmarks } from "../store/bookmarks-slice";
import Bookmarks from "./Bookmarks";
const Category = ({ heading, movies }) => {
  const dispatch = useDispatch();
  const poster = "https://www.themoviedb.org/t/p/original/";
  return (
    <div>
      <h2 className="px-4 text-xl mt-4">{heading} </h2>
      {movies && (
        <div className="p-4 relative flex items-center overflow-x-scroll gap-1">
          {movies.map((item) => (
            <div
              key={item.id}
              className="group relative hover:scale-105 transition-all"
            >
              <Link to={`/info/${item.id}`}>
                <img
                  className="category__image"
                  src={poster + item.poster_path}
                  alt={item.title}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                onClick={() => dispatch(addBookmarks(item))}
              >
                <Bookmarks item={item.id} />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
