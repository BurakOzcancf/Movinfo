import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MainContext } from "./context";
import { BsBookmarkFill } from "react-icons/bs";
const Header = () => {
  const [header, setHeader] = useState("");
  const { baseURL, poster, addFavouriteMovie, favourites, isBookmarked } =
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
            <div className="relative group py-2 hover:scale-105 transition-all">
              <Link key={item.id} to={`/info/${item.id}`}>
                <img
                  className="header__image"
                  src={poster + item.poster_path}
                  alt={item.id}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-6 "
                onClick={() => addFavouriteMovie(item)}
              >
                <BsBookmarkFill
                  className="text-xl ml-auto"
                  style={
                    isBookmarked(item.id)
                      ? {
                          fill: "rgb(234 179 8)",
                        }
                      : { fill: "white" }
                  }
                />
              </span>
            </div>
          ))}
        </div>
      )}
      {header && (
        <ul className="hidden w-full sm:flex items-center justify-center gap-4">
          <li className="hidden group xl:block hover:z-30 scale-95 relative hover:scale-105 transition-all">
            <div>
              <Link to={`/info/${header[3].id}`}>
                <img
                  className="header__image"
                  src={poster + header[3].poster_path}
                  alt={header[3].title}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                onClick={() => addFavouriteMovie(header[3])}
              >
                <BsBookmarkFill
                  className="text-xl ml-auto "
                  style={
                    isBookmarked(header[3].id)
                      ? {
                          fill: "rgb(234 179 8)",
                        }
                      : { fill: "white" }
                  }
                />
              </span>
            </div>
          </li>
          <li className="group -ml-12 z-10 hover:z-30 relative hover:scale-105 transition-all">
            <Link to={`/info/${header[1].id}`}>
              <img
                className="header__image"
                src={poster + header[1].poster_path}
                alt={header[1].title}
              />
            </Link>
            <span
              className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
              onClick={() => addFavouriteMovie(header[1])}
            >
              <BsBookmarkFill
                className="text-xl ml-auto "
                style={
                  isBookmarked(header[1].id)
                    ? {
                        fill: "rgb(234 179 8)",
                      }
                    : { fill: "white" }
                }
              />
            </span>
          </li>
          <li className="group -mx-12 z-20 relative hover:scale-105 transition-all ">
            <Link to={`/info/${header[0].id}`}>
              <img
                className="header__image"
                src={poster + header[0].poster_path}
                alt={header[0].title}
              />
            </Link>
            <span
              className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
              onClick={() => addFavouriteMovie(header[0])}
            >
              <BsBookmarkFill
                className="text-xl ml-auto "
                style={
                  isBookmarked(header[0].id)
                    ? {
                        fill: "rgb(234 179 8)",
                      }
                    : { fill: "white" }
                }
              />
            </span>
          </li>
          <li className="group -mr-12 z-10 hover:z-30 relative hover:scale-105 transition-all">
            <Link to={`/info/${header[2].id}`}>
              <img
                className="header__image"
                src={poster + header[2].poster_path}
                alt={header[2].title}
              />
            </Link>
            <span
              className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
              onClick={() => addFavouriteMovie(header[2])}
            >
              <BsBookmarkFill
                className="text-xl ml-auto "
                style={
                  isBookmarked(header[2].id)
                    ? {
                        fill: "rgb(234 179 8)",
                      }
                    : { fill: "white" }
                }
              />
            </span>
          </li>
          <li className="group hidden xl:block z-0 hover:z-30 scale-95 relative hover:scale-105 transition-all">
            <div>
              <Link to={`/info/${header[4].id}`}>
                <img
                  className="hidden xl:block z-0 header__image"
                  src={poster + header[4].poster_path}
                  alt={header[4].title}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                onClick={() => addFavouriteMovie(header[4])}
              >
                <BsBookmarkFill
                  className="text-xl ml-auto "
                  style={
                    isBookmarked(header[4].id)
                      ? {
                          fill: "rgb(234 179 8)",
                        }
                      : { fill: "white" }
                  }
                />
              </span>
            </div>
          </li>
        </ul>
      )}
      {console.log(favourites)}
      {favourites[0] && <h2 className="text-3xl p-4">Bookmarks</h2>}
      <div className="flex items-center overflow-x-auto gap-1 p-4">
        {favourites?.map((item) => (
          <div className="relative group">
            <Link key={item.id} to={`/info/${item.id}`}>
              <img
                className="header__image"
                src={poster + item.poster_path}
                alt={item.id}
              />
            </Link>
            <span
              className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
              onClick={() => addFavouriteMovie(item)}
            >
              <BsBookmarkFill
                className="text-xl ml-auto"
                style={
                  isBookmarked(item.id)
                    ? {
                        fill: "rgb(234 179 8)",
                      }
                    : { fill: "white" }
                }
              />
            </span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
