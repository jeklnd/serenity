import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import ServicesCards from "@/components/Services/ServicesCards.jsx";
import ContactInformation from "@/components/ContactInformation/ContactInformation.jsx";
import RequestQuoteForm from "@/components/RequestForm/RequestQuoteForm.jsx";
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
                <ServicesCards />
                <ContactInformation />
                <RequestQuoteForm />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
