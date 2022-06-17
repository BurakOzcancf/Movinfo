import React, { useEffect, useState } from "react";
import axios from "axios";
import PatternMovie from "../patterns/PatternMovie";
const Categories = () => {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState(28);
  const [heading, setHeading] = useState("Action");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${query}&with_watch_monetization_types=flatrate`
      )
      .then((response) => {
        setCategory(response.data.results);
      });
  }, [query]);
  return (
    <section>
      <ul className="grid text-white bg-gray-800 overflow-x-auto gap-x-4 grid-flow-col-dense items-center px-4 py-1">
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(28);
            setHeading("Action");
          }}
        >
          Action
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(12);
            setHeading("Adventure");
          }}
        >
          Adventure
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(16);
            setHeading("Animation");
          }}
        >
          Animation
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(35);
            setHeading("Comedy");
          }}
        >
          Comedy
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(80);
            setHeading("Crime");
          }}
        >
          Crime
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(99);
            setHeading("Documentary");
          }}
        >
          Documentary
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(18);
            setHeading("Documentary");
          }}
        >
          Drama
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(10751);
            setHeading("Family");
          }}
        >
          Family
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(14);
            setHeading("Fantasy");
          }}
        >
          Fantasy
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(36);
            setHeading("History");
          }}
        >
          History
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(27);
            setHeading("Horror");
          }}
        >
          Horror
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(10402);
            setHeading("Music");
          }}
        >
          Music
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(9648);
            setHeading("Mystery");
          }}
        >
          Mystery
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(10749);
            setHeading("Romance");
          }}
        >
          Romance
        </li>
        <li
          className="cursor-pointer w-28"
          onClick={() => {
            setQuery(878);
            setHeading("Science Fiction");
          }}
        >
          Science Fiction
        </li>
        <li
          className="cursor-pointer w-20"
          onClick={() => {
            setQuery(10770);
            setHeading("TV Movie");
          }}
        >
          TV Movie
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(53);
            setHeading("Thriller");
          }}
        >
          Thriller
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(10752);
            setHeading("War");
          }}
        >
          War
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setQuery(37);
            setHeading("Western");
          }}
        >
          Western
        </li>
      </ul>
      <PatternMovie heading={heading} data={category} />
    </section>
  );
};

export default Categories;
