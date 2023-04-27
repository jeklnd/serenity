import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavSidebar({ isOpen, onToggleMenu }) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(router.pathname);
    return (
        <>
            <div
                data-isopen={isOpen}
                className="-translate-x-full data-[isOpen=true]:translate-x-0 transition flex fixed top-0 left-0 h-screen w-screen overflow-hidden bg-gray-300 z-40 justify-center items-center "
            >
                {/* decorative lines*/}
                {/* <div className="fixed bottom-0 w-screen border-2 border-sy-500"></div> 
                <div className="fixed top-0 w-screen border-2 border-sy-500"></div>
                <div className="fixed left-0 h-screen border-2 border-sy-500"></div> */}
                <div className="fixed right-0 h-screen border-2 border-sy-500"></div>

                <div
                    data-isopen={isOpen}
                    className="hidden data-[isOpen=true]:block absolute top-0 w-screen h-12 z-50 text-gray-500 active:text-gray-700 hover:text-gray-700 pl-4 pt-9 text-2xl"
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
                                            ? href === isActive
                                            : isActive === "/"
                                    }
                                    className="p-2 tracking-wider text-gray-500 data-[active=true]:text-gray-700 data-[active=true]:font-medium text-2xl"
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
