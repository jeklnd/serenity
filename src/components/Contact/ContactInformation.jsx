import React from "react";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";
import AccentBorder from "./AccentBorder.jsx";

export default function ContactInformation() {
    const divStyles = "flex flex-col gap-2 items-center";
    const iconStyles = "h-8 w-8 text-sy-600";
    const pStyles = "text-xl font-medium text-gray-700";
    const weekdays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    return (
        <section
            id="contact-information"
            className="bg-slate-400 py-16 relative flex flex-col items-center gap-8"
        >
            <h1 className="text-3xl font-bold text-gray-700 text-center">
                Contact Information
            </h1>
            <AccentBorder />

            <div className="flex flex-col md:flex-row justify-center items-center gap-14 md:gap-24">
                {/* Phone and Email Div*/}
                <div className="flex flex-col gap-14 first:self-start">
                    <div className={divStyles}>
                        <PhoneIcon className={iconStyles} />
                        <p className={pStyles}>610-613-4832</p>
                    </div>
                    <div className={divStyles}>
                        <EnvelopeIcon className={iconStyles} />
                        <p className={"text-lg font-medium text-gray-700"}>
                            RKrensel@SerenityHomeRepair.com
                        </p>
                    </div>
                </div>

                {/* Hours of Operation Div*/}
                <div className={`${divStyles}`}>
                    <ClockIcon className={iconStyles} />
                    <ul>
                        {weekdays.map((day, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex justify-between gap-16 md:gap-14 p-1"
                                >
                                    <p className="text-lg font-medium text-gray-700">
                                        {day}
                                    </p>
                                    <p className="text-lg text-gray-600">
                                        9am &ndash; 5pm
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
