import React from "react";
import Link from "next/link";

export default function TextStack() {
    return (
        <div className="flex flex-col gap-7 text-center sm:text-left max-w-[22rem] sm:max-w-[32rem] py-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl  text-gray-800 font-bold leading-10 ">
                Bring{" "}
                <span className="underline decoration-sy-700 whitespace-nowrap">
                    peace of mind
                </span>{" "}<br/>
                to your home with{" "}
                <span className="whitespace-nowrap">Serenity Home Repair</span>.
            </h1>
            <p className="text-xl text-gray-600 leading-6 sm:text-2xl lg:text-3xl ">
                We handle all your home repair needs so you don&apos;t have to.
            </p>

            <button
                type="button"
                className="font-bold text-gray-800 bg-sy-300 px-4 py-2 mt-6 rounded-sm w-36 mx-auto sm:mx-0"
            >
                <Link href="/services">View Services</Link>
            </button>
        </div>
    );
}
