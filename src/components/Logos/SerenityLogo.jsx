import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SerenityLogo({ className = "" }) {
    return (
        <Link href="/" className={className}>
            <Image
                src="/assets/logo.svg"
                alt="Serenity Home Repair"
                fill
                className="object-contain"
            />
        </Link>
    );
}
