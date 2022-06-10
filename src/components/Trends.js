import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import { Link } from "react-router-dom";
import { addFavMovie, addFavSerie } from "../store/bookmarks-slice";
import defaulProfile from "./assets/defaultProfile.PNG";
import { useSelector } from "react-redux";
const Trends = () => {
  const serie = useSelector((state) => state.bookmark.favSerie);
  const movie = useSelector((state) => state.bookmark.favMovie);
  const [trends, setTrends] = useState("");
  const [trendTv, setTrendTv] = useState("");
  const [trendPerson, setTrendPerson] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}`
      )
      .then((response) => {
        setTrends(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API}`
      )
      .then((response) => {
        setTrendTv(response.data.results);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_API}`
      )
      .then((response) => {
        setTrendPerson(response.data.results);
      });
  }, []);
  return (
    <div>
      <Category
        category={serie}
        type={"tv"}
        heading={"Trends Series"}
        movies={trendTv}
        add={addFavSerie}
      />
      <Category
        add={addFavMovie}
        category={movie}
        type={"movie"}
        heading={"Trends Movie"}
        movies={trends}
      />
      {trendPerson && (
        <div className="p-4 relative grid grid-flow-col-dense items-center overflow-x-scroll gap-1">
          {trendPerson.map((item) => (
            <div
              key={item.id}
              className="group relative w-40 hover:scale-105 transition-all"
            >
              <Link to={`/info/${item.id}`}>
                <img
                  onError={(e) => {
                    e.currentTarget.src = defaulProfile;
                  }}
                  className="w-40"
                  src={
                    "https://www.themoviedb.org/t/p/original/" +
                    item.profile_path
                  }
                  alt={item.name}
                />
                <h2 className="text-center">{item.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trends;
