import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import BeforeAfterSlider from "@/components/BeforeAfterSlider/BeforeAfterSlider.jsx";
import ContactForm from "@/components/ContactForm/ContactForm.jsx";
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
                <BeforeAfterSlider />
                <ImageGallery />
                <ContactForm />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
