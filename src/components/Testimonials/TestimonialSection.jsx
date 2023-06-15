import React, { useState, useEffect, useCallback } from "react";
import { testimonials } from "./data.js";
import { LeftArrow, RightArrow } from "./CarouselArrows.jsx";
import TestimonialBio from "./TestimonialBio.jsx";
import CarouselDots from "./CarouselDots.jsx";
import QuotationMark from "./QuotationMark.jsx";
import styles from "./TestimonialSlider.module.css";

export default function TestimonialSection() {
    const [isVisibleIndex, setIsVisibleIndex] = useState(0);
    const [xPosition, setXPosition] = useState(null);

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

    useEffect(() => {
        const interval = setInterval(increment, 12000);
        return () => clearInterval(interval);
    }, [isVisibleIndex, increment]);

    const handleTouchStart = (e) => {
        setXPosition(e.changedTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (e.changedTouches[0].clientX > xPosition) {
            decrement();
        } else {
            increment();
        }
    };

    return (
        <section
            id="testimonials"
            className={`${styles.bg} flex flex-col justify-center`}
        >
            <h2
                className={`mt-12 mb-8 text-center font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-700`}
            >
                Our clients love us.
            </h2>
            <div className={`pb-10 px-2  gap-4 flex flex-col justify-center`}>
                <div className="container mx-auto flex justify-center items-stretch text-center max-w-xl">
                    <LeftArrow decrement={decrement} />
                    <ul
                        className="flex"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <QuotationMark />
                        {testimonials.map((testimonial, index) => {
                            return (
                                <li key={index}>
                                    <div
                                        data-visible={index === isVisibleIndex}
                                        className="hidden data-[visible=true]:flex flex-col max-[375px]:min-h-[600px] max-[426px]:min-h-[560px] min-h-[450px] gap-8 sm:gap-12 text-gray-800 tracking-wider leading-6 text-lg font-light transition"
                                    >
                                        <div className="grow flex items-center">
                                            <p className="text-sm  min-[425px]:text-lg lg:text-xl font-normal text-gray-600 italic leading-6">
                                                {testimonial.text}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-6">
                                            <TestimonialBio
                                                name={testimonial.name}
                                                location={testimonial.location}
                                            />
                                            <CarouselDots
                                                isVisibleIndex={isVisibleIndex}
                                                onViewTestimonial={
                                                    setIsVisibleIndex
                                                }
                                            />
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                        <QuotationMark className="self-end pb-24" />
                    </ul>
                    <RightArrow increment={increment} />
                </div>
            </div>
        </section>
    );
}
