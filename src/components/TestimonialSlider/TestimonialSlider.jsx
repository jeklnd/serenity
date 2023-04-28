import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "public/assets/logo.svg";
import { testimonials } from "./data.js";
import Heading from "./Heading.jsx";
import { LeftArrow, RightArrow } from "./CarouselArrows.jsx";
import CarouselDots from "./CarouselDots.jsx";
import QuotationMark from "./QuotationMark.jsx";

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
    const [xPosition, setXPosition] = useState(null);

    return (
        <section
            id="testimonials"
            className="bg-sy-400/80 px-4 py-14 min-h-[42rem] sm:min-h-[24rem]"
        >
            <Heading />
            <div className="container mx-auto flex justify-center items-stretch text-center max-w-xl min-h-[32rem] sm:min-h-[24rem]">
                <LeftArrow decrement={decrement} />

                <ul
                    className="flex py-12 px-2 sm:px-6 items-center"
                    onTouchStart={(e) => {
                        setXPosition(e.changedTouches[0].clientX);
                    }}
                    onTouchEnd={(e) => {
                        if (e.changedTouches[0].clientX < xPosition) {
                            increment();
                        } else {
                            decrement();
                        }
                    }}
                >
                    {testimonials.map((testimonial, index) => {
                        return (
                            <li
                                key={index}
                                data-visible={index === isVisibleIndex}
                                className="hidden data-[visible=true]:flex data-[visible=false]:opacity-0 flex-col gap-12 text-gray-800 tracking-wider leading-6 text-lg font-light transition"
                            >
                                <div className="flex [&>*:last-child]:self-end gap-2">
                                    <QuotationMark />
                                    <p className="text-md">
                                        {testimonial.text}
                                    </p>
                                    <QuotationMark />
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
                        );
                    })}
                </ul>
                <RightArrow increment={increment} />
            </div>
            <CarouselDots
                isVisibleIndex={isVisibleIndex}
                onViewTestimonial={setIsVisibleIndex}
            />
        </section>
    );
}
