import React from "react";
import Head from "next/head";
import NavigationBar from "@/components/Navigation/NavigationBar.jsx";
import AccentBorder from "@/components/Contact/AccentBorder";
import Image from "next/image";
import ContactSection from "@/components/Contact/ContactSection.jsx";
import Footer from "@/components/Footers/Footer.jsx";
import styles from "@/components/Services/ServiceBullets.module.css";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <header className="sticky top-0 z-40">
                <NavigationBar />
            </header>
            <main className="grow bg-gray-50">
                <div className="container flex flex-col mx-auto relative xl:flex-row xl:py-12 ">
                    {/* Section Heading */}
                    <div className="mb-10 flex flex-col items-center xl:hidden">
                        {" "}
                        <h1 className="mb-2 pt-14 text-center font-playful text-gray-700 text-3xl sm:text-4xl lg:text-5xl   ">
                            About
                        </h1>
                        <p className="text-xl text-gray-600 leading-6 sm:text-2xl lg:text-4xl font-medium">
                           The Island Handyman
                        </p>
                        <AccentBorder classes="my-8 w-24" />
                    </div>

                    {/* Image */}
                    <div className="relative z-10 max-w-3xl self-center">
                        <Image
                            src="/assets/new_truck.jpg"
                            alt="The Island Handyman truck"
                            className="rounded-md object-contain order-t-2 border-gray-300/50 shadow-lg"
                            priority
                            width={600}  // Set the width you want (in pixels)
                            height={400} // Set the height you want (in pixels)
                            sizes="100vw"
                        />
                    </div>

                    {/* Description Heading and Body Text */}
                    <div className="flex flex-col rounded-sm bg-slate-100 w-fit self-center rounded-b-md xl:rounded-none xl:rounded-e-md shadow-sm max-lg:max-w-xl lg:max-w-3xl xl:basis-3/5">
                        <div
                            className={`${styles.bricks} p-1 sm:p-2 xl:p-6 2xl:p-6 flex items-center justify-center rounded-t-lg`}
                        >
                            <h1
                                className={` hidden font-extrabold text-gray-700 xl:inline lg:self-center text-3xl sm:text-4xl xl:text-5xl`}
                            >
                                About
                            </h1>
                        </div>

                        <div className="p-2 sm:p-4 sm:pt-2 xl:px-6 2xl:p-8 2xl:pt-4 text-gray-500 text-lg lg:text-xl 2xl:text-2xl leading-12 tracking-wide px-2 first-letter:text-3xl first-letter:sm:text-4xl first-letter:lg:text-5xl first-letter:font-normal rounded-lg bg-white">
                            <span className="uppercase font-medium text-gray-600">
                                The Island Handyman
                            </span>{" "}
                            is your go-to local handyman for all your home
                            repair and maintenance needs. With a wide range of
                            services, including carpentry, plumbing, electrical,
                            and exterior home repair, we are
                            equipped to handle most every project on your &quot;to do&quot; list.
                            <AccentBorder classes="w-24 my-8 self-center text-center relative left-1/2 -translate-x-1/2 border-sy-500 " />
                            We take pride in providing exceptional customer
                            service and delivering high-quality workmanship that
                            exceeds your expectations. Contact The Island Handyman
                             today to schedule a consultation and let us
                            take care of all your home repair needs, including the ones you&apos;ve been putting off for years!
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </>
    );
}
