import React from "react";
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="bg-white flex gap-4 px-4 ">
        <Link className="hover:underline" to="/host">
          Dashboard
        </Link>
        <Link className="hover:underline" to="/host/income">
          Income
        </Link>
        <Link className="hover:underline" to="/host/reviews">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
