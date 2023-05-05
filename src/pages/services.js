import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import ServicesSection from "@/components/Services/ServicesSection.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import Footer from "@/components/Footers/Footer.jsx";

export default function Services() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow flex flex-col bg-slate-400">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-700 text-center pt-14 -mb-12 z-10">
                    Services
                </h1>
                <ServicesSection heading={""} />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
