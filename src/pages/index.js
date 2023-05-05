import NavigationBar from "@/components/Navigation/NavigationBar.jsx";
import HeroSection from "@/components/HeroSection/HeroSection.jsx";
import TestimonialSection from "@/components/Testimonials/TestimonialSection.jsx";
import ServicesSection from "@/components/Services/ServicesSection.jsx";
import MapSection from "@/components/MapSection/MapSection.jsx";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import Footer from "@/components/Footers/Footer.jsx";

export default function Home() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavigationBar />
            </header>
            <main className="grow flex flex-col justify-around">
                <HeroSection />
                <TestimonialSection />
                <ServicesSection heading="How we help" />
                <MapSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
