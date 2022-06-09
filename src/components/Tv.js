import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";
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

  const [tv, setTv] = useState("");
  return (
    <div>
      <Category type={"tv"} heading={"Popular Series"} movies={tv} />
    </div>
  );
};

export default Movie;
