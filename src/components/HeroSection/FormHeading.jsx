import React from "react";

export default function FormHeading() {
    return (
        <div className="flex flex-col text-center">
            <p className="text-lg font-semibold text-gray-700 pb-0.5">
                Request a complimentary quote
            </p>
            <p className="text-xs text-gray-400 pb-2">
                Submit your request and Serenity Home Repair will contact you
                via phone or email in 24-48 hours.
            </p>
        </div>
    );
}
