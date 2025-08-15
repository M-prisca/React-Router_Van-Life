import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();
  return (
    <h3 className="p-8 text-2xl font-bold">
      ${currentVan.price}
      <span className="font-normal">/day</span>
    </h3>
  );
}
