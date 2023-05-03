import React, { useId } from "react";
import RequestQuoteForm from "src/components/RequestForm/RequestQuoteForm.jsx";

export default function ContactSectionForm({ classesFromParent, heading }) {
    const id = useId();

    return (
        <div className={`flex items-center ${classesFromParent}`}>
            {/* <h1 className="text-3xl font-bold text-gray-700 text-center p-4">
                Contact Us
            </h1> */}
            <RequestQuoteForm id={id} heading={heading} />
        </div>
    );
}
