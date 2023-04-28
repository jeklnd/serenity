import React from "react";
import { useState } from "react";

export default function ServicesSlider() {
    const [selectedSide, setSelectedSide] = useState("left");

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
            <div className="bg-slate-300 shadow-inner shadow-slate-400/40 rounded-full flex relative text-lg">
                {["Room", "Service"].map((category, index) => {
                    return (
                        <div
                            key={index}
                            className="rounded-full px-8 py-2 z-10 font-bold tracking-widest text-sm sm:text-md lg:text-lg text-gray-600"
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
                    className="shadow-sm bg-sy-500 rounded-full absolute data-[selected='right']:translate-x-full data-[selected='left']:px-8 transition h-full w-1/2"
                ></div>
            </div>

            {/* 
            <button
                className="bg-sy-500 rounded-md px-4 py-2 font-bold text-gray-700"
                onClick={handleClick}
                onTouchStart={(e) => {
                    console.log(e);
                }}
                onTouchEnd={(e) => {
                    console.log(e);
                }}
            >
                Toggle
            </button> */}
        </>
    );
}
