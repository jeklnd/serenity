import React from "react";

export default function RequestQuoteBtn({ text, oneOffClasses = "", onClick }) {
    return (
        <button
            type="submit"
            className={`${oneOffClasses} w-fit font-extrabold text-gray-800 bg-[#ffc52f]/90 px-4 py-2 my-2 rounded-sm text-sm border-t-2 border-sy-400/50 shadow-sm hover:shadow-md active:shadow-none`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
