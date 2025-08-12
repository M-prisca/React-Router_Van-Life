import React from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
      <Link to={`/vans/${van.id}`}>
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-full h-80  object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{van.name}</h3>
            <p className="text-lg font-bold">
              ${van.price}
              <span className="text-sm font-normal">/day</span>
            </p>
          </div>
          <span
            className={`inline-block mt-3 px-4 py-2 text-sm font-medium text-white rounded ${
              van.type === "simple"
                ? "bg-orange-500"
                : van.type === "luxury"
                ? "bg-black"
                : "bg-green-600"
            }`}
          >
            {van.type}
          </span>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Explore our van options</h1>

      <div className="flex gap-3 mb-8">
        <button className="px-4 py-2 rounded-md bg-orange-100 text-orange-600 font-medium">
          Simple
        </button>
        <button className="px-4 py-2 rounded-md bg-green-100 text-green-600 font-medium">
          Rugged
        </button>
        <button className="px-4 py-2 rounded-md bg-black text-white font-medium">
          Luxury
        </button>
        <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium">
          Clear filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{vanElements}</div>
    </div>
  );
};

export default Vans;
