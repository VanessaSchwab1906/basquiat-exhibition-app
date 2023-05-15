import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import "./App.css";
import Home from "./Home/Home";
import Biography from "./Biography/Biography";
import Works from "./Works/Works";
import Games from "./Games/Games";
import Impressum from "./Impressum /Impressum";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/works" element={<Works />} />
          <Route path="/games" element={<Games />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
