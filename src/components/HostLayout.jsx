import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const getLinkClass = () =>
    "text-black hover:text-red-500 hover:font-bold hover:underline transition-colors";

  return (
    <>
      <nav className="bg-white flex gap-4 text-lg px-4 py-2">
        <NavLink
          to="/host"
          end={true}
          className={({ isActive }) => (isActive ? getLinkClass() : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? getLinkClass() : null)}
        >
          Income
        </NavLink>

         <NavLink
          to="/host/vans"
          className={({ isActive }) => (isActive ? getLinkClass() : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? getLinkClass() : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
