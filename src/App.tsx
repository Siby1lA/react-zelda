import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Routes/Home";
import Monster from "./Routes/Monster";
import Movie from "./Routes/Movie";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="trailer" element={<Home />} />
        </Route>
        <Route path="monster" element={<Monster />} />
        <Route path="movie" element={<Movie />}>
          <Route path="moviemodal?q=:id" element={<Movie />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
