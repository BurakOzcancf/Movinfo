import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.bookmark.bookmarks);
  console.log(bookmarks);
  return (
    <div>
      <Category heading={"Bookmarks"} movies={bookmarks} />
      {!bookmarks[0] && (
        <h2 className="text-3xl text-center p-4">Upps, here is empty!</h2>
      )}
    </div>
  );
};

export default Bookmarks;
