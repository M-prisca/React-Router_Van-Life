import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = React.useState([]);

  const typeFilter = searchParams.get("type");

  console.log(typeFilter);
  React.useEffect(() => {
    async function LoadVans() {
      const data = await getVans();
      setVans(data);
    }
    LoadVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        aria-label={`View details for ${van.name}, price at ${van.price} per day`}
      >
        <img
          src={van.imageUrl}
          alt={`image of ${van.name}`}
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
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Explore our van options</h1>

      <div className="flex gap-3 mb-8">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`px-4 py-2 rounded-md font-medium ${
            typeFilter === "simple"
              ? "bg-orange-200 text-orange-600"
              : "bg-orange-100 text-black hover:text-orange-600 hover:bg-orange-200"
          }`}
        >
          Simple
        </button>

        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`px-4 py-2 rounded-md font-medium ${
            typeFilter === "rugged"
              ? "bg-green-200 text-green-600"
              : "bg-green-100 text-black hover:text-green-600 hover:bg-green-200"
          }`}
        >
          Rugged
        </button>

        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`px-4 py-2 rounded-md font-medium ${
            typeFilter === "luxury"
              ? "bg-black text-white"
              : "bg-gray-100 text-black hover:text-white hover:bg-black"
          }`}
        >
          Luxury
        </button>

        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="px-4 py-2 rounded-md bg-white text-black font-medium underline hover:text-lg"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{vanElements}</div>
    </div>
  );
};

export default Vans;
