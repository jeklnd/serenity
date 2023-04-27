import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "public/assets/logo.svg";
import { testimonials } from "./data.js";
import Heading from "./Heading.jsx";
import { LeftArrow, RightArrow } from "./CarouselArrows.jsx";
import CarouselDots from "./CarouselDots.jsx";

export default function TestimonialSlider() {
    const [isVisibleIndex, setIsVisibleIndex] = useState(0);
    const increment = () => {
        isVisibleIndex < testimonials.length - 1
            ? setIsVisibleIndex(isVisibleIndex + 1)
            : setIsVisibleIndex(0);
    };
    const decrement = () => {
        isVisibleIndex > 0
            ? setIsVisibleIndex(isVisibleIndex - 1)
            : setIsVisibleIndex(testimonials.length - 1);
    };

    return (
        <section id="testimonials" className="bg-sy-400/80 px-4 py-14 min-h-[42rem] sm:min-h-[24rem]">
            <Heading />
            <div className="container mx-auto flex justify-center items-stretch text-center max-w-xl min-h-[32rem] sm:min-h-[24rem]">
                <LeftArrow decrement={decrement} />

                <ul className="flex py-6 px-2 sm:px-6 items-center">
                    {testimonials.map((testimonial, index) => {
                        return (
                            index === isVisibleIndex && (
                                <li
                                    key={index}
                                    className="flex flex-col gap-6 text-gray-800 tracking-wider leading-6 text-lg font-light"
                                >
                                    <div>
                                        {/* <div className="text-5xl text-sy-800 font-bold">
                                            &quot;
                                        </div> */}
                                        <p>&quot;{testimonial.text}&quot;</p>
                                        {/* <div className="text-5xl text-sy-800 font-bold">
                                            &quot;
                                        </div> */}
                                    </div>

                                    <div className="flex justify-center gap-4">
                                        <Image
                                            src={logo}
                                            alt="Serenity Home Repair Logo"
                                            className="h-12 w-12"
                                        ></Image>
                                        <div>
                                            <p className="font-bold text-gray-600">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm font-normal text-gray-600">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            )
                        );
                    })}
                </ul>
                <RightArrow increment={increment} />
            </div>
            <CarouselDots isVisibleIndex={isVisibleIndex} />
        </section>
    );
}
