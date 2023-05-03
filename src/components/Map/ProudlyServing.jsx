import React from "react";

export default function ProudlyServing() {
    return (
        <div className=" bg-slate-400 pt-12 pb-1 flex flex-col gap-9">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-700 mb-2">
                    Proudly serving
                </h2>
                <p className="text-xl text-gray-600">
                    Serenity Home Repair caters to all Montgomery and
                    Philadelphia County postal codes.
                </p>
            </div>
            <div className="flex justify-center bg-slate-300 w-full">
                <iframe
                    width="600"
                    height="450"
                    className="border-0 w-full"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfad1ODq8xokRFap-dkA7Z7k&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                ></iframe>
            </div>
        </div>
    );
}
