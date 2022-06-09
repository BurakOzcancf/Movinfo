import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import defaulProfile from "./assets/defaultProfile.PNG";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  baseURL: state.info.baseURL,
  poster: state.info.poster,
});
const Person = ({ baseURL, poster }) => {
  const params = useParams();
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
  console.log(person);
  return (
    <div>
      <div className="lg:flex p-4 max-w-7xl m-auto">
        <img
          className="w-1/2 max-w-sm mx-auto h-full"
          src={poster + person.profile_path}
          onError={(e) => {
            e.currentTarget.src = defaulProfile;
          }}
          alt={person.name}
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
                onError={(e) => {
                  e.currentTarget.src = defaulProfile;
                }}
                className="category__image hover:scale-105 transition-all"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(Person);
