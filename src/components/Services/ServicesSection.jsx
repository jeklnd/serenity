import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
// import ServicesHeading from "./ServicesHeading.jsx";
import ServicesSlider from "./ServicesSlider.jsx";
import { rooms } from "./data.js";

export default function ServiceSection() {
    const [selectedSide, setSelectedSide] = useState("left");

    const roomsListItems = rooms.map((room, index) => {
        return (
            <li
                key={index}
                className="flex items-stretch relative aspect-square group cursor-pointer"
            >
                <Image
                    src={room.image}
                    alt={`Image of ${room.room}`}
                    fill
                    className="absolute object-cover rounded-sm group-hover:brightness-150 group-hover:opacity-25 transition"
                />
                <div className="z-10 p-8 opacity-0 group-hover:opacity-100 flex flex-col justify-around">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {room.room}
                    </h1>
                    <p className="text-lg font-normal text-gray-900">
                        {room.text}
                    </p>
                    <button
                        type="button"
                        className="text-left font-medium text-md text-gray-700 border-2 bg-gray-200/25 border-gray-700 mx-auto px-2 py-1 hover:shadow-sm hover:bg-gray-200/85 hover:text-gray-800 hover:border-gray-800 transition rounded-sm"
                    >
                        <Link href="/services">
                            View Services{" "}
                            <ArrowSmallRightIcon className="inline h-5 w-5" />
                        </Link>
                    </button>
                </div>
            </li>
        );
    });

    return (
        <section id="services" className="bg-gray-200">
            <div className="container mx-auto flex flex-col items-center px-4 py-14 gap-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-700 mb-2 text-center">
                        How we help
                    </h2>
                    <p className="text-xl text-gray-600 text-center">
                        View our list of handyman service offerings by room or
                        service.
                    </p>
                </div>
                <ServicesSlider
                    selectedSide={selectedSide}
                    setSelectedSide={setSelectedSide}
                />

                {/* By Room*/}
                <ul
                    data-selected={selectedSide}
                    className="hidden data-[selected='left']:grid grid-cols-1 max-w-[400px] sm:grid-cols-2 sm:max-w-[980px] gap-6"
                >
                    {roomsListItems}
                </ul>

                {/* By Service*/}
                                <ul
                    data-selected={selectedSide}
                    className="hidden data-[selected='right']:grid grid-cols-1 max-w-[400px] sm:grid-cols-2 sm:max-w-[980px] gap-6"
                >
                    {roomsListItems}
                </ul>
            </div>
        </section>
    );
}
