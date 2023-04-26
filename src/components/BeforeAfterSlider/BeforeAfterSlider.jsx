import React from "react";
import { useState } from "react";
import Image from "next/image";

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
    return (
        <div className="container mx-auto">
            <div className="flex justify-around">
                <p>←</p>
                <div className="flex flex-col">
                    <div className="flex justify-around">
                        <div>
                            <h1>Before</h1>
                            <Image src="" alt="Before image" />
                        </div>
                        <div>
                            <h1>After</h1>
                            <Image src="" alt="After image" />
                        </div>
                    </div>

                    <p>
                        Laurie was struggling to clean her deck and she knew
                        just who to call. Serenity Home Repair powerwashed and
                        prepped Laurie&apos;s desk and now it looks good as new.
                    </p>
                </div>
                <p>→</p>
            </div>
            <div className="flex justify-center">{dots()}</div>
        </div>
    );
}
