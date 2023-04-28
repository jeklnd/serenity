import React, { useState } from "react";
import MenuButton from "./MenuButton.jsx";
import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import RequestQuoteBtn from "@/components/RequestForm/RequestQuoteBtn.jsx";
import NavSidebar from "./NavSidebar.jsx";
import RequestQuoteModal from "@/components/RequestForm/RequestQuoteModal.jsx";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="bg-gray-200 drop-shadow-md z-50 relative">
                <div className="fixed top-0 w-screen border-[1px] border-sy-500/50"></div>

                <div className="container mx-auto flex justify-between items-center p-4 gap-4">
                    <div className="flex items-center gap-4">
                        <MenuButton onOpenMenu={handleClick} />
                        <Logo />
                    </div>
                    <NavLinks />
                    <div className="flex flex-col gap-2 text-center">
                        <p className="font-bold text-gray-700 text-sm">
                            610-613-4832
                        </p>
                        <RequestQuoteBtn
                            text="Request Quote"
                            onToggleModal={handleButtonClick}
                        />
                    </div>
                </div>
                <NavSidebar isOpen={isOpen} onToggleMenu={handleClick} />
            </nav>
            <RequestQuoteModal isModalOpen={isModalOpen} />
        </>
    );
}
