import React from "react";

export default function MobileMenuButton({onOpenMenu}) {
    return (
        <button type="button" className="flex flex-col gap-1" onClick={onOpenMenu}>
            <div className="h-0.5 w-4 bg-gray-600 sm:hidden"></div>
            <div className="h-0.5 w-4 bg-gray-600 sm:hidden"></div>
            <div className="h-0.5 w-4 bg-gray-600 sm:hidden"></div>
        </button>
    );
}
