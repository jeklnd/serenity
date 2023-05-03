import React from "react";
import ContactInformation from "./ContactInformation.jsx";
import ContactSectionForm from "./ContactSectionForm.jsx";

export default function ContactSection() {
    return (
        <section className=" bg-slate-700 ">
            <div className="bg-slate-400 w-screen flex justify-center relative overflow-hidden lg:py-16">
                <div className="w-full relative flex flex-col gap-0 md:flex-row justify-center items-center z-10 p-2">
                    <ContactInformation classesFromParent="pt-12 pb-6 sm:px-12 sm:py-12 w-fit lg:bg-slate-200 rounded-md text-gray-700 lg:text-gray-700 lg:px-14 lg:py-8 lg:shadow-md" />
                    <ContactSectionForm classesFromParent="py-6 lg:py-8 w-fit shadow:sm rounded-md lg:relative lg:-mb-40 lg:-ml-8 bg-slate-300 lg:shadow-lg" heading="Request Quote"/>
                </div>
                <div className="absolute bottom-0 w-[300vw] h-1/2 lg:h-full bg-slate-800 -rotate-[30deg] lg:-rotate-[15deg] translate-y-72 sm:max-lg:translate-x-12"></div>
            </div>
        </section>
    );
}
