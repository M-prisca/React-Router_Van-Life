import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail.jsx";
import "./index.css";
import "./server.js";

function App() {
  return (
    <BrowserRouter>
      <header className="h-12 flex justify-between items-center px-4 py-10">
        <Link className="font-bold text-2xl" to="/">
          {" "}
          #VANLIFE
        </Link>
        <nav className="flex gap-4 text-lg font-semibold">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
