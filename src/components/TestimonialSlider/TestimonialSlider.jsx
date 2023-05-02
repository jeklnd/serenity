import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { testimonials } from "./data.js";
import Heading from "./TestimonialHeading.jsx";
import { LeftArrow, RightArrow } from "./CarouselArrows.jsx";
import TestimonialBio from "./TestimonialBio.jsx";
import CarouselDots from "./CarouselDots.jsx";
import QuotationMark from "./QuotationMark.jsx";

export default function TestimonialSlider() {
    const [isVisibleIndex, setIsVisibleIndex] = useState(0);

    const increment = useCallback(() => {
        isVisibleIndex < testimonials.length - 1
            ? setIsVisibleIndex(isVisibleIndex + 1)
            : setIsVisibleIndex(0);
    }, [isVisibleIndex]);

    const decrement = useCallback(() => {
        isVisibleIndex > 0
            ? setIsVisibleIndex(isVisibleIndex - 1)
            : setIsVisibleIndex(testimonials.length - 1);
    }, [isVisibleIndex]);

    const [xPosition, setXPosition] = useState(null);

    useEffect(() => {
        const interval = setInterval(increment, 12000);
        return () => clearInterval(interval);
    }, [isVisibleIndex, increment]);

    return (
        <section
            id="testimonials"
            className="bg-sy-400/80 px-4 py-14 min-h-[42rem] sm:min-h-[24rem]"
        >
            <Heading />
            <div className="container mx-auto flex justify-center items-stretch text-center max-w-xl sm:min-h-[20rem]">
                <LeftArrow decrement={decrement} />

                <ul
                    className="flex py-8 sm:py-8 px-2 sm:px-6 items-center"
                    onTouchStart={(e) => {
                        setXPosition(e.changedTouches[0].clientX);
                    }}
                    onTouchEnd={(e) => {
                        if (e.changedTouches[0].clientX > xPosition) {
                            decrement();
                        } else {
                            increment();
                        }
                    }}
                >
                    {testimonials.map((testimonial, index) => {
                        return (
                            <li
                                key={index}
                                data-visible={index === isVisibleIndex}
                                className="hidden data-[visible=true]:flex data-[visible=false]:opacity-0 flex-col gap-8 sm:gap-12 text-gray-800 tracking-wider leading-6 text-lg font-light transition"
                            >
                                <div className="flex [&>*:last-child]:self-end">
                                    <QuotationMark />
                                    <p className="text-sm font-normal text-gray-600 sm:text-md">
                                        {testimonial.text}
                                    </p>
                                    <QuotationMark />
                                </div>
                                <TestimonialBio
                                    name={testimonial.name}
                                    location={testimonial.location}
                                />
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
