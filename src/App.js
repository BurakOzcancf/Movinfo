import InfoSerie from "./components/InfoSerie";
import InfoPerson from "./components/InfoPerson";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trends from "./components/Trends";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Tv from "./components/Tv";
import Bookmarks from "./components/Bookmarks";
import TopRated from "./components/TopRated";
import Hero from "./components/Hero";
import InfoMovie from "./components/InfoMovie";
import Categories from "./components/Categories";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/info_movie/:id" element={<InfoMovie />} />
        <Route path="/info_serie/:id" element={<InfoSerie />} />
        <Route path="/person/:id" element={<InfoPerson />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/top_rated" element={<TopRated />} />
      </Routes>
    </Router>
  );
}

export default App;
