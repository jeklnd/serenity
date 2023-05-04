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
                            alt=""
                            className="rounded-sm"
                            priority={index < 2}
                        />
                    </div>
                    <div>
                        <h2 className={heading_styles}>AFTER</h2>
                        <Image
                            src={couple.after}
                            alt=""
                            className="rounded-sm"
                            priority={index < 2}
                        />
                    </div>
                </figure>
                <div className=" bg-slate-200 w-fullrounded-lg">
                    <figcaption className="p-4 md:px-4 md:py-8 lg:px-0 max-w-4xl mx-auto flex flex-col gap-4">
                        <h3 className="text-gray-600 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium color sm:text-center">
                            How we helped
                        </h3>
                        <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl ">
                            {couple.description}{" "}
                        </p>
                        <button
                            type="button"
                            className="sm:self-center text-center w-fit font-extrabold text-gray-800 bg-sy-500 px-4 py-2 my-2 rounded-sm text-sm sm:text-md lg:text-lg border-t-2 border-sy-400/50 shadow-sm hover:shadow-md active:shadow-none"
                        >
                            <Link href="/contact">Request Service </Link>
                        </button>
                    </figcaption>
                </div>
            </li>
        );
    });
    return (
        <div className="container mx-auto px-2 py-8 ">
            <div className="flex justify-around">
                <ul className="flex flex-col gap-12">{beforeAfterListItems}</ul>
            </div>
        </div>
    );
}
