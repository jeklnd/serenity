import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import ContactForm from "@/components/ContactForm/ContactForm.jsx";

import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function about() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="grow flex flex-col">
                <h1>
                    What is Serenity Home Repair? What is the mission of
                    Serenity Home Repair? What is the background of serenity
                    Home repair? Why should I hire serenity home repair?
                </h1>
                <ContactForm />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
