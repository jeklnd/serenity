import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
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
            <main className="grow flex flex-col items-center bg-gray-300">
                <h1 className="text-3xl font-bold text-gray-700 text-center py-8">
                    About
                </h1>
                <div className="container gap-4 flex flex-col md:flex-row p-2">
                    <Image
                        src={aboutUsImage}
                        alt="image of Robert"
                        className="rounded-sm object-contain max-h-72 sm:max-h-96"
                    ></Image>

                    <p className="text-gray-600 text-md">
                        Serenity Home Repair is your go-to local handyman for
                        all your home repair and maintenance needs. With a wide
                        range of services, including carpentry, plumbing,
                        electrical, and exterior home repair, our team of
                        experts is equipped to handle any project you have in
                        mind. Whether you need a simple repair or a full kitchen
                        or bathroom remodel, our skilled professionals have the
                        experience and knowledge to get the job done efficiently
                        and effectively. <br />
                        <br />
                        We take pride in providing exceptional customer service
                        and delivering high-quality workmanship that exceeds
                        your expectations. Contact Serenity Home Repair today to
                        schedule a consultation and let us take care of all your
                        home repair needs.
                    </p>
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
