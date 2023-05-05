import React from "react";
import { spaceGrotesque } from "@/utils/fonts/loadFonts.js";

export default function QuotationMark({ className }) {
    return (
        <span
            className={`text-6xl leading-6 text-gray-600/40 ${spaceGrotesque.className} ${className}`}
        >
            &quot;
        </span>
    );
}
