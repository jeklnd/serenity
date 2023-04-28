import React from "react";
import RequestQuoteForm from "@/components/RequestForm/RequestQuoteForm.jsx";

export default function RequestQuoteModal({ isModalOpen }) {
    return (
        <div
            data-open={isModalOpen}
            className="-translate-y-full data-[open=true]:translate-y-0 transition flex justify-center items-start bg-gray-300 h-[80vh] w-screen absolute z-0"
        >
            <div className="py-8 px-2 max-w-[324px] absolute">
                <RequestQuoteForm />
            </div>
        </div>
    );
}
