import React from "react";
import { connect } from "react-redux";
import PatternMovie from "../patterns/PatternMovie";
import PatternSerie from "../patterns/PatternSerie";
import PatternPerson from "../patterns/PatternPerson";
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
      <PatternMovie heading={movie[0] && "Movies"} data={movie} />
      <PatternSerie heading={serie[0] && "Series"} data={serie} />
      <PatternPerson heading={person[0] && "Celebrities"} data={person} />
    </div>
  );
};

export default connect(mapStateToProps)(Bookmarks);
