import React from "react";
import Image from "next/image";
import { couples } from "./data.js";
import styles from "@/components/Services/ServiceBullets.module.css";
import Link from "next/link";

export default function BeforeAfterSlider() {
    const heading_styles =
        "text-xl sm:text-xl md:text-2xl lg:text-4xl p-2 sm:p-4 lg:p-6 font-bold tracking-widest text-gray-700";

    const beforeAfterListItems = couples.map((couple, index) => {
        return (
            <li key={index}>
                <figure
                    className={`${styles.bricks} flex flex-col min-[400px]:flex-row justify-center text-center`}
                >
                    <div>
                        <h2 className={heading_styles}>BEFORE</h2>
                        <Image
                            src={couple.before}
                            alt="Before"
                            className="rounded-sm"
                            priority={index < 2}
                            sizes="(max-width: 400px) 50vw, 100vw"
                            width={800}  // Set the width (adjust as needed)
                            height={600} // Set the height (adjust as needed)
                        />
                    </div>
                    <div>
                        <h2 className={heading_styles}>AFTER</h2>
                        <Image
                            src={couple.after}
                            alt="After"
                            className="rounded-sm"
                            priority={index < 2}
                            width={800}  // Set the width (adjust as needed)
                            height={600} // Set the height (adjust as needed)
                        />
                    </div>
                </figure>
                <div className="bg-gray-100 w-full rounded-lg shadow-md">
                    <figcaption className="p-4 md:px-4 md:py-8 lg:px-0 max-w-4xl mx-auto flex flex-col gap-4">
                        <h3 className="text-gray-600 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium color sm:text-center">
                            How we helped
                        </h3>
                        <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl">
                            {couple.description}
                        </p>
                        <button
                            type="button"
                            className="sm:self-center text-center w-fit my-2 font-extrabold text-gray-800 text-sm sm:text-md lg:text-lg"
                        >
                            <Link
                                href="/contact"
                                className="block px-4 py-2 bg-orange-500 text-white rounded-lg border-t-2 border-orange-400/50 shadow-sm hover:shadow-md active:shadow-none hover:bg-orange-600 transition-colors"
                            >
                                Request Service{" "}
                            </Link>
                        </button>
                    </figcaption>
                </div>
            </li>
        );
    });

    return (
        <div className="container mx-auto px-2 py-8">
            <div className="flex justify-around">
                <ul className="flex flex-col gap-12">{beforeAfterListItems}</ul>
            </div>
        </div>
    );
}
