import React from "react";
import Image from "next/image";
import logo from "public/assets/logo.svg";

export default function TestimonalBio({ name, location }) {
    return (
        <div className="flex justify-center gap-4">
            <Image
                src={logo}
                alt="Serenity Home Repair Logo"
                className="h-12 w-12"
            ></Image>
            <div>
                <p className="font-bold text-gray-600">{name}</p>
                <p className="text-sm font-normal text-gray-600">{location}</p>
            </div>
        </div>
    );
}
