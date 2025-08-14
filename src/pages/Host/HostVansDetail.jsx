import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HostVansDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="bg-gray-100 rounded-2xl mx-80">
        <div className="flex justify-items-end gap-4">
          <img
            className="h-70 rounded-2xl w-70 object-cover m-8"
            src={currentVan.imageUrl}
          />
          <div className="">
            <i className={`bg-${currentVan.type}`}>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
