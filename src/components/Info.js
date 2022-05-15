import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MainContext } from "./context";
const Info = () => {
  const params = useParams();
  const [movinfo, setMovinfo] = useState("");
  const [reviews, setReviews] = useState("");
  const { baseURL, poster } = useContext(MainContext);
  const [similar, setSimilar] = useState("");
  useEffect(() => {
    axios
      .get(
        `${baseURL}/movie/${params.id}?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((response) => {
        setMovinfo(response.data);
      });
    axios
      .get(
        `${baseURL}/movie/${params.id}/similar?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setSimilar(response.data.results);
      });
    axios
      .get(
        `${baseURL}/movie/${params.id}/reviews?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((response) => {
        setReviews(response.data.results);
      });
  }, [params, baseURL]);

  console.log(reviews);
  return (
    <div>
      {movinfo && (
        <div className=" max-w-7xl m-auto md:w-5/6 lg:w-3/4">
          <div>{movinfo.title}</div>
          <div className="flex items-center">
            <img
              className="w-3/12 rounded-md"
              src={poster + movinfo.poster_path}
              alt={poster + movinfo.poster_path}
            />
            <img
              className="m-auto rounded-md w-9/12"
              src={poster + movinfo.backdrop_path}
              alt={poster + movinfo.backdrop_path}
            />
          </div>

          <ul>
            <li>
              <h2>Overview</h2>
              {movinfo.overview}
            </li>
            <li>Language: {movinfo.original_language} </li>
            <li>Release Date: {movinfo.release_date} </li>
            <li>vote_average: {movinfo.vote_average} </li>
            <li>
              vote_average:
              {movinfo.production_companies.map((item) => item.name)}
              {movinfo.production_countries.map((item) => item.name)}
            </li>
          </ul>

          {/* {similar && (
          <div className="hidden max-w-xs max-h-96 overflow-y-scroll">
            {similar.map((item) => (
              <img
                key={item.id}
                src={poster + item.backdrop_path}
                alt={poster + item.backdrop_path}
              />
            ))}
          </div>
        )} */}
        </div>
      )}
      {/* <span>{movinfo.production_countries.map((item) => item.name)} </span> */}
    </div>
  );
};

export default Info;
