import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { addBookmarks } from "../store/bookmarks-slice";
import { connect, useDispatch } from "react-redux";
import Bookmarks from "./Bookmarks";
import Category from "./Category";
const mapStateToProps = (state) => ({
  baseURL: state.info.baseURL,
  poster: state.info.poster,
});
const Categories = ({ baseURL, poster }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [topRated, setTopRated] = useState("");
  const [popular, setPopular] = useState("");
  const [cult, setCult] = useState("");
  const [acFi, setAcFİ] = useState("");
  const [someMovies, setSomeMovies] = useState("");
  const [comedy, setComedy] = useState("");
  const [animation, setAnimation] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (query) {
      axios
        .get(
          `${baseURL}/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${query}&page=1&include_adult=false`
        )
        .then((response) => {
          setSearch(response.data.results);
        });
    }

    axios
      .get(
        `${baseURL}/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setTopRated(response.data.results);
      });
    axios
      .get(
        `${baseURL}/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setPopular(response.data.results);
      });
    axios
      .get(
        `${baseURL}/movie/278/recommendations?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setCult(response.data.results);
      });
    axios
      .get(
        `${baseURL}/movie/155/recommendations?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setAcFİ(response.data.results);
      });
    axios
      .get(
        `${baseURL}/movie/389/recommendations?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setSomeMovies(response.data.results);
      });
    axios
      .get(
        `${baseURL}/movie/72105/recommendations?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setComedy(response.data.results);
      });
    axios
      .get(
        `${baseURL}/movie/14160/recommendations?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setAnimation(response.data.results);
      });
  }, [query, baseURL]);

  return (
    <div>
      <input
        type="text"
        placeholder="Find your Movinfos..."
        className="border-2 border-slate-900 my-8 mx-auto w-60 block rounded-md px-2 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query ? (
        <div className="grid p-4 gap-4 justify-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-auto">
          {search &&
            search.map((item) => (
              <div
                key={item.id}
                className="group relative hover:scale-105 transition-all"
              >
                <Link to={`/info/${item.id}`}>
                  <img
                    className="category__image max-w-xs m-auto"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                  {item.id}
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
        <div>
          <Category heading={"Top Rated"} movies={topRated} />
          <Category heading={"Popular"} movies={popular} />
          <Category heading={"Cult Classic"} movies={cult} />
          <Category heading={"Action, Sci-Fi, Drama"} movies={acFi} />
          <Category heading={"Some Good Movies"} movies={someMovies} />
          <Category heading={"Comedy"} movies={comedy} />
          <Category heading={"Animation"} movies={animation} />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(Categories);
