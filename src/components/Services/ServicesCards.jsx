import React from "react";
import Image from "next/image";
import { rooms, services } from "./data.js";

export default function ServicesCards() {
    const servicesListItems = services.map((service, index) => {
        return (
            <li key={index} className="flex items-stretch py-2">
                {/* <div
                    data-parity={index % 2 !== 0 && "odd"}
                    className="relative w-36 h-36 data-[parity='odd']:order-last"
                >
                    <Image
                        src={service.image}
                        alt={`${service.name} image`}
                        fill
                        className="object-contain"
                    ></Image>
                </div> */}
                <div>
                    <h2 className="text-xl font-medium text-gray-700">
                        {service.name}
                    </h2>
                    <ul>
                        {service.listItems.map((s, i) => {
                            return (
                                <li
                                    key={i}
                                    className="list-disc list-inside marker:text-sy-600 pl-6"
                                >
                                    <p className="inline text-lg text-gray-600">
                                        {s}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </li>
        );
    });

    return (
        <div className="container mx-auto flex justify-center">
            <ul className="p-4">{servicesListItems}</ul>
        </div>
    );
}
