import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      });
  }, [id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="px-12 py-8 max-w-3xl mx-auto">
      <Link
        to={`..${search}`}
        relative="path"
        className="text-lg  hover:font-bold "
      >
        &larr; <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="bg-white rounded-lg overflow-hidden mt-6 shadow-md">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-full h-80 object-cover"
          />

          <div className="p-6">
            <span
              className={`inline-block mb-4 px-3 py-1 text-sm font-medium text-white rounded ${
                van.type === "simple"
                  ? "bg-orange-500"
                  : van.type === "luxury"
                  ? "bg-black"
                  : "bg-green-600"
              }`}
            >
              {van.type}
            </span>
            <h2 className="text-2xl font-bold mb-2">{van.name}</h2>
            <p className="text-lg font-semibold mb-4">
              ${van.price}
              <span className="text-sm font-normal">/day</span>
            </p>
            <p className="text-gray-700 mb-6">{van.description}</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <p className="text-2xl text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default VanDetail;
