import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "./context";
const Person = () => {
  const params = useParams();
  const { baseURL, poster } = useContext(MainContext);
  const [person, setPerson] = useState("");
  // const [photo, setPhoto] = useState("");
  const [personMovie, setPersonMovie] = useState("");
  useEffect(() => {
    axios
      .get(
        `${baseURL}/person/${params.id}?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((response) => {
        setPerson(response.data);
      });
    // axios
    //   .get(
    //     `${baseURL}/person/${params.id}/images?api_key=${process.env.REACT_APP_API}`
    //   )
    //   .then((response) => {
    //     setPhoto(response.data.profiles);
    //   });
    axios
      .get(
        `${baseURL}/person/${params.id}/movie_credits?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((response) => {
        setPersonMovie(response.data.cast);
      });
  }, [params, baseURL]);

  return (
    <div>
      <div className="lg:flex p-4 max-w-7xl m-auto">
        <img
          className="w-1/2 max-w-sm mx-auto h-full"
          src={poster + person.profile_path}
          alt=""
        />
        <div className="lg:px-8">
          <h2 className="text-3xl my-8 lg:mt-0 text-yellow-400">
            {person.name}
          </h2>
          <p className="opacity-80">{person.biography}</p>
        </div>

        {/* <div>
        {photo &&
          photo.map((item) => <img src={poster + item.file_path} alt="" />)}
      </div> */}
      </div>
      <h2>Filmography</h2>
      {personMovie && (
        <div className="p-4 flex items-center overflow-x-scroll gap-1">
          {personMovie.map((item) => (
            <Link key={item.id} to={`/info/${item.id}`}>
              <img
                src={poster + item.poster_path}
                alt={item.name}
                className="category__image hover:scale-105 transition-all"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Person;
