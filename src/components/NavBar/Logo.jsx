import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.svg";

export default function Logo() {
    return (
        <Link href="/" className="relative h-[4.5rem] w-[4.5rem]">
            <Image
                src={logo}
                alt="Serenity Home Repair"
                fill
                className="object-contain"
            />
        </Link>
    );
}
