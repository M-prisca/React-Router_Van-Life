import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="h-12 flex justify-between items-center px-4 py-10">
        <Link className="font-bold text-2xl " to="/">
          {" "}
          #VANLIFE
        </Link>
        <nav className="flex gap-4 text-lg font-semibold">
          <Link className="hover:underline" to="/host">
            Host
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
          <Link className="hover:underline" to="/vans">
            Vans
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
