import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="h-12 flex justify-between items-center px-4 py-10">
        <NavLink className="font-bold text-2xl " to="/">
          {" "}
          #VANLIFE
        </NavLink>
        <nav className="flex gap-4 text-lg font-semibold">
          <NavLink className="hover:underline" to="/host">
            Host
          </NavLink>
          <NavLink className="hover:underline" to="/about">
            About
          </NavLink>
          <NavLink className="hover:underline" to="/vans">
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
