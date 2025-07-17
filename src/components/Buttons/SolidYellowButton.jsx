import React from "react";

export default function SolidYellowButton({
    buttonText,
    className = "",
    onClick,
}) {
    return (
        <button
            type="submit"
            className={`${className} w-fit font-extrabold text-white bg-green-500 px-4 py-2 my-2 rounded-lg text-sm sm:text-md lg:text-lg shadow-sm hover:shadow-md active:shadow-none hover:bg-green-600 transition-colors`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}
