import NavBar from "@/components/NavBar/NavBar.jsx";
import HeroSection from "@/components/HeroSection/HeroSection.jsx";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider.jsx";
import ServicesSection from "@/components/Services/ServicesSection.jsx";
import ProudlyServing from "@/components/Map/ProudlyServing.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function Home() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow flex flex-col justify-around">
                <HeroSection />
                <TestimonialSlider />
                <ServicesSection />
                <ProudlyServing />
                <ContactSection />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
