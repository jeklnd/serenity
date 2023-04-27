import React from "react";

export default function RequestQuoteBtn({ text }) {
    return (
        <button
            type="button"
            className="font-extrabold text-gray-800 bg-[#ffc52f]/90 px-4 py-2 rounded-sm text-sm"
        >
            {text}
        </button>
    );
}
