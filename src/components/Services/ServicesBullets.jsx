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
                <div className="flex flex-col rounded-lg shadow-lg h-full bg-white border border-sy-100">
                    <div
                        className={`${styles.bricks} flex flex-col p-4 pb-6 gap-2 relative rounded-t-lg bg-blue-600`}
                    >
                        <div className="mx-auto text-3xl text-gray-800">
                            {service.icon}
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-700 text-center">
                            {service.name}
                        </h2>

                        <div className="w-12 border-2 border-gray-800 self-center absolute bottom-0"></div>
                    </div>
                    <ul className="p-2 grow">
                        {service.listItems.map((listItem, i) => {
                            return (
                                <li
                                    key={i}
                                    className="list-disc list-inside marker:text-orange-500 px-4"
                                >
                                    <p className="inline text-lg sm:text-xl lg:text-2xl text-gray-700">
                                        {listItem}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        type="button"
                        className="sm:self-center text-center w-fit mt-6 mb-8 font-extrabold text-gray-800 text-sm sm:text-md lg:text-lg "
                    >
                        <Link
                            href="/contact"
                            className="block px-4 py-2  bg-green-500 text-white rounded-lg border-t-2 border-green-400/50 shadow-sm hover:shadow-md active:shadow-none hover:bg-green-600 transition-colors"
                        >
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
