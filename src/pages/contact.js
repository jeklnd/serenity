import React from "react";
import Head from "next/head";
import NavigationBar from "@/components/Navigation/NavigationBar.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import Footer from "@/components/Footers/Footer.jsx";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
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
