import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import AccentBorder from "@/components/Contact/AccentBorder.jsx";
import BeforeAndAfters from "@/components/BeforeAfterSlider/BeforeAndAfters.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import ImageGallery from "@/components/ImageGallery/ImageGallery.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function Work() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
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
                    <AccentBorder classes="my-8 w-24"/>
                    <BeforeAndAfters />
                </div>

                {/* <ImageGallery /> */}
                <ContactSection />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
