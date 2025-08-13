import React from "react";
import bgImg from "../assets/about-hero.png";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <img src={bgImg} className="w-full h-90 object-cover shadow-lg" />
      <div className="bg-white px-12">
        <h1 className="text-4xl font-bold p-9">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="px-9 text-xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="p-9 text-xl">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-orange-300 p-10 m-20 mt-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-12">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <NavLink className="bg-black text-white p-4 rounded-lg" to="/vans">
          Explore our vans
        </NavLink>
      </div>
    </div>
  );
}
export default About;
