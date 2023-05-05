import React from "react";
import SerenityLogo from "@/components/Logos/SerenityLogo.jsx";
import FooterLinks from "./FooterLinks.jsx";

export default function NavigationFooter() {
    return (
        <section id="navigation-footer" className="bg-slate-800 py-12 px-4">
            <div className="container mx-auto flex justify-center gap-20">
                <SerenityLogo className="relative h-36 w-36" />
                <FooterLinks/>
            </div>
        </section>
    );
}
