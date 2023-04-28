import React from "react";
import RequestForm from "@/components/RequestForm/RequestForm.jsx";

export default function ServicesRequestForm() {
    return (
        <div>
            <div className="text-center">
                <h1>Contact Us</h1>
                <p>
                    Need a reliable handyman for your project? Contact Serenity
                    Home Repair today. Simply submit your information below and
                    we will be in touch within 24-48 hours.
                </p>
            </div>
            <RequestForm />
        </div>
    );
}
