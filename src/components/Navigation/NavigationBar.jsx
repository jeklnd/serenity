import React, { useState } from "react";
import MobileMenuButton from "./MobileMenuButton.jsx";
import SerenityLogo from "@/components/Logos/SerenityLogo.jsx";
import Links from "./Links.jsx";
import SolidYellowButton from "@/components/Buttons/SolidYellowButton.jsx";
import MobileMenu from "./MobileMenu.jsx";
import DropdownForm from "./DropdownForm.jsx";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropped, setIsDropped] = useState(false);

    const handleButtonClick = () => {
        setIsDropped(!isDropped);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="bg-orange-50 drop-shadow-md z-40 relative">
                <div className="fixed top-0 w-screen border-2 border-orange-500"></div>

                <div className="container mx-auto flex justify-between items-center p-4 gap-4">
                    <div className="flex items-center gap-4">
                        <MobileMenuButton onOpenMenu={handleClick} />
                        <SerenityLogo className="relative h-[4.5rem] w-[4.5rem] lg:h-28 lg:w-28" />
                    </div>
                    <Links />
                    <div className="flex flex-col gap-2 text-center">
                        <p className="font-bold text-gray-700 text-sm lg:text-xl">
                            610-613-4832
                        </p>
                        <SolidYellowButton
                            buttonText="Request Quote"
                            className="lg:text-xl"
                            onClick={handleButtonClick}
                        />
                    </div>
                </div>
                <MobileMenu isOpen={isOpen} onToggleMenu={handleClick} />
            </nav>
            <DropdownForm isDropped={isDropped} onClick={handleButtonClick} />
        </>
    );
}
