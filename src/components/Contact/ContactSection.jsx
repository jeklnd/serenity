import React from "react";
import RequestQuoteForm from "src/components/RequestForm/RequestQuoteForm.jsx";

export default function ContactSection() {
    return (
        <div className="bg-slate-300 py-8">
            {" "}
            <h1 className="text-3xl font-bold text-gray-700 text-center py-8">
                Contact Us
            </h1>
            <RequestQuoteForm />
        </div>
    );
}
