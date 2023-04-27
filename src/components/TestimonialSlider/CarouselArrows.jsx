import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export function RightArrow({ increment }) {
    return (
        <button type="button" onClick={increment}>
            <ArrowRightIcon className={`text-gray-600/80 w-6 h-6`} />
        </button>
    );
}

export function LeftArrow({ decrement }) {
    return (
        <button type="button" onClick={decrement}>
            <ArrowLeftIcon className={`text-gray-600/80 w-6 h-6`} />
        </button>
    );
}
