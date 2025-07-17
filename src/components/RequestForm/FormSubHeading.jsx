import React from "react";

export default function FormHeading({ heading }) {
    return (
        <div className="flex flex-col text-center gap-2 pb-4">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 font-['Fredoka_One']">
                {heading}
            </p>

        </div>
    );
}
