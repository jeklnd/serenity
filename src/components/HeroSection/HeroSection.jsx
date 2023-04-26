import React from "react";
import RequestForm from "@/components/RequestForm/RequestForm.jsx";

export default function HeroSection() {
    return (
        <div className="container mx-auto flex justify-around">
            <div>
                <h1>
                    Say goodbye to home repair stress and hello to serenity with
                    Serenity Home Repair
                </h1>
                <p>
                    We handle all your home repair needs so you don&apos;t have
                    to
                </p>
                <button>View Services</button>
            </div>
            <div>
                <div className="flex flex-col text-center">
                    <h2>Turn your house into a home.</h2>
                    <p>
                        Request a complimentary quote by securely submitting
                        your information.
                    </p>
                </div>
                <RequestForm />
            </div>
        </div>
    );
}
