import React from "react";
import RequestForm from "@/components/RequestForm/RequestForm.jsx";

export default function Contact() {
    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className="border-2 flex flex-col justify-around">
                    <h1>Contact Information</h1>
                    <div>
                        <p>Phone</p>
                        <p>610-613-4832</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>RKrensel@SerenityHomeRepair.com</p>
                    </div>
                    <div>
                        <p>Hours</p>
                        <p>Monday to Sunday: 9am&ndash;5pm</p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <h1>Contact Us</h1>
                        <p>
                            Need a reliable handyman for your project? Contact
                            Serenity Home Repair today. Simply submit your
                            information below and we will be in touch within
                            24-48 hours.
                        </p>
                    </div>
                    <RequestForm />
                </div>
            </div>
        </div>
    );
}
