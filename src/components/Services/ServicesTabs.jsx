import React from "react";
import { useState } from "react";

export default function ServicesTabs() {
    const [isVisibleTab, setIsVisibleTab] = useState("Room");
    const servicesTabs = ["Room", "Area", "Service"];
    const servicesTabsListItems = servicesTabs.map((tab, index) => {
        return (
            <li key={index} className="grow border-4 text-center">
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
        <div className="container mx-auto flex flex-col ">
            <div className="text-center">
                <h1>What we do</h1>
                <p>
                    View our handyman service offerings by room, area, or
                    service.
                </p>
            </div>
            <div className="border-4">
                <ul className="flex">{servicesTabsListItems}</ul>
                <ul className="flex justify-around">
                    {isVisibleTab === "Room" && roomsListItems}
                </ul>
            </div>
        </div>
    );
}
