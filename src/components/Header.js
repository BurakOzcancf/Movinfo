import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import { addBookmarks } from "../store/bookmarks-slice";
import { connect, useDispatch } from "react-redux";
const mapStateToProps = (state) => ({
  baseURL: state.info.baseURL,
  poster: state.info.poster,
  bookmarks: state.bookmark.bookmarks,
});
const Header = ({ baseURL, poster, bookmarks }) => {
  const [header, setHeader] = useState(null);
  const dispatch = useDispatch();

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
      {header !== null && (
        <div className="p-4 flex items-center overflow-x-scroll gap-1 sm:hidden ">
          {header.map((item) => (
            <div
              key={item.id}
              className="relative group py-2 hover:scale-105 transition-all"
            >
              <Link to={`/info/${item.id}`}>
                <img
                  className="header__image"
                  src={poster + item.poster_path}
                  alt={item.id}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-6 "
                onClick={() => {
                  dispatch(addBookmarks(item));
                }}
              >
                <Bookmarks item={item.id} />
              </span>
            </div>
          ))}
        </div>
      )}
      {header !== null && (
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
                onClick={() => dispatch(addBookmarks(header[3]))}
              >
                <Bookmarks item={header[3].id} />
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
              onClick={() => dispatch(addBookmarks(header[1]))}
            >
              <Bookmarks item={header[1].id} />
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
              onClick={() => dispatch(addBookmarks(header[0]))}
            >
              <Bookmarks item={header[0].id} />
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
              onClick={() => dispatch(addBookmarks(header[2]))}
            >
              <Bookmarks item={header[2].id} />
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
                onClick={() => dispatch(addBookmarks(header[4]))}
              >
                <Bookmarks item={header[4].id} />
              </span>
            </div>
          </li>
        </ul>
      )}
      {bookmarks[0] && <h2 className="text-3xl p-4">Bookmarks</h2>}
      <div className="flex items-center overflow-x-auto gap-1 p-4">
        {bookmarks?.map((item) => (
          <div key={item.id} className="relative group">
            <Link to={`/info/${item.id}`}>
              <img
                className="header__image"
                src={poster + item.poster_path}
                alt={item.id}
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
    </header>
  );
};

export default connect(mapStateToProps)(Header);
