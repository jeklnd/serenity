import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLinks() {
    const router = useRouter();
    const [isActive, setIsActive] = useState(router.pathname);

    const pages = ["About", "Services", "Work", "Contact"];
    const pagesListItems = pages.map((page, index) => {
        const href = `/${page.toLowerCase()}`;
        const pageName = page.toUpperCase();
        return (
            <li
                key={index}
                className="p-2 font-normal tracking- text-gray-500 data-[active=true]:text-gray-700"
                data-active={href === isActive}
            >
                <Link href={href}>{pageName}</Link>
            </li>
        );
    });
    return <ul className="hidden sm:flex">{pagesListItems}</ul>;
}
