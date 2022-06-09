import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Bookmarks = ({ item }) => {
  const bookmarks = useSelector((state) => state.bookmark.bookmarks);

  function isBookmarked() {
    const a = [];
    bookmarks.map((items) => a.push(items.id));
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

export default Bookmarks;
