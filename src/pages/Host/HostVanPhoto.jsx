import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhoto() {
  const { currentVan } = useOutletContext();
  return <img src={currentVan.imageUrl} className="w-50 p-8 " />;
}
