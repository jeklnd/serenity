import React from "react";
import Head from "next/head";
import NavigationBar from "@/components/Navigation/NavigationBar.jsx";
import AccentBorder from "@/components/Contact/AccentBorder.jsx";
import BeforeAndAfters from "@/components/BeforeAfterSlider/BeforeAndAfters.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import Footer from "@/components/Footers/Footer.jsx";

export default function Work() {
    return (
        <>
            <Head>
                <title>Work</title>
            </Head>
            <header className="sticky top-0 z-40">
                <NavigationBar />
            </header>
            <main className="grow">
                <div className="bg-slate-400 flex flex-col items-center">
                    {" "}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-700 mb-2 text-center pt-14">
                        Work
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-600 text-center">
                        Your home before serenity and after.
                    </p>
                    <AccentBorder classes="my-8 w-24" />
                    <BeforeAndAfters />
                </div>
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
