import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { movie, tv, person } from '../types'


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
