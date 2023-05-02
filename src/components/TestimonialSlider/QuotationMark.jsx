import React from "react";
import localFont from "next/font/local";

const spaceGrotesque = localFont({
    src: "SpaceGrotesk.ttf",
});

export default function QuotationMark() {
    return (
        <span className={`text-6xl leading-6 text-gray-600/40 ${spaceGrotesque.className} first:-ml-4 first:-my-2 last:-mr-4 last:-my-8`}>
            &quot;
        </span>
    );
}
