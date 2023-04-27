import React from "react";
import TextStack from "./TextStack.jsx";
import FormHeading from "./FormHeading.jsx";
import RequestForm from "@/components/RequestForm/RequestForm.jsx";
import hero from "/public/assets/hero.jpg";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative">
            <Image
                src={hero}
                alt="Handyman image"
                className="object-cover"
                style={{ filter: "brightness(1.5) opacity(0.25)" }}
                fill
            />

            <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center p-4 gap-24 sm:gap-8 relative my-16">
                <TextStack />
                <div className="border-2 border-gray-400 rounded-md px-6 py-8 bg-gray-50 drop-shadow-md basis-10/12 max-w-[20rem] sm:min-w-[20rem]">
                    <FormHeading />
                    <RequestForm />
                </div>
            </div>
        </div>
    );
}
