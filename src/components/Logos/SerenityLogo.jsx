import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.svg";

export default function SerenityLogo({ className = "" }) {
    return (
        <Link href="/" className={className}>
            <Image
                src={logo}
                alt="Serenity Home Repair"
                fill
                className="object-contain"
            />
        </Link>
    );
}
