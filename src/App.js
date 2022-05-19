import Main from "./components/Main";
import Info from "./components/Info";
import Person from "./components/Person";
import { MainContext } from "./components/context";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const baseURL = "https://api.themoviedb.org/3";
const poster = "https://www.themoviedb.org/t/p/original/";
const data = {
  baseURL,
  poster,
};
function App() {
  return (
    <MainContext.Provider value={data}>
      <Router>
        <Link to={"/"}>
          <h1 className="text-5xl p-2 m-auto font-bold text-yellow-400">
            Movinfo
          </h1>
        </Link>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/person/:id" element={<Person />} />
        </Routes>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
