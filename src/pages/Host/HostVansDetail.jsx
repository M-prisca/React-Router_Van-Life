import React from "react";
import { Link, useParams, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HostVansDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  const getLinkClass = () =>
    "text-black hover:text-red-500 hover:font-bold hover:underline transition-colors";

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="p-12 mb-6 text-lg hover:font-bold "
      >
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="bg-gray-100 rounded-2xl mx-80">
        <div className="flex justify-items-end gap-4">
          <img
            className="h-70 rounded-2xl w-70 object-cover m-8"
            src={currentVan.imageUrl}
          />
          <div className="mt-14">
            <i
              className={`bg-orange-300 p-3 rounded-2xl w-6 ${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3 className="text-2xl font-bold py-4 pb-2">{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? getLinkClass() : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? getLinkClass() : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? getLinkClass() : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
