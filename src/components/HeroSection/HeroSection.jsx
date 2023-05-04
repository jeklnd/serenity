import React from "react";
import TextStack from "./TextStack.jsx";
import hero from "/public/assets/hero.jpg";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="heroSection" className="relative">
            <Image
                src={hero}
                alt="Handyman image"
                className="object-cover brightness-150 opacity-25"
                fill
                priority
            />

            <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center p-4 gap-24 sm:gap-8 relative my-28">
                <TextStack />
            </div>
        </section>
    );
}
