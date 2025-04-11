import React, { useId } from "react";
import QuoteFormWithRecaptcha from "@/components/RequestForm/QuoteFormWithRecaptcha.jsx";

export default function DropdownForm({ isDropped, onClick }) {
    const id = useId();

    return (
        <div>
            <div
                data-dropped={isDropped}
                className=" sm:px-4 -translate-y-full data-[dropped=true]:translate-y-0 transition flex justify-center items-start bg-transparent h-fit w-screen absolute z-0 sm:bg-transparent"
            >
                <div className="py-6 sm:py-10 px-2 relative bg-gray-300 sm:my-6 sm:m-4 rounded-b-md sm:rounded-md">
                    <QuoteFormWithRecaptcha
                        isInDropdown={true}
                        id={id}
                        heading="Request Quote"
                    />
                </div>
            </div>
            <div
                data-dropped={isDropped}
                className="invisible data-[dropped=true]:visible absolute h-screen w-screen bg-black/80 -z-10 transition"
                onClick={onClick}
            />
        </div>
    );
}
