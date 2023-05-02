import React from "react";
import Image from "next/image";
import { services } from "./data.js";

export default function ServicesCards() {
    const servicesListItems = services.map((service, index) => {
        return (
            <li key={index} className="flex flex-col py-6 gap-2 rounded-sm shadow-md">
                {/* Images */}
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
                <div className="mx-auto text-3xl text-sy-600">
                    {service.icon}
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-medium text-gray-700 text-center">
                        {service.name}
                    </h2>
                    <ul>
                        {service.listItems.map((listItem, i) => {
                            return (
                                <li
                                    key={i}
                                    className="list-disc list-inside marker:text-sy-600 pl-6"
                                >
                                    <p className="inline text-lg text-gray-600">
                                        {listItem}
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
        <div className="container mx-auto flex justify-center py-8">
            <ul className="p-4 grid md:grid-cols-2 justify-center flex-wrap gap-8">
                {servicesListItems}
            </ul>
        </div>
    );
}
