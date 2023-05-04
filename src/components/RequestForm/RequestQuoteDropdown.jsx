import React, { useId } from "react";
import RequestQuoteForm from "@/components/RequestForm/RequestQuoteForm.jsx";

export default function RequestQuoteDropdown({ isDroppedDown}) {
    const id = useId();

    return (
        <div
            data-open={isDroppedDown}
            className="-translate-y-full data-[open=true]:translate-y-0 transition flex justify-center sm:px-4 items-start bg-gray-300 h-fit w-screen absolute z-0 sm:bg-transparent overflow-y-scroll min-h-0"
        >
            <div className="sm:py-10 sm:px-2 relative bg-gray-300 my-6 sm:m-4 rounded-md">
                <RequestQuoteForm isInDropdown={true} id={id} heading="Request Quote"/>
            </div>
        </div>
    );
}
