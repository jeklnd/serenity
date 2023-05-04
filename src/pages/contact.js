import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import ContactInformation from "@/components/Contact/ContactInformation.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function Contact() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow flex flex-col bg-slate-800">
                {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-2 text-center pt-14">
                    Contact
                </h1> */}
                <ContactSection />
                {/* <ContactInformation /> */}
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
