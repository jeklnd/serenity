import React from "react";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";
import AccentBorder from "./AccentBorder.jsx";

export default function ContactInformation({ classesFromParent }) {
    const divStyles = "flex flex-col gap-2 items-center";
    const iconStyles = "h-8 w-8 text-blue-500";
    const pStyles = "text-xl font-medium";
    // const weekdays = [
    //     "Monday",
    //     "Tuesday",
    //     "Wednesday",
    //     "Thursday",
    //     "Friday",
    //     "Saturday",
    //     "Sunday",
    // ];

    return (
        <div
            className={`flex flex-col items-center gap-8 ${classesFromParent} `}
        >
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-playful text-center">
                Contact Information
            </h1>
            <AccentBorder />

            <div className="flex flex-col gap-8">
                <div className={divStyles}>
                    <PhoneIcon className={iconStyles} />
                    <p className={pStyles}>610-613-4832</p>
                </div>
                <div className={divStyles}>
                    <EnvelopeIcon className={iconStyles} />
                    <p className={pStyles}>robert@islandhandyman.net</p>
                </div>
                <div className={divStyles}>
                    <ClockIcon className={iconStyles} />
                    <p className={pStyles}>Mon-Fri: 8AM-6PM</p>
                </div>
            </div>
        </div>
    );
}
