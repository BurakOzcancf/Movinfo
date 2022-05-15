import Main from "./components/Main";
import Info from "./components/Info";
import { MainContext } from "./components/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
