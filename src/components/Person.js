import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MainContext } from "./context";
const Person = () => {
  const params = useParams();
  const { baseURL, poster } = useContext(MainContext);
  const [person, setPerson] = useState("");
  const [photo, setPhoto] = useState("");
  const [personMovie, setPersonMovie] = useState("");
  useEffect(() => {
    axios
      .get(
        `${baseURL}/person/${params.id}?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((response) => {
        setPerson(response.data);
      });
    axios
      .get(
        `${baseURL}/person/${params.id}/images?api_key=${process.env.REACT_APP_API}`
      )
      .then((response) => {
        setPhoto(response.data.profiles);
      });
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
        {/* <div>
        {personMovie &&
          personMovie.map((item) => (
            <img src={poster + item.poster_path} alt="" />
          ))}
      </div> */}
      </div>
    </div>
  );
};

export default Person;
