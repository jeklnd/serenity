import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar.jsx";
import HeroSection from "@/components/HeroSection/HeroSection.jsx";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider.jsx";
import ServicesSection from "@/components/Services/ServicesSection.jsx";
import Map from "@/components/Map/Map.jsx";
import RequestQuoteForm from "@/components/RequestForm/RequestQuoteForm.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

const inter = Inter({ subsets: ["latin"] });

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
                <div className=" bg-slate-400">
                    <div className="container mx-auto text-center">
                        <p>
                            Proudly serving all Montgomery County postal codes
                            including Conshohocken, Plymouth Meeting, Lafayette
                            Hill, and more.
                        </p>
                    </div>
                </div>
                <Map />
                <RequestQuoteForm />
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
