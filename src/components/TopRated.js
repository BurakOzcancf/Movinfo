import axios from "axios";
import React, { useState, useEffect } from "react";
import Category from "./Category";
const TopRated = () => {
  const [topRated, setTopRated] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setTopRated(response.data.results);
      });
  }, []);

  return (
    <div>
      <Category type={"movie"} heading={"Top Rated"} movies={topRated} />
    </div>
  );
};

export default TopRated;
