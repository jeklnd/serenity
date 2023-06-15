import React from "react";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/solid";
import AccentBorder from "./AccentBorder.jsx";

export default function ContactInformation({ classesFromParent }) {
    const divStyles = "flex flex-col gap-2 items-center";
    const iconStyles = "h-8 w-8 text-sy-500";
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
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center">
                Contact Information
            </h1>
            <AccentBorder />

            <div className="flex flex-col justify-center items-center gap-6 md:gap-8">
                {/* Phone and Email Div*/}
                <div className={divStyles}>
                    <PhoneIcon className={iconStyles} />
                    <p className={pStyles}>610-613-4832</p>
                </div>
                <div className={divStyles}>
                    <EnvelopeIcon className={iconStyles} />
                    <p className={"text-lg font-medium"}>
                        Robert@SerenityHomeRepair.com
                    </p>
                </div>

                {/* Hours of Operation Div*/}
                {/* <div className={`${divStyles}`}>
                    <ClockIcon className={iconStyles} />
                    <ul>
                        {weekdays.map((day, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex justify-between gap-16 md:gap-14 p-1"
                                >
                                    <p className="text-lg font-medium">{day}</p>
                                    <p className="text-lg font-thin">
                                        9am &ndash; 5pm
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div> */}
            </div>
        </div>
    );
}
