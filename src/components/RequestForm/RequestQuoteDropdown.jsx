import React, { useId } from "react";
import RequestQuoteForm from "@/components/RequestForm/RequestQuoteForm.jsx";

export default function RequestQuoteDropdown({ isDroppedDown}) {
    const id = useId();

    return (
        <div
            data-open={isDroppedDown}
            className=" sm:px-4 -translate-y-full data-[open=true]:translate-y-0 transition flex justify-center items-start bg-transparent h-fit w-screen absolute z-0 sm:bg-transparent"
        >
            <div className="py-6 sm:py-10 px-2 relative bg-gray-300 sm:my-6 sm:m-4 rounded-b-md sm:rounded-md">
                <RequestQuoteForm isInDropdown={true} id={id} heading="Request Quote"/>
            </div>
        </div>
    );
}
