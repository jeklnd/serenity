import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import BeforeAfterSlider from "@/components/BeforeAfterSlider/BeforeAndAfters.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import ImageGallery from "@/components/ImageGallery/ImageGallery.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function about() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow">
                <div className="bg-gray-200">
                    {" "}
                    <h1 className="text-3xl font-bold text-gray-700 text-center pt-8">
                        Work
                    </h1>
                    <BeforeAfterSlider />
                </div>

                <ImageGallery />
                <ContactSection />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
