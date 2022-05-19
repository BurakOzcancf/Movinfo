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
        <div className=" bg-gradient-to-r to-transparent via-yellow-400 from-transparent  py-2 text-center rounded-md">
          <Link to={"/"}>
            <h1 className="text-5xl inline-block m-auto font-bold  text-slate-800">
              Movinfos
            </h1>
          </Link>
        </div>

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
