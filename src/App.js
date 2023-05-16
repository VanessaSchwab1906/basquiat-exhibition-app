import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";
import Home from "./components/Home/Home";
import Biography from "./components/Biography/Biography";
import Works from "./components/Works/Works";
import Games from "./components/Games/Games";
import Impressum from "./components/Impressum /Impressum";

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
