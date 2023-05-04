import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import AccentBorder from "@/components/Contact/AccentBorder";
import Image from "next/image";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";
import aboutUsImage from "public/assets/about-us.jpg";
import styles from "@/components/Services/ServiceBullets.module.css";

export default function About() {
    return (
        <>
            <header className="sticky top-0 z-40">
                <NavBar />
            </header>
            <main className="grow bg-slate-400">
                <div className="container flex flex-col mx-auto relative xl:flex-row xl:py-12 ">
                    {/* Section Heading */}
                    <div className="mb-10 flex flex-col items-center xl:hidden">
                        {" "}
                        <h1 className="mb-2 pt-14 text-center font-extrabold text-gray-700 text-3xl sm:text-4xl lg:text-5xl   ">
                            About
                        </h1>
                        <p className="text-gray-600 text-center text-xl lg:text-2xl ">
                            We are Serenity Home Repair.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative z-10 max-w-3xl self-center">
                        <Image
                            src={aboutUsImage}
                            alt="image of Robert"
                            className="rounded-md object-contain order-t-2 border-gray-300/50 shadow-lg"
                        ></Image>
                    </div>

                    {/* Description Heading and Body Text */}
                    <div className="flex flex-col rounded-sm bg-slate-200 w-fit self-center rounded-b-md xl:rounded-none xl:rounded-e-md shadow-sm max-lg:max-w-xl lg:max-w-3xl xl:basis-3/5">
                        <div className={`${styles.bricks} p-1 sm:p-2 xl:p-6 2xl:p-6 flex items-center justify-center`}>
                            <h1
                                className={` hidden font-extrabold text-gray-700 xl:inline lg:self-center text-3xl sm:text-4xl xl:text-5xl`}
                            >
                                About
                            </h1>
                        </div>

                        <p className="p-2 sm:p-4 sm:pt-2 xl:px-6 2xl:p-8 2xl:pt-4 text-gray-500 text-lg lg:text-xl 2xl:text-2xl leading-12 tracking-wide px-2 first-letter:text-3xl first-letter:sm:text-4xl first-letter:lg:text-5xl first-letter:font-normal">
                            <span className="uppercase font-medium text-gray-600">
                                Serenity Home Repair
                            </span>{" "}
                            is your go-to local handyman for all your home
                            repair and maintenance needs. With a wide range of
                            services, including carpentry, plumbing, electrical,
                            and exterior home repair, our team of experts is
                            equipped to handle any project you have in mind.
     
                            <AccentBorder classes="w-24 my-8 self-center text-center relative left-1/2 -translate-x-1/2 border-sy-500 " />

                            We take pride in providing exceptional customer
                            service and delivering high-quality workmanship that
                            exceeds your expectations. Contact Serenity Home
                            Repair today to schedule a consultation and let us
                            take care of all your home repair needs.
                        </p>
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
