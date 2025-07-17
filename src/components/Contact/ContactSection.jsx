import React, { useId } from "react";
import ContactInformation from "./ContactInformation.jsx";
import QuoteFormWithRecaptcha from "@/components/RequestForm/QuoteFormWithRecaptcha.jsx";

export default function ContactSection() {
    const id = useId();
    return (
        <section className=" bg-blue-900 ">
            <div className="bg-blue-50 w-screen flex justify-center relative overflow-hidden lg:py-16 md:p-2">
                <div className="w-full relative flex flex-col md:flex-row justify-center items-center z-10 ">
                    <ContactInformation classesFromParent="w-fit pt-12 pb-10 md:px-12 md:py-12 lg:px-12 lg:py-10  lg:bg-white rounded-md text-gray-700 lg:text-gray-700  lg:shadow-md" />
                    <div className="flex items-center px-2 py-4 lg:px-4 lg:py-6 lg:relative lg:-ml-8 lg:shadow-lg xl:px-6 xl:py-8 w-fit shadow-md rounded-lg bg-white">
                        <QuoteFormWithRecaptcha id={id} heading="Request Quote" />
                    </div>
                </div>
                <div className="absolute bottom-0 w-[300vw] h-1/2 lg:h-full bg-green-800 -rotate-[30deg] lg:-rotate-[15deg] translate-y-72 sm:max-lg:translate-x-12"></div>
            </div>
        </section>
    );
}
