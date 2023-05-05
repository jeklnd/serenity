import React, { useId } from "react";
import ContactInformation from "./ContactInformation.jsx";
import RequestQuoteForm from "src/components/RequestForm/RequestQuoteForm.jsx";

export default function ContactSection() {
    const id = useId();
    return (
        <section className=" bg-slate-700 ">
            <div className="bg-slate-400 w-screen flex justify-center relative overflow-hidden lg:py-16 md:p-2">
                <div className="w-full relative flex flex-col md:flex-row justify-center items-center z-10 ">
                    <ContactInformation classesFromParent="w-fit pt-12 pb-10 md:px-12 md:py-12 lg:px-12 lg:py-10  lg:bg-slate-200 rounded-md text-gray-700 lg:text-gray-700  lg:shadow-md" />
                    <div className="flex items-center px-2 py-4 lg:px-4 lg:py-6 lg:relative lg:-mb-44 lg:-ml-10 lg:shadow-lg xl:px-6 xl:py-8 w-fit shadow:sm rounded-md  bg-slate-300">
                        <RequestQuoteForm id={id} heading="Request Quote" />
                    </div>
                </div>
                <div className="absolute bottom-0 w-[300vw] h-1/2 lg:h-full bg-slate-800 -rotate-[30deg] lg:-rotate-[15deg] translate-y-72 sm:max-lg:translate-x-12"></div>
            </div>
        </section>
    );
}
