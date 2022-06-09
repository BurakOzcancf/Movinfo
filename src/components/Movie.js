import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";
const Movie = () => {
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setPopular(response.data.results);
      });
  }, []);

  const [popular, setPopular] = useState("");
  return (
    <div>
      <Category heading={"Popular Movies"} movies={popular} />
    </div>
  );
};

export default Movie;
