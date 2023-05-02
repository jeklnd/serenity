import React from "react";
import RequestQuoteForm from "@/components/RequestForm/RequestQuoteForm.jsx";

export default function RequestQuoteDropdown({ isDroppedDown }) {
    return (
        <div
            data-open={isDroppedDown}
            className="-translate-y-full data-[open=true]:translate-y-0 transition flex justify-center items-start bg-gray-300 h-fit w-screen absolute z-0"
        >
            <div className="py-8 px-2 relative">
                <RequestQuoteForm isInDropdown={true} />
            </div>
        </div>
    );
}
