import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";
import Home from "./components/Home/Home";
import Biography from "./components/Biography/Biography";
import Map from "./components/ExhibitionMap/ExhibitionMap";
import Games from "./components/Games/Games";
import MemoryGame from "./components/MemoryGame/MemoryGame";
import Canvas from "./components/Canvas/Canvas";
import EventList from "./components/EventList/EventList";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/exhibition" element={<Map />} />
          <Route path="/games" element={<Games />} />
          <Route path="/memory" element={<MemoryGame />} />
          <Route path="/built-your-own-basquiat" element={<Canvas />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
