import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    const pages = ["About", "Services", "Work", "Contact"];
    const pagesListItems = pages.map((page, index) => {
        return (
            <li key={index}>
                <Link href={`/${page.toLowerCase()}`}>{page}</Link>
            </li>
        );
    });
    return (
        <nav className="bg-slate-500">
            <div className="container mx-auto flex justify-between">
                <Link href="/">
                    <Image src="" alt="Serenity Home Repair" />
                </Link>
                <ul className="flex">{pagesListItems}</ul>
                <div>
                    <p>610-613-4832</p>
                    <button>Request Quote</button>
                </div>
            </div>
        </nav>
    );
}
