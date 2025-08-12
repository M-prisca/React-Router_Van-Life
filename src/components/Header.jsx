import React from "react";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
