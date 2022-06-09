import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBookmarks } from "../store/bookmarks-slice";
import { types } from "../store/info-slice";
import Bookmarks from "./Mark";
const Category = ({ heading, movies, type }) => {
  const dispatch = useDispatch();
  const poster = "https://www.themoviedb.org/t/p/original/";
  return (
    <div>
      <h2 className="px-4 text-center font-medium text-4xl mt-8 mb-4">
        {heading}{" "}
      </h2>
      {movies ? (
        <div className="p-4 relative items-center gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-5xl justify-center m-auto ">
          {movies.map((item) => (
            <div
              key={item.id}
              className="group relative hover:scale-105 transition-all"
            >
              <Link
                onClick={() => dispatch(types(type))}
                to={`/info/${item.id}`}
              >
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
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Category;
