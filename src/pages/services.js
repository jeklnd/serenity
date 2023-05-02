import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import ServicesBullets from "@/components/Services/ServicesBullets.jsx";
import ContactInformation from "@/components/Contact/ContactInformation.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function services() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow flex flex-col bg-slate-200">
                <h1 className="text-3xl font-bold text-gray-700 text-center pt-8">
                    Services
                </h1>
                <ServicesBullets />
                <ContactInformation />
                <ContactSection />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
