import React from "react";
import Link from "next/link";

export default function TextStack() {
    return (
        <div className="flex flex-col gap-4 text-center max-w-[22rem]">
            <h1 className="text-3xl text-gray-800 font-bold">
                Discover{" "}
                <span className="underline decoration-sy-700">
                    peace of mind
                </span>{" "}
                in your home with{" "}
                <span className="whitespace-nowrap">Serenity Home Repair</span>.
            </h1>
            <p className="text-xl text-gray-600">
                We handle all your home repair needs so you don&apos;t have to.
            </p>

            <button
                type="button"
                className="font-bold text-gray-800 bg-sy-200 px-4 py-2 mt-6 rounded-sm w-36 mx-auto"
            >
                <Link href="/services">View Services</Link>
            </button>
        </div>
    );
}
