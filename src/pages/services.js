import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import ServicesCards from "@/components/Services/ServicesCards.jsx";
import ContactForm from "@/components/ContactForm/ContactForm.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function services() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow flex flex-col">
                <h1 className="text-3xl font-bold text-gray-800 text-center">Services</h1>
                <ServicesCards />
                <ContactForm />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
