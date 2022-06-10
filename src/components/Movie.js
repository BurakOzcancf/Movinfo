import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addFavMovie } from "../store/bookmarks-slice";
import Category from "./Category";
const Movie = () => {
  const movie = useSelector((state) => state.bookmark.favMovie);
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
      <Category
        category={movie}
        type={"movie"}
        add={addFavMovie}
        heading={"Popular Movies"}
        movies={popular}
      />
    </div>
  );
};

export default Movie;
