import React from "react";
import { connect } from "react-redux";
import Category from "./Category";
const mapStateToProps = (state) => ({
  movie: state.bookmark.favMovie,
  serie: state.bookmark.favSerie,
  person: state.bookmark.favPerson,
});
const Bookmarks = ({ movie, serie, person }) => {
  return (
    <div>
      <h1 className="text-5xl text-center p-4">Bookmarks</h1>
      {!movie[0] && !serie[0] && !person[0] && (
        <h2 className="text-3xl text-center p-4">Upps, here is empty!</h2>
      )}
      <Category
        type={"movie"}
        category={movie}
        heading={movie[0] && "Movies"}
        movies={movie}
      />
      <Category
        type={"tv"}
        category={serie}
        heading={serie[0] && "Series"}
        movies={serie}
      />
      <Category
        category={person}
        heading={person[0] && "People"}
        movies={person}
      />
    </div>
  );
};

export default connect(mapStateToProps)(Bookmarks);
