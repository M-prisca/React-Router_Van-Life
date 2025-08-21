import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-105 bg-gray-100">
        <h1 className="  text-3xl font-bold text-center mt-14">
          Sorry, the page you are looking for does not exist.
        </h1>
        <Link
          className="text-lg px-20 text-white bg-black mt-8  hover:underline p-4 "
          to="/"
        >
          Go back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
