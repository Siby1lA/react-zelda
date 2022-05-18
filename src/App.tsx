import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Routes/Home";
import Monster from "./Routes/Monster";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="trailer" element={<Home />} />
        </Route>
        <Route path="/monster" element={<Monster />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
