import React from "react";
import Link from "next/link";
import RequestQuoteBtn from "@/components/RequestForm/RequestQuoteBtn.jsx";
import { useRouter } from "next/router";

export default function TextStack() {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-7 text-center sm:text-left max-w-[22rem] sm:max-w-[32rem] py-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl  text-gray-800 font-bold leading-10 ">
                Bring{" "}
                <span className="underline decoration-sy-700 whitespace-nowrap">
                    peace of mind
                </span>{" "}
                <br />
                to your home with{" "}
                <span className="whitespace-nowrap">Serenity Home Repair</span>.
            </h1>
            <p className="text-xl text-gray-600 leading-6 sm:text-2xl lg:text-3xl ">
                We handle all your home repair needs so you don&apos;t have to.
            </p>
            <RequestQuoteBtn
                text={"View Services"}
                oneOffClasses="self-center sm:self-start"
                onClick={() => router.push("/services")}
            />
        </div>
    );
}
