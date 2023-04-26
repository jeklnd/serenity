import React from "react";
import NavBar from "@/components/NavBar/NavBar.jsx";
import NavFooter from "@/components/Footers/NavFooter.jsx";
import CopyrightFooter from "@/components/Footers/CopyrightFooter.jsx";

export default function about() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="grow flex flex-col justify-around"></main>
            <footer>
                <NavFooter />
                <CopyrightFooter />
            </footer>
        </>
    );
}
