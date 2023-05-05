import React from "react";
import { testimonials } from "./data";

export default function CarouselDots({ isVisibleIndex, onViewTestimonial }) {
    return (
        <div className="flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    data-active={index === isVisibleIndex}
                    className="text-center h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-gray-600/50 data-[active=true]:bg-gray-600 cursor-pointer hover:bg-gray-500/50 transition"
                    onClick={() => onViewTestimonial(index)}
                ></div>
            ))}
        </div>
    );
}
