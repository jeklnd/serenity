import React from "react";
import { useState } from "react";
import Image from "next/image";
import { couples } from "./data.js";

export default function BeforeAfterSlider() {
    const [numberOfSlides, setNumberOfSlides] = useState(4);
    const dots = () => {
        const dotsArray = [];
        for (let i = numberOfSlides; i > -1; i--) {
            dotsArray.push(
                <div
                    key={i}
                    className="bg-slate-300 rounded-full h-2 w-2"
                ></div>
            );
        }
        return dotsArray;
    };
    const beforeAfterListItems = couples.map((couple, index) => {
        return (
            <li key={index}>
                <figure className="flex justify-center gap-2 text-md text-center font-medium tracking-wider text-gray-600">
                    <div>
                        <h2>BEFORE</h2>
                        <Image
                            src={couple.before}
                            alt=""
                            className="rounded-sm "
                        />
                    </div>
                    <div>
                        <h2>AFTER</h2>
                        <Image
                            src={couple.after}
                            alt=""
                            className="rounded-sm "
                        />
                    </div>
                </figure>
                <figcaption className="text-xs text-gray-500 text-center">
                    {couple.description}
                </figcaption>
            </li>
        );
    });
    return (
        <div className="container mx-auto px-2 py-8 ">
            <div className="flex justify-around">
                {/* <p>←</p> */}
                <ul className="flex flex-col gap-12">{beforeAfterListItems}</ul>
                {/* <p>→</p> */}
            </div>
            {/* <div className="flex justify-center">{dots()}</div> */}
        </div>
    );
}
