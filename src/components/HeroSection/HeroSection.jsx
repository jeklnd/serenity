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
                    <div className="mb-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playful text-sy-500 mb-4 tracking-wide leading-tight" style={{
                            textShadow: 
                                '-1px -1px 0 #0077cb, 1px -1px 0 #0077cb, -1px 1px 0 #0077cb, 1px 1px 0 #0077cb, ' +
                                '-2px -2px 0 #0077cb, 2px -2px 0 #0077cb, -2px 2px 0 #0077cb, 2px 2px 0 #0077cb'
                        }}>
                            <span className="block">The</span>
                            <span className="block">Island</span>
                            <span className="block">Handyman</span>
                        </h1>
                        <div className="w-full h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-xl text-gray-600 leading-6 sm:text-2xl lg:text-4xl font-medium">
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
