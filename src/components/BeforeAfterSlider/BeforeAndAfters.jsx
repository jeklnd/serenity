import React from "react";
import { useState } from "react";
import Image from "next/image";
import { couples } from "./data.js";
import AccentBorder from "@/components/Contact/AccentBorder.jsx";

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
    const heading_styles = "text-xl sm:text-xl md:text-2xl lg:text-4xl p-2 font-bold tracking-widest text-gray-700";
    const beforeAfterListItems = couples.map((couple, index) => {
        return (
            <li key={index}>
                <figure className="flex flex-col min-[400px]:flex-row justify-center gap-2 text-center  ">
                    <div>
                        <h2 className={heading_styles}>BEFORE</h2>
                        <Image
                            src={couple.before}
                            alt=""
                            className="rounded-sm "
                        />
                    </div>
                    <div>
                        <h2 className={heading_styles}>AFTER</h2>
                        <Image
                            src={couple.after}
                            alt=""
                            className="rounded-sm "
                        />
                    </div>
                </figure>
                <figcaption className="text-lg sm:text-xl lg:text-2xl text-gray-700 p-2 max-w-4xl">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium color pt-2">How we helped</h3>
                    <p className="text-gray-600">{couple.description}</p>
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
