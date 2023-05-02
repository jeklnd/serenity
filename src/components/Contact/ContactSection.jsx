import React, {useId} from "react";
import RequestQuoteForm from "src/components/RequestForm/RequestQuoteForm.jsx";

export default function ContactSection() {
    const id = useId();
    return (
        <div className="bg-slate-400 py-8">
            <div className="bg-slate-300 w-fit mx-auto py-6 rounded-sm shadow-md">
                <h1 className="text-3xl font-bold text-gray-700 text-center p-4">
                    Contact Us
                </h1>
                <RequestQuoteForm id={id} />
            </div>
        </div>
    );
}
