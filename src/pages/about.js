import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import AccentBorder from "@/components/Contact/AccentBorder";
import Image from "next/image";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";
import aboutUsImage from "public/assets/about-us.jpg";

export default function about() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow bg-slate-400">
                {/* <div className="overflow-hidden h-screen w-screen bg-transparent relative">
                    <div className="bg-[url('/assets/about-us.jpg')] bg-no-repeat bg-cover top-0 absolute"></div>
                </div> */}
                <div className="container flex flex-col lg:flex-row mx-auto p-2 lg:py-12 relative">
                    <h1 className="lg:hidden text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-700 text-center py-4">
                        About
                    </h1>
                    <AccentBorder classes="lg:hidden self-center mb-6" />
                    <div className="relative lg:basis-3/5 z-10">
                        <Image
                            src={aboutUsImage}
                            alt="image of Robert"
                            className="rounded-sm object-contain relative lg:right-0 lg:top-4"
                        ></Image>
                    </div>

                    <div className="bg-slate-300 lg:absolute lg:-right-0 lg:w-full lg:flex lg:justify-end lg:top-1/2 lg:-translate-y-1/2 lg:my-4 lg:pb-4 ">
                        <div className="max-lg:max-w-lg lg:max-w-sm lg:basis-1/2">
                            <h1 className="hidden lg:block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-700 text-center py-4">
                                About
                            </h1>
                            <p className="text-gray-600 text-lg px-2">
                                Serenity Home Repair is your go-to local
                                handyman for all your home repair and
                                maintenance needs. With a wide range of
                                services, including carpentry, plumbing,
                                electrical, and exterior home repair, our team
                                of experts is equipped to handle any project you
                                have in mind. <br />
                                <br />
                                We take pride in providing exceptional customer
                                service and delivering high-quality workmanship
                                that exceeds your expectations. Contact Serenity
                                Home Repair today to schedule a consultation and
                                let us take care of all your home repair needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <ContactSection />
                </div>
            </main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
