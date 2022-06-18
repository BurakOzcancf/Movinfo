import axios from "axios";
import React, { useEffect, useState } from "react";
import PatternSerie from "../patterns/PatternSerie";
import { tv } from "types";
const Movie = () => {
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setTv(response.data.results);
      });
  }, []);

  const [tv, setTv] = useState<tv[]>([]);
  return (
    <div>
      <PatternSerie heading={"Popular Series"} data={tv} />
    </div>
  );
};

export default Movie;
