import React from "react";

export default function CopyrightFooter() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="bg-slate-600">
            <div className="container mx-auto text-center">
                <p>© {year} Serenity Home Repair. All rights reserved.</p>
                <p>Website designed and developed by Jesse Krensel.</p>
            </div>
        </div>
    );
}
