import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MainContext } from "./context";

const Header = () => {
  const [header, setHeader] = useState("");
  const { baseURL, poster, addFavouriteMovie, favourites } =
    useContext(MainContext);

  useEffect(() => {
    axios
      .get(
        `${baseURL}/movie/now_playing?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setHeader(response.data.results);
      });
  }, [baseURL]);

  return (
    <header className="my-4">
      <h2 className="p-4 text-3xl lg:mb-2 lg:text-center">Now Playing</h2>
      {header && (
        <div className="p-4 flex items-center overflow-x-scroll gap-1 sm:hidden ">
          {header.map((item) => (
            <div className="relative py-2 hover:scale-105 transition-all">
              <Link key={item.id} to={`/info/${item.id}`}>
                <img
                  className="header__image"
                  src={poster + item.poster_path}
                  alt={item.id}
                />
              </Link>
              <div
                className="absolute bottom-4 right-4 bg-black bg-opacity-60 p-2 rounded-md"
                onClick={() => addFavouriteMovie(item)}
              >
                Bookmark
              </div>
            </div>
          ))}
        </div>
      )}
      {header && (
        <ul className="hidden w-full sm:flex items-center justify-center gap-4">
          <li className="hidden xl:block hover:z-30 scale-95 relative py-2 hover:scale-105 transition-all">
            <div>
              <Link to={`/info/${header[3].id}`}>
                <img
                  className="header__image"
                  src={poster + header[3].poster_path}
                  alt={header[3].title}
                />
              </Link>
              <span
                className="absolute bottom-4 right-4 bg-black bg-opacity-60 p-2 rounded-md"
                onClick={() => addFavouriteMovie(header[3])}
              >
                Bookmark
              </span>
            </div>
          </li>
          <li className="-ml-12 z-20 hover:z-30 relative py-2 hover:scale-105 transition-all">
            <Link to={`/info/${header[1].id}`}>
              <img
                className="header__image"
                src={poster + header[1].poster_path}
                alt={header[1].title}
              />
            </Link>
            <span
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 p-2 rounded-md"
              onClick={() => addFavouriteMovie(header[1])}
            >
              Bookmark
            </span>
          </li>
          <li className="-mx-12 z-20 relative py-2 hover:scale-105 transition-all">
            <Link to={`/info/${header[0].id}`}>
              <img
                className="scale-105 header__image"
                src={poster + header[0].poster_path}
                alt={header[0].title}
              />
            </Link>
            <span
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 p-2 rounded-md"
              onClick={() => addFavouriteMovie(header[0])}
            >
              Bookmark
            </span>
          </li>
          <li className="-mr-12 z-10 hover:z-30 relative py-2 hover:scale-105 transition-all">
            <Link to={`/info/${header[2].id}`}>
              <img
                className="header__image"
                src={poster + header[2].poster_path}
                alt={header[2].title}
              />
            </Link>
            <span
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 p-2 rounded-md"
              onClick={() => addFavouriteMovie(header[2])}
            >
              Bookmark
            </span>
          </li>
          <li className="hidden xl:block z-0 hover:z-30 scale-95 relative py-2 hover:scale-105 transition-all">
            <div>
              <Link to={`/info/${header[4].id}`}>
                <img
                  className="hidden xl:block z-0 header__image"
                  src={poster + header[4].poster_path}
                  alt={header[4].title}
                />
              </Link>
              <span
                className="absolute bottom-4 right-4 bg-black bg-opacity-60 p-2 rounded-md"
                onClick={() => addFavouriteMovie(header[4])}
              >
                Bookmark
              </span>
            </div>
          </li>
        </ul>
      )}
      {console.log(favourites)}
      {favourites[0] && <h2 className="text-3xl p-4">Bookmarks</h2>}
      <div className="flex items-center overflow-x-scroll gap-1 p-4">
        {favourites?.map((item) => (
          <div className="relative">
            <Link key={item.id} to={`/info/${item.id}`}>
              <img
                className="header__image"
                src={poster + item.poster_path}
                alt={item.id}
              />
            </Link>
            <span
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 p-2 rounded-md"
              onClick={() => addFavouriteMovie(item)}
            >
              Bookmark
            </span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
