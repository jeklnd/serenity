import React from "react";

export default function Backdrop({ isVisible, onClick }) {
    return (
        <div
            data-visible={isVisible}
            className="invisible data-[visible=true]:visible absolute h-screen w-screen bg-black/70 -z-10 transition"
            onClick={onClick}
        />
    );
}
