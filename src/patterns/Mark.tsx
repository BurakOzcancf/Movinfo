import React from "react";
import { BsBookmarkFill } from "react-icons/bs";

interface movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string | null;
  original_language: string;
  release_date: string;
  vote_average: string;
  production_companies: [{
    name: string;
    id: number;
  }];
  production_countries: [{
    name: string;
  }];
}
interface tv {
  title: string | undefined;
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  original_language: string;
  first_air_date: string;
  vote_average: number;
  production_companies: [{
    name: string;
  }]
  production_countries: [{
    name: string
  }]
}
interface person {
  id: number;
  name: string;
  profile_path: string | null;
  biography: string;
}
// interface IMarkProps {
//   item: number;
//   category: [{
//     id: number;
//   }];
// }
type IsBookmarked = (item: any) => boolean;
const Mark = ({ item, category }: { item: number; category: movie[] | tv[] | person[] }) => {

  const isBookmarked: IsBookmarked = (item) => {
    const a: number[] = [];
    category.map((items: { id: number; }) => a.push(items.id));
    if (a.includes(item)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <BsBookmarkFill
        onClick={isBookmarked}
        className="text-xl ml-auto"
        style={
          isBookmarked(item)
            ? {
              fill: "rgb(234 179 8)",
            }
            : { fill: "white" }
        }
      />
    </>
  );
};
export default Mark;
