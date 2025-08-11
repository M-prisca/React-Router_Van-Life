import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>;
}

function Home() {
  return <h1>Hello World</h1>;
}

function About() {
  return <h1>About page goes here! 🎉</h1>;
}

createRoot(document.getElementById("root")).render(<App />);
