import React from "react";
import localFont from "next/font/local";

const spaceGrotesque = localFont({
    src: "SpaceGrotesk.ttf",
});

export default function QuotationMark({moreClasses}) {
    return (
        <span
            className={`text-6xl leading-6 text-gray-600/40 ${spaceGrotesque.className} ${moreClasses}`}
        >
            &quot;
        </span>
    );
}
