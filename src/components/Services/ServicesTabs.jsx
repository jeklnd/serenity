import React from "react";
import { useState } from "react";

export default function ServicesTabs() {
    const [isVisibleTab, setIsVisibleTab] = useState("Room");
    const servicesTabs = ["Room", "Area", "Service"];
    const servicesTabsListItems = servicesTabs.map((tab, index) => {
        return (
            <li key={index} className="grow text-center">
                <button
                    onClick={() => {
                        setIsVisibleTab(tab);
                    }}
                >
                    {tab}
                </button>
            </li>
        );
    });
    const rooms = [
        { name: "Bedroom", text: "lorem ipsum bedroom text here" },
        { name: "Bathroom", text: "lorem ipsum bedroom text here" },
        { name: "Kitchen", text: "lorem ipsum bedroom text here" },
    ];
    const roomsListItems = rooms.map((room, index) => {
        return (
            <li key={index} className="border-2">
                <p>{room.name}</p>
                <p>{room.text}</p>
                <button>View Services</button>
            </li>
        );
    });
    return (
        <section id="services" className="bg-gray-200">
            <div className="container mx-auto flex flex-col px-4 py-14 gap-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-700 mb-2">
                        How we help
                    </h1>
                    <p className="text-xl text-gray-600">
                        View our list of handyman service offerings by room,
                        area, or service.
                    </p>
                </div>
                <div className="border-4">
                    <ul className="flex">{servicesTabsListItems}</ul>
                    <ul className="flex justify-around">
                        {isVisibleTab === "Room" && roomsListItems}
                    </ul>
                </div>
            </div>
        </section>
    );
}
