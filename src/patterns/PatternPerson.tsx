import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Mark from "./Mark";
//import { useSelector } from "react-redux";
import { addFavPerson, person } from "../store/bookmarks-slice";
import defaultProfile from "../components/assets/defaultProfile.png";
import { useAppSelector } from "store";
const Category = ({ heading, data }) => {
  const person = useAppSelector(state => state.bookmark.favPerson)
  //const person = useSelector((state) => state.bookmark.favPerson);
  const dispatch = useDispatch();
  const poster = "https://www.themoviedb.org/t/p/original/";
  return (
    <div>
      <h2 className="px-4 text-center font-medium text-4xl mt-8 mb-4">
        {heading}
      </h2>
      {data ? (
        <div className="p-4 relative items-center gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-5xl justify-center m-auto ">
          {data.map((item: person) => (
            <div
              key={item.id}
              className="group relative hover:scale-105 transition-all"
            >
              <Link to={`/person/${item.id}`}>
                <img
                  onError={(e) => {
                    e.currentTarget.src = defaultProfile;
                  }}
                  src={poster + item.profile_path}
                  alt={item.name}
                />
              </Link>
              <span
                className="absolute group-hover:opacity-100 opacity-0 transition-all delay-300 w-full  bottom-6 right-0 bg-gradient-to-t from-black to-transparent bg-opacity-60 rounded-b-2xl p-4 "
                onClick={() => dispatch(addFavPerson(item))}
              >
                <Mark category={person} item={item.id} />
              </span>
              <h2 className="text-center">{item.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Category;
