import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileMenu({ isOpen, onToggleMenu }) {
    const router = useRouter();
    const [isActiveRoute, setIsActiveRoute] = useState(router.pathname);
    const [xPosition, setXPosition] = useState(null);
    const handleSwipe = (e) => {
        e.changedTouches[0].clientX < xPosition && onToggleMenu();
    };
    return (
        <>
            <div
                data-isopen={isOpen}
                className="-translate-x-full data-[isOpen=true]:translate-x-0 transition flex fixed top-0 left-0 h-screen w-screen overflow-hidden bg-slate-500 z-50 justify-center items-center "
                onTouchStart={(e) => {
                    setXPosition(e.changedTouches[0].clientX);
                }}
                onTouchEnd={handleSwipe}
            >
                {/* Decorative Line*/}
                <div className="fixed top-0 w-screen border-2 border-sy-500"></div>

                <div
                    data-isopen={isOpen}
                    className="hidden data-[isOpen=true]:block absolute top-0 w-screen h-12 z-50 text-gray-700 active:text-gray-500 hover:text-gray-500 pl-8 pt-9 text-4xl font-bold"
                    onClick={onToggleMenu}
                >
                    X
                </div>
                <ul className="text-center">
                    {["Home", "About", "Services", "Work", "Contact"].map(
                        (page, index) => {
                            const href = `/${page.toLowerCase()}`;
                            return (
                                <li
                                    key={index}
                                    data-active={
                                        href !== "/home"
                                            ? href === isActiveRoute
                                            : isActiveRoute === "/" ||
                                              (href !== "/home" &&
                                                  isActiveRoute === "/success")
                                    }
                                    className="p-4 tracking-widest  text-gray-700 data-[active=true]:text-gray-300 data-[active=true]:font-medium text-4xl"
                                    onClick={onToggleMenu}
                                >
                                    <Link href={href !== "/home" ? href : "/"}>
                                        {page.toUpperCase()}
                                    </Link>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </>
    );
}
