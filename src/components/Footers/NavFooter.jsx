import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavFooter() {
    return (
        <div className="bg-slate-500">
            <div className="container mx-auto flex justify-around">
                <Image src="" alt="Serenity Home Repair Logo" />
                <ul>
                    {["Home", "About", "Services", "Work", "Contact"].map(
                        (page, index) => {
                            return (
                                <li key={index}>
                                    <Link href={`/${page.toLowerCase()}`}>
                                        {page}
                                    </Link>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </div>
    );
}
