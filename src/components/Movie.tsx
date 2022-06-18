import axios from "axios";
import React, { useEffect, useState } from "react";
import PatternMovie from "../patterns/PatternMovie";
import { movie } from '../types'

const Movie = () => {
  const [popular, setPopular] = useState<movie[]>([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setPopular(response.data.results);
      });
  }, []);
  console.log(popular);
  return (
    <div>
      <PatternMovie heading={"Popular Movies"} data={popular} />
    </div>
  );
};

export default Movie;
