import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Mark from "./Mark";
import { addFavMovie } from "../store/bookmarks-slice";
import { types } from "../store/info-slice";
import { connect, useDispatch } from "react-redux";
import Category from "./Category";
const mapStateToProps = (state) => ({
  baseURL: state.info.baseURL,
  poster: state.info.poster,
  movie: state.bookmark.favMovie,
});
const Hero = ({ baseURL, poster, movie }) => {
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
    <main className="my-4">
      <section className="sm:hidden">
        <Category
          add={addFavMovie}
          category={movie}
          type={"movie"}
          heading={"Now Playing"}
          movies={header}
        />
      </section>

      {header !== null && (
        <section className="px-8">
          <h1 className="text-center text-5xl py-4 mb-4 hidden sm:block">
            Now Playing
          </h1>
          <ul className="hidden w-full sm:flex items-center justify-center gap-4 px-10">
            <li className="hidden group xl:block hover:z-30 scale-95 relative hover:scale-105 transition-all">
              <div>
                <Link
                  to={`/info/${header[3].id}`}
                  onClick={() => dispatch(types("movie"))}
                >
                  <img
                    className="header__image"
                    src={poster + header[3].poster_path}
                    alt={header[3].title}
                  />
                </Link>
                <span
                  className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                  onClick={() => dispatch(addFavMovie(header[3]))}
                >
                  <Mark category={movie} item={header[3].id} />
                </span>
              </div>
            </li>
            <li className="group -ml-12 z-10 hover:z-30 relative hover:scale-105 transition-all">
              <Link
                to={`/info/${header[1].id}`}
                onClick={() => dispatch(types("movie"))}
              >
                <img
                  className="header__image"
                  src={poster + header[1].poster_path}
                  alt={header[1].title}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                onClick={() => dispatch(addFavMovie(header[1]))}
              >
                <Mark category={movie} item={header[1].id} />
              </span>
            </li>
            <li className="group -mx-12 z-20 relative hover:scale-105 transition-all ">
              <Link
                to={`/info/${header[0].id}`}
                onClick={() => dispatch(types("movie"))}
              >
                <img
                  className="header__image"
                  src={poster + header[0].poster_path}
                  alt={header[0].title}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                onClick={() => dispatch(addFavMovie(header[0]))}
              >
                <Mark category={movie} item={header[0].id} />
              </span>
            </li>
            <li className="group -mr-12 z-10 hover:z-30 relative hover:scale-105 transition-all">
              <Link
                to={`/info/${header[2].id}`}
                onClick={() => dispatch(types("movie"))}
              >
                <img
                  className="header__image"
                  src={poster + header[2].poster_path}
                  alt={header[2].title}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                onClick={() => dispatch(addFavMovie(header[2]))}
              >
                <Mark category={movie} item={header[2].id} />
              </span>
            </li>
            <li className="group hidden xl:block z-0 hover:z-30 scale-95 relative hover:scale-105 transition-all">
              <div>
                <Link
                  to={`/info/${header[4].id}`}
                  onClick={() => dispatch(types("movie"))}
                >
                  <img
                    className="hidden xl:block z-0 header__image"
                    src={poster + header[4].poster_path}
                    alt={header[4].title}
                  />
                </Link>
                <span
                  className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-0 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-xl p-4 "
                  onClick={() => dispatch(addFavMovie(header[4]))}
                >
                  <Mark category={movie} item={header[4].id} />
                </span>
              </div>
            </li>
          </ul>
        </section>
      )}
    </main>
  );
};

export default connect(mapStateToProps)(Hero);
