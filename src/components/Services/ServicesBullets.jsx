import React from "react";
import { services } from "./data.js";
import styles from "./ServiceBullets.module.css";

export default function ServicesCards() {
    const servicesListItems = services.map((service, index) => {
        return (
            <li
                key={index}
            >
                {/* Images */}
                <div className="m-2 flex flex-col gap-2 rounded-sm shadow-md">
                    <div className={`${styles.bricks} flex flex-col p-4 pb-6 gap-2 relative rounded-sm`}>
                        <div className="mx-auto text-3xl text-gray-700">
                            {service.icon}
                        </div>
                        <h2 className="text-xl font-medium text-gray-700 text-center">
                            {service.name}
                        </h2>

                        <div className="w-12 border-2 border-gray-700/75 self-center absolute bottom-0"></div>
                    </div>
                    <ul className="p-2">
                        {service.listItems.map((listItem, i) => {
                            return (
                                <li
                                    key={i}
                                    className="list-disc list-inside marker:text-sy-600 pl-2"
                                >
                                    <p className="inline text-lg text-gray-600">
                                        {listItem}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </li>
        );
    });

    return (
        <div className="container mx-auto flex justify-center py-8">
            <ul className=" grid md:grid-cols-2 justify-center flex-wrap gap-8">
                {servicesListItems}
            </ul>
        </div>
    );
}
