import axios from "axios";
import React, { useState, useEffect } from "react";
import PatternMovie from "../patterns/PatternMovie";
import { movie } from "types";
const TopRated = () => {
  const [topRated, setTopRated] = useState<movie[]>([]);
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
      <PatternMovie heading={"Top Rated"} data={topRated} />
    </div>
  );
};

export default TopRated;
