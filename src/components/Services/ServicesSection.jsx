import React from "react";
import Image from "next/image";
import ServicesHeading from "./ServicesHeading.jsx";
import ServicesSlider from  "./ServicesSlider.jsx"
import { rooms } from "./data.js";

export default function ServiceSection() {
    const servicesListItems = rooms.map((service, index) => {
        return (
            <li
                key={index}
                className="flex items-stretch relative aspect-square group cursor-pointer"
            >
                <Image
                    src={service.image}
                    alt={`Image of ${service.room}`}
                    fill
                    className="absolute object-cover rounded-sm group-hover:brightness-150 group-hover:opacity-25 transition "
                />

                <div className="z-10 p-8 opacity-0 group-hover:opacity-100">
                    <h1 className="text-2xl font-normal  ">{service.room}</h1>
                    <p>{service.text}</p>
                    <button>View Services</button>
                </div>
            </li>
        );
    });

    return (
        <section id="services" className="bg-gray-200">
            <div className="container mx-auto flex flex-col items-center px-4 py-14 gap-8">
                <ServicesHeading />
                <ServicesSlider/>
                <ul className="grid grid-cols-1 max-w-[400px] sm:grid-cols-2 sm:max-w-[980px] gap-6">
                    {servicesListItems}
                </ul>
            </div>
        </section>
    );
}
