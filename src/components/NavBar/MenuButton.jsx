import React from "react";

export default function MenuButton() {
    return (
        <button type="button" className="flex flex-col gap-1">
            <div className="h-0.5 w-4 bg-gray-600 sm:hidden"></div>
            <div className="h-0.5 w-4 bg-gray-600 sm:hidden"></div>
            <div className="h-0.5 w-4 bg-gray-600 sm:hidden"></div>
        </button>
    );
}
