import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FooterLinks({ className }) {
    const router = useRouter();
    const pathname = router.pathname;
    const links = ["Home", "About", "Services", "Work", "Contact"].map(
        (page, index) => {
            const href = `/${page.toLowerCase()}`;
            return (
                <li
                    key={index}
                    data-active={
                        href === pathname ||
                        (href === "/home" &&
                            (pathname === "/" || pathname === "/success"))
                    }
                    className={`text-lg lg:text-2xl md:text-xl p-1 text-center text-[#54575a] data-[active=true]:text-gray-400 data-[active=true]:font-medium hover:text-gray-500 transition tracking-wider sm:px-2 md:px-3 ${className}`}
                >
                    <Link href={href === "/home" ? "/" : href}>
                        {page.toUpperCase()}
                    </Link>
                </li>
            );
        }
    );
    return (
        <ul className="flex flex-col sm:flex-row sm:items-center">{links}</ul>
    );
}
