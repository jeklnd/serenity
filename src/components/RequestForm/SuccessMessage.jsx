import React, { useEffect, useState } from "react";

export default function SuccessMessage() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutID = setTimeout(() => setIsVisible(false), 5000);
        return () => {
            clearTimeout(timeoutID);
        };
    }, [isVisible, setIsVisible]);

    return (
        <div
            data-visible={isVisible}
            className=" bg-gray-200 p-2 shadow-md w-screen text-center mx-auto -translate-y-full data-[visible=true]:translate-y-0 transition absolute "
        >
                <p className="text-green-700 tracking-wide text-lg sm:text-xl font-medium">
                    Success! Your email has been sent.
                </p>
           
        </div>
    );
}
