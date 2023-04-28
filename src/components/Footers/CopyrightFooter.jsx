import React from "react";

export default function CopyrightFooter() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="bg-slate-900 py-12">
            <div className="container mx-auto text-center text-[#54575a] text-sm font-normal tracking-wide flex justify-center">
                <p>
                    © {year} Serenity Home Repair. All rights reserved. Site design and development by Jesse Krensel.
                </p>
            </div>
        </div>
    );
}
