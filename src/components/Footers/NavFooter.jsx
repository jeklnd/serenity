import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.svg";
import { useRouter } from "next/router";

export default function NavFooter() {
    // const [isActiveIndex, setIsActiveIndex] = useState()
    const router = useRouter();
    const path = router.pathname;
    const pages = ["Home", "About", "Services", "Work", "Contact"];
    const pagesListItems = pages.map((page, index) => {
        const href = `/${page.toLowerCase()}`;
        return (
            <li
                key={index}
                data-active={
                    href === path ||
                    (href === "/home" && path === "/") ||
                    (href === "/home" && path === "/success")
                }
                className="p-1 text-center text-[#54575a] data-[active=true]:text-gray-400 data-[active=true]:font-medium hover:text-gray-500 transition tracking-wider sm:px-2 md:px-3"
            >
                <Link href={href !== "/home" ? href : "/"}>
                    {page.toUpperCase()}
                </Link>
            </li>
        );
    });
    return (
        <section className="bg-slate-800 py-12 px-4">
            <div className="container mx-auto flex justify-center gap-20">
                <a className="relative h-36 w-36" href={"/"}>
                    <Image
                        src={logo}
                        alt="Serenity Home Repair Logo"
                        fill
                        className="object-contain"
                    />
                </a>
                <ul className="flex flex-col sm:flex-row sm:items-center">
                    {pagesListItems}
                </ul>
            </div>
        </section>
    );
}
