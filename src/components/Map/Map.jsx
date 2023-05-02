import React from "react";

export default function Map() {
    return (
        <div className="flex justify-center bg-slate-300">
            <iframe
                width="600"
                height="450"
                className="border-0 w-full"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJfad1ODq8xokRFap-dkA7Z7k&key=${process.env.GOOGLE_MAPS_EMBED_API_KEY}`}
            ></iframe>
        </div>
    );
}
