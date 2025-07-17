import React from "react";
import { useState } from "react";

export default function ServicesSlider({selectedSide, setSelectedSide}) {
    const [xPosition, setXPosition] = useState(null);

    const handleSwipe = (e) => {
        if (e.changedTouches[0].clientX < xPosition) {
            setSelectedSide("left");
            setXPosition(e.changedTouches[0].clientX);
        } else {
            setSelectedSide("right");
            setXPosition(e.changedTouches[0].clientX);
        }
    };

    return (
        <>
            <div className="bg-white shadow-lg border border-sy-200 rounded-full flex relative text-lg cursor-pointer">
                {["Service", "Room"].map((category, index) => {
                    return (
                        <div
                            key={index}
                            className="rounded-full px-8 py-2 z-10 font-bold tracking-widest text-sm sm:text-md lg:text-lg text-gray-700 "
                            onClick={() => 
                                index === 0
                                    ? setSelectedSide("left")
                                    : setSelectedSide("right")
                            }
                            onTouchStart={(e) => {
                                setXPosition(e.changedTouches[0].clientX);
                            }}
                            onTouchEnd={handleSwipe}
                        >
                            {category.toUpperCase()}
                        </div>
                    );
                })}

                <div
                    data-selected={selectedSide}
                    className="shadow-md bg-sy-500 rounded-full absolute data-[selected='right']:translate-x-full data-[selected='left']:px-8 transition h-full w-1/2"
                ></div>
            </div>

            {/* 
            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={() => setSelectedSide("left")}
                    className={`px-4 py-2 rounded ${
                        selectedSide === "left"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Services
                </button>
                <button
                    onClick={() => setSelectedSide("right")}
                    className={`px-4 py-2 rounded ${
                        selectedSide === "right"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Rooms
                </button>
            </div>
            */}
        </>
    );
}
