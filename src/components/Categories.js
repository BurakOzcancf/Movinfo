import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./context";
import axios from "axios";
const Categories = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [topRated, setTopRated] = useState("");
  const [popular, setPopular] = useState("");
  const [sciFi, setSciFi] = useState("");
  const [batman, setBatman] = useState("");
  const [angry, setAngry] = useState("");
  const [angrys, setAngrys] = useState("");
  const [angryss, setAngryss] = useState("");
  const { baseURL, poster } = useContext(MainContext);
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
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setPopular(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/278/recommendations?api_key=8ee0783e9a3e5713e58fb29ede10b792&language=en-US&page=1`
      )
      .then((response) => {
        setSciFi(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/155/recommendations?api_key=8ee0783e9a3e5713e58fb29ede10b792&language=en-US&page=1`
      )
      .then((response) => {
        setBatman(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/389/recommendations?api_key=8ee0783e9a3e5713e58fb29ede10b792&language=en-US&page=1`
      )
      .then((response) => {
        setAngry(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/72105/recommendations?api_key=8ee0783e9a3e5713e58fb29ede10b792&language=en-US&page=1`
      )
      .then((response) => {
        setAngrys(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/14160/recommendations?api_key=8ee0783e9a3e5713e58fb29ede10b792&language=en-US&page=1`
      )
      .then((response) => {
        setAngryss(response.data.results);
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
              <Link key={item.id} to={`/info/${item.id}`}>
                <img
                  className="category__image max-w-xs m-auto"
                  src={poster + item.poster_path}
                  alt={item.title}
                />
                {item.id}
              </Link>
            ))}
        </div>
      ) : (
        <div>
          <h2 className="px-4 text-xl">Top Rated</h2>
          {topRated && (
            <div className="p-4 flex items-center overflow-x-scroll gap-1">
              {topRated.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <img
                    className="hover:scale-105 transition-all category__image"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
          )}
          <h2 className="px-4 text-xl mt-4">Popular</h2>
          {popular && (
            <div className="p-4 flex items-center overflow-x-scroll gap-1">
              {popular.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <img
                    className="hover:scale-105 transition-all category__image"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
          )}
          <h2 className="px-4 text-xl mt-4">Cult Classic</h2>
          {sciFi && (
            <div className="p-4 flex items-center overflow-x-scroll gap-1">
              {sciFi.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <img
                    className="hover:scale-105 transition-all category__image"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
          )}
          <h2 className="px-4 text-xl mt-4">Action, Sci-Fi, Drama</h2>
          {batman && (
            <div className="p-4 flex items-center overflow-x-scroll gap-1">
              {batman.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <img
                    className="hover:scale-105 transition-all category__image"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
          )}
          <h2 className="px-4 text-xl mt-4">Some Good Movies</h2>
          {angry && (
            <div className="p-4 flex items-center overflow-x-scroll gap-1">
              {angry.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <img
                    className="hover:scale-105 transition-all category__image"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
          )}
          <h2 className="px-4 text-xl mt-4">Comedy</h2>
          {angrys && (
            <div className="p-4 flex items-center overflow-x-scroll gap-1">
              {angrys.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <img
                    className="hover:scale-105 transition-all category__image"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
          )}
          <h2 className="px-4 text-xl mt-4">Animation</h2>
          {angryss && (
            <div className="p-4 flex items-center overflow-x-scroll gap-1">
              {angryss.map((item) => (
                <Link key={item.id} to={`/info/${item.id}`}>
                  <img
                    className="hover:scale-105 transition-all category__image"
                    src={poster + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
