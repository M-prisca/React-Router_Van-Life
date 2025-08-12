import React from "react";

const Vans = () => {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id}>
      <img src={van.imageUrl} />
      <div>
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/ day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div>
      <h1>Explore our vans options</h1>
      <div>{vanElements}</div>
    </div>
  );
};

export default Vans;
