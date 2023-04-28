import React from "react";
import localFont from "next/font/local";

const spaceGrotesque = localFont({
    src: "SpaceGrotesk-VariableFont_wght.ttf",
});

export default function QuotationMark() {
    return (
        <span className={`text-4xl leading-6 text-gray-600/80 ${spaceGrotesque.className} last:relative last:top-4`}>
            &quot;
        </span>
    );
}
