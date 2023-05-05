import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import ServicesSlider from "./ServicesSlider.jsx";
import ServicesBullets from "./ServicesBullets.jsx";
import { rooms } from "./data.js";
import styles from "./ServiceBullets.module.css";

export default function ServiceSection({ heading }) {
    const [selectedSide, setSelectedSide] = useState("left");

    const roomsListItems = rooms.map((room, index) => {
        return (
            <li
                key={index}
                className="relative group max-w-[460px] bg-slate-300"
            >
                {/* Card Heading */}
                <div
                    className={`${styles.bricks} flex flex-col p-4 pb-6 gap-2 relative rounded-sm z-10`}
                >
                    <div className="mx-auto text-3xl text-gray-700">
                        {room.icon}
                    </div>
                    <h2 className="text-xl lg:text-2xl font-medium text-gray-700 text-center">
                        {room.room}
                    </h2>

                    <div className="w-12 border-2 border-gray-700/75 self-center absolute bottom-0"></div>
                </div>

                {/* Card Background Image*/}
                <Image
                    src={room.image}
                    alt={`Image of ${room.room}`}
                    fill
                    className="absolute object-cover rounded-sm group-hover:opacity-0 transition"
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Card Body Text and Button */}
                <div className="flex items-stretch relative aspect-square cursor-pointer">
                    <div className="z-10 p-8 opacity-0 group-hover:opacity-100 transition flex flex-col justify-around">
                        <p className="text-lg min-[375px]:text-2xl lg:text-3xl ">
                            {room.text}
                        </p>

                        <button
                            type="button"
                            className="self-center w-fit font-extrabold text-gray-800 bg-sy-500 px-4 py-2 my-2 rounded-sm text-sm sm:text-md lg:text-lg border-t-2 border-sy-400/50 shadow-sm hover:shadow-md active:shadow-none"
                        >
                            <Link href="/contact">
                                Request Service{" "}
                                <ArrowSmallRightIcon className="inline h-5 w-5" />
                            </Link>
                        </button>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <section id="services" className="bg-slate-400">
            <div className="container mx-auto flex flex-col items-center px-2 py-14 gap-8">
                {/* Section Heading */}
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-2 text-center">
                        {heading}
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-600 text-center">
                        View our list of offerings by service or room.
                    </p>
                </div>

                {/* Slider */}
                <ServicesSlider
                    selectedSide={selectedSide}
                    setSelectedSide={setSelectedSide}
                />

                {/* "Room" Slider Tab */}
                <ul
                    data-selected={selectedSide}
                    className="hidden data-[selected='right']:grid grid-cols-1 sm:grid-cols-2  gap-6"
                >
                    {roomsListItems}
                </ul>

                {/* "Service" Slider Tab */}

                <div
                    data-selected={selectedSide}
                    className="hidden data-[selected='left']:block"
                >
                    <ServicesBullets />
                </div>
            </div>
        </section>
    );
}
