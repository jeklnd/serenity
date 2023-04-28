import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import RequestQuoteForm from "@/components/RequestForm/RequestQuoteForm.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function about() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow flex flex-col">
                <RequestQuoteForm />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
