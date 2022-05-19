import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./context";
import axios from "axios";
const Categories = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [topRated, setTopRated] = useState("");
  const [popular, setPopular] = useState("");
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
  }, [query, baseURL]);

  return (
    <div>
      <input
        type="text"
        placeholder="Find your Movinfo..."
        className="border-2 border-slate-900 my-4 mx-auto block rounded-md px-2 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query ? (
        <div>
          {search &&
            search.map((item) => (
              <Link key={item.id} to={`/info/${item.id}`}>
                <img
                  className="category__image"
                  src={poster + item.poster_path}
                  alt={item.title}
                />
              </Link>
            ))}
        </div>
      ) : (
        <div>
          <h2>Top Rated</h2>
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
          <h2>Popular</h2>
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
        </div>
      )}
    </div>
  );
};

export default Categories;
