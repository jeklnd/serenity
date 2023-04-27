import React from "react";
import { testimonials } from "./data";

export default function CarouselDots({ isVisibleIndex }) {
    return (
        <div className="flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    data-active={index === isVisibleIndex}
                    className="text-center h-2 w-2 rounded-full bg-gray-600/50 data-[active=true]:bg-gray-600"
                    onClick={() => setIsVisibleIndex(index)}
                ></div>
            ))}
        </div>
    );
}
