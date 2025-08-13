import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="bg-white flex gap-4 px-4 ">
        <navLink className="hover:underline" to="/host">
          Dashboard
        </navLink>
        <NavLink className="hover:underline" to="/host/income">
          Income
        </NavLink>
        <NavLink className="hover:underline" to="/host/reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
