import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import defaultProfile from "../components/assets/defaultProfile.PNG";
import PatternMovie from "../patterns/PatternMovie";

const Person = () => {
  const params = useParams();
  const poster = "https://www.themoviedb.org/t/p/original/";
  const [person, setPerson] = useState("");
  // const [photo, setPhoto] = useState("");
  const [filmography, setFilmography] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((response) => {
        setPerson(response.data);
      });
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/person/${params.id}/images?api_key=${process.env.REACT_APP_API}`
    //   )
    //   .then((response) => {
    //     setPhoto(response.data.profiles);
    //   });
    axios
      .get(
        `https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((response) => {
        setFilmography(response.data.cast);
      });
  }, [params]);
  return (
    <div>
      <div className="lg:flex p-4 max-w-7xl m-auto">
        <img
          className="w-1/2 max-w-sm mx-auto h-full"
          src={poster + person.profile_path}
          onError={(e) => {
            e.currentTarget.src = defaultProfile;
          }}
          alt={person.name}
        />
        <div className="lg:px-8">
          <h2 className="text-3xl my-8 lg:mt-0">{person.name}</h2>
          <p className="opacity-90">{person.biography}</p>
        </div>

        {/* <div>
        {photo &&
          photo.map((item) => <img src={poster + item.file_path} alt="" />)}
      </div> */}
      </div>

      <PatternMovie heading={"Filmography"} data={filmography} />
    </div>
  );
};

export default Person;
