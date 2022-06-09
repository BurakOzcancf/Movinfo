import Info from "./components/Info";
import Person from "./components/Person";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trends from "./components/Trends";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Tv from "./components/Tv";
import Bookmarks from "./components/Bookmarks";
import TopRated from "./components/TopRated";
import Hero from "./components/Hero";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/top_rated" element={<TopRated />} />
      </Routes>
    </Router>
  );
}

export default App;
