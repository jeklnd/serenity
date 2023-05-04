import React from "react";

export default function FormHeading({ heading }) {
    return (
        <div className="flex flex-col text-center gap-2">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
                {heading}
            </p>
            <p className="text-sm sm:text-lg text-gray-500 pb-2">
                Submit your request and Serenity Home Repair will contact you
                via phone or email in 24-48 hours.
            </p>
        </div>
    );
}
