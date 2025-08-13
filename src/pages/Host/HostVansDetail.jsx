import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HostVansDetail() {

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="flex  justify-center ">
            <div>
                <img src={currentVan.imageUrl} className="w-60" />
                <h2>{currentVan.name}</h2>
                <p>{currentVan.price}</p>
                <p>{currentVan.type}</p>
            </div>
        </div>
    )
}