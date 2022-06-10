import axios from "axios";
import React, { useState, useEffect } from "react";
import Category from "./Category";
import { addFavMovie } from "../store/bookmarks-slice";
import { useSelector } from "react-redux";
const TopRated = () => {
  const movie = useSelector((state) => state.bookmark.favMovie);
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
      <Category
        category={movie}
        add={addFavMovie}
        type={"movie"}
        heading={"Top Rated"}
        movies={topRated}
      />
    </div>
  );
};

export default TopRated;
