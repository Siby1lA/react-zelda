import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Routes/Home";
import Object from "./Routes/Object";
import Movie from "./Routes/Movie";
import World from "./Routes/World";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="trailer" element={<Home />} />
        </Route>
        <Route path="object" element={<Object />} />
        <Route path="movie" element={<Movie />}>
          <Route path="moviemodal/:id" element={<Movie />} />
        </Route>
        <Route path="world" element={<World />} />
      </Routes>
    </Router>
  );
}

export default App;
