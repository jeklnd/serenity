import React from "react";
import Image from "next/image";
import SolidYellowButton from "@/components/Buttons/SolidYellowButton.jsx";
import { useRouter } from "next/router";

export default function HeroSection() {
    const router = useRouter();
    return (
        <section id="heroSection" className="relative">
            {/* Background Image */}
            <Image
                src="/assets/hero.jpg"
                alt="Handyman image"
                className="object-cover brightness-150 opacity-25"
                fill
                priority
                sizes="100vw"
            />

            {/* Heading, Subheading, and Button */}
            <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center p-4 gap-24 sm:gap-8 relative my-28">
                <div className="flex flex-col gap-8 lg:gap-12 text-center sm:text-left max-w-[22rem] sm:max-w-[32rem] lg:max-w-[38rem] py-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl  text-gray-800 font-bold leading-10 ">
                        Bring{" "}
                        <span className="underline decoration-sy-500 whitespace-nowrap">
                            peace of mind
                        </span>{" "}
                        <br />
                        to your home with{" "}
                        <span className="whitespace-nowrap">
                            Serenity Home Repair
                        </span>
                        .
                    </h1>
                    <p className="text-xl text-gray-600 leading-6 sm:text-2xl lg:text-4xl ">
                        We handle all your home repair needs so you don&apos;t
                        have to.
                    </p>
                    <SolidYellowButton
                        buttonText={"View Services"}
                        className="self-center sm:self-start lg:text-xl"
                        onClick={() => router.push("/services")}
                    />
                </div>
            </div>
        </section>
    );
}
