import React from "react";
import { NavLink } from "react-router-dom";
import hmImg from "../assets/home-hero.png";

function Home() {
  return (
    <section
      className="relative h-[calc(90vh-60px)] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${hmImg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/90">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <navLink
          to="vans"
          className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Find your van
        </navLink>
      </div>
    </section>
  );
}
export default Home;
