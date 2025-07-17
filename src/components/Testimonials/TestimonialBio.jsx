import React from "react";
import Image from "next/image";

export default function TestimonalBio({ name, location }) {
    return (
        <div className="flex justify-center gap-4">
            <Image
                src="/assets/the_island_handyman_logo-removebg-preview.png"
                alt="The Island Handyman Logo"
                className="h-20 w-20 rounded-full"
                width={80}
                height={80}
            />
            <div>
                <p className="font-bold text-gray-600">{name}</p>
                <p className="text-sm font-normal text-gray-600">{location}</p>
            </div>
        </div>
    );
}
