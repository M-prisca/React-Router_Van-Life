import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();

  return (
    <section className="p-8 ">
      <h4 className="font-bold pb-2">
        Name: <span className="font-normal">{currentVan.name}</span>
      </h4>
      <h4 className="font-bold pb-2">
        Category: <span className="font-normal">{currentVan.type}</span>
      </h4>
      <h4 className="font-bold">
        Description:{" "}
        <span className="font-normal">{currentVan.description}</span>
      </h4>
      <h4 className="font-bold pt-2">
        Visibility: <span className="font-normal">Public</span>
      </h4>
    </section>
  );
};

export default HostVanInfo;
