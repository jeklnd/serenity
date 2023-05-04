import React from "react";
import { services } from "./data.js";
import styles from "./ServiceBullets.module.css";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export default function ServicesCards() {
    const servicesListItems = services.map((service, index) => {
        return (
            <li key={index}>
                {/* Images */}
                <div className="flex flex-col rounded-sm shadow-md h-full  bg-gray-200">
                    <div
                        className={`${styles.bricks} flex flex-col p-4 pb-6 gap-2 relative rounded-sm`}
                    >
                        <div className="mx-auto text-3xl text-gray-700">
                            {service.icon}
                        </div>
                        <h2 className="text-xl lg:text-2xl font-medium text-gray-700 text-center">
                            {service.name}
                        </h2>

                        <div className="w-12 border-2 border-gray-700/75 self-center absolute bottom-0"></div>
                    </div>
                    <ul className="p-2 grow">
                        {service.listItems.map((listItem, i) => {
                            return (
                                <li
                                    key={i}
                                    className="list-disc list-inside marker:text-sy-600 px-4"
                                >
                                    <p className="inline text-lg sm:text-xl lg:text-2xl text-gray-600">
                                        {listItem}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        type="button"
                        className="self-center w-fit font-extrabold text-gray-800 bg-sy-500 px-4 py-2 mt-6 mb-8 rounded-sm text-sm sm:text-md lg:text-lg border-t-2 border-sy-400/50 shadow-sm hover:shadow-md active:shadow-none"
                    >
                        <Link href="/contact">
                            Request Service{" "}
                            <ArrowSmallRightIcon className="inline h-5 w-5" />
                        </Link>
                    </button>
                </div>
            </li>
        );
    });

    return (
        <div className="container mx-auto flex justify-center py-8">
            <ul className=" grid md:grid-cols-2 justify-center flex-wrap gap-4">
                {servicesListItems}
            </ul>
        </div>
    );
}
