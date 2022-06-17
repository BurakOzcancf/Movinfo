import React, { useEffect, useState } from "react";
import axios from "axios";
import PatternMovie from "../patterns/PatternMovie";
import PatternSerie from "../patterns/PatternSerie";
import PatternPerson from "../patterns/PatternPerson";
const Trends = () => {
  const [trendMovie, setTrendMovie] = useState("");
  const [trendTv, setTrendTv] = useState("");
  const [trendPerson, setTrendPerson] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}`
      )
      .then((response) => {
        setTrendMovie(response.data.results);
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
      <PatternSerie heading={"Trends Series"} data={trendTv} />
      <PatternMovie heading={"Trends Movie"} data={trendMovie} />
      <PatternPerson heading={"Trends People"} data={trendPerson} />
    </div>
  );
};

export default Trends;
