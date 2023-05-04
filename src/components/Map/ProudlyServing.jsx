import React from "react";

export default function ProudlyServing() {
    return (
        <div className=" bg-slate-500 pt-16 flex flex-col relative">
            <div className="container mx-auto text-center px-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                    Proudly serving
                </h2>
                <p className="text-xl lg:text-2xl text-gray-700">
                    Serenity Home Repair caters to all postal codes across southeastern PA and beyond.
                </p>
            </div>
            <div className="flex justify-center bg-transparent w-full relative">
                <div className="lg:hidden bg-slate-700 w-screen h-1/2 absolute z-10 bottom-0"></div>

                <iframe
                    width="600"
                    height="450"
                    className="border-0 w-full z-10 my-10 lg:mb-0 shadow-md lg:h-[600px]"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/view?zoom=9&center=40.1144,-75.3376&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                ></iframe>
            </div>
        </div>
    );
}
