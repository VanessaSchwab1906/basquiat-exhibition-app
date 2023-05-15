import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home></Home>
        <Routes>{/* /biography /works /games /impressum */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
