import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainContext } from "./context";
import defaulProfile from "./assets/defaultProfile.jpg";
const Info = () => {
  const params = useParams();
  const [movinfo, setMovinfo] = useState("");
  const { baseURL, poster } = useContext(MainContext);
  const [similar, setSimilar] = useState("");
  const [cast, setCast] = useState("");
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
        `${baseURL}/movie/${params.id}/credits?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((response) => {
        setCast(response.data.cast);
      });
  }, [params, baseURL]);

  return (
    <div>
      {movinfo && (
        <div className="max-w-7xl  m-auto md:w-5/6 lg:w-3/4">
          <h1 className="text-center text-3xl m-2">{movinfo.title}</h1>
          <div className="flex items-center">
            <img
              className="w-3/12 rounded-md ml-10 -mr-5 z-10"
              src={poster + movinfo.poster_path}
              alt={movinfo.title}
            />
            <img
              className="m-auto rounded-md -ml-10 w-9/12"
              src={poster + movinfo.backdrop_path}
              alt={movinfo.title}
            />
          </div>
          <ul className="p-4">
            <li>
              <h2 className="text-2xl">Overview</h2>
              <p className="opacity-90">{movinfo.overview}</p>
            </li>
            <li>
              Language:{" "}
              <span className="rounded-full px-2 bg-yellow-400 text">
                {movinfo.original_language}
              </span>{" "}
            </li>
            <li>
              Release Date:{" "}
              <span className="opacity-80">{movinfo.release_date}</span>{" "}
            </li>
            <li>
              Vote:{" "}
              <span className="rounded-full px-2 bg-yellow-400 text">
                {movinfo.vote_average}
              </span>{" "}
            </li>
            <li>
              Production:{" "}
              {movinfo.production_companies.map((item) => (
                <span className=" bg-yellow-400 mx-1 rounded-md px-1">
                  {item.name}
                </span>
              ))}
            </li>
            <li>
              Production Country:{" "}
              <span className="opacity-80">
                {movinfo.production_countries.map((item) => (
                  <span> -{item.name} </span>
                ))}
              </span>
            </li>
          </ul>
          <h2 className="text-2xl">Similar Movies</h2>
          {similar && (
            <div className="flex overflow-x-auto gap-2 p-2">
              {similar.map((item) => (
                <img
                  className="w-32"
                  key={item.id}
                  src={poster + item.poster_path}
                  alt={item.title}
                />
              ))}
            </div>
          )}
          Cast
          {cast && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {cast.map((item) => (
                <Link
                  key={item.id}
                  to={`/person/${item.id}`}
                  className="text-center m-auto max-w-fit"
                >
                  <img
                    onError={(e) => {
                      e.currentTarget.src = defaulProfile;
                    }}
                    className="w-40 m-auto"
                    src={poster + item.profile_path}
                    alt={item.name}
                  />
                  <h2>{item.name}</h2>
                  <small>
                    <span className="text-yellow-400 font-bold">As</span>:{" "}
                    <span className="opacity-90">{item.character}</span>
                  </small>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* <span>{movinfo.production_countries.map((item) => item.name)} </span> */}
    </div>
  );
};

export default Info;
