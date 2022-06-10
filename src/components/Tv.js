import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import { addFavSerie } from "../store/bookmarks-slice";
const Movie = () => {
  const serie = useSelector((state) => state.bookmark.favSerie);
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
      <Category
        add={addFavSerie}
        category={serie}
        type={"tv"}
        heading={"Popular Series"}
        movies={tv}
      />
    </div>
  );
};

export default Movie;
