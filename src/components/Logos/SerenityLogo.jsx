import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SerenityLogo({ className = "" }) {
    return (
        <Link href="/" className={`relative h-32 w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 ${className}`}>
            <Image
                src="/assets/the_island_handyman_logo-removebg-preview.png"
                alt="The Island Handyman"
                fill
                className="object-contain rounded-full"
            />
        </Link>
    );
}
