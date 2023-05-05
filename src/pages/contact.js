import React from "react";
import NavigationBar from "@/components/Navigation/NavigationBar.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import Footer from "@/components/Footers/Footer.jsx";

export default function Contact() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavigationBar />
            </header>
            <main className="grow flex flex-col bg-slate-800">
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
