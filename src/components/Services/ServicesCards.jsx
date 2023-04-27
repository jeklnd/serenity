import React from "react";

export default function ServicesCards() {
    const services = [
        {
            name: "Home Repair and Maintence",
            examples: ["example1", "example2", "example3"],
        },
        {
            name: "Plumbing",
            examples: ["example1", "example2", "example3"],
        },
        {
            name: "Electrical",
            examples: ["example1", "example2", "example3"],
        },
        {
            name: "Bathroom and Kitchen",
            examples: ["example1", "example2", "example3"],
        },
    ];
    const servicesListItems = services.map((service, index) => {
        return (
            <li key={index} className="flex justify-center">
                <div
                    className={`h-12 w-12 bg-slate-800 ${
                        index % 2 !== 0 && "order-2"
                    }`}
                ></div>
                <div>
                    <h1>{service.name}</h1>
                    <ul className="list-disc list-inside">
                        {service.examples.map((s, i) => {
                            return <li key={i}>{s}</li>;
                        })}
                    </ul>
                    <button>View Work →</button>
                </div>
            </li>
        );
    });
    return (
        <div className="container mx-auto">
            <ul className="flex flex-col gap-6">{servicesListItems}</ul>
        </div>
    );
}
