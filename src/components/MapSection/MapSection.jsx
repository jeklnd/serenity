import React from "react";

export default function MapSection() {
    return (
        <div className=" bg-green-100 pt-16 flex flex-col relative">
            <div className="container mx-auto text-center px-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playful text-gray-800 mb-2">
                    Proudly serving
                </h2>
                <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                    The Island Handyman caters to all postal codes across
                    southeastern PA and beyond.
                </p>
            </div>
            <div className="flex justify-center bg-transparent w-full relative">
                <div className="lg:hidden bg-green-700 w-screen h-1/2 absolute z-10 bottom-0"></div>

                <iframe
                    width="600"
                    height="450"
                    className="border-0 w-full z-10 my-10 lg:mb-0 shadow-md lg:h-[600px] rounded-lg"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/view?zoom=13&center=39.3404,-74.4771&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                ></iframe>
            </div>
        </div>
    );
}
