import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const arrow_styles =
    "text-gray-500 w-6 h-6 hover:text-gray-600 active:text-gray-700 transition";

export function RightArrow({ increment }) {
    return (
        <button type="button" onClick={increment}>
            <ArrowRightIcon className={arrow_styles} />
        </button>
    );
}

export function LeftArrow({ decrement }) {
    return (
        <button type="button" onClick={decrement}>
            <ArrowLeftIcon className={arrow_styles} />
        </button>
    );
}
