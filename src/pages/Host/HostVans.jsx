import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}

        >
            <div className="flex gap-4 p-4 m-4 rounded-2xl shadow-lg mx-40" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} className="w-30 rounded-sm"/>
                <div className="p-4">
                    <h3 className="text-2xl">{van.name}</h3>
                    <p className=" text-ls ">${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section className="bg-gray-50 ">
            <h1 className="text-3xl font-bold p-4 pl-8">Your listed vans</h1>
            <div className="">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}