import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import FormSubHeading from "./FormSubHeading.jsx";
import SolidYellowButton from "@/components/Buttons/SolidYellowButton.jsx";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function RequestQuoteForm({
    isInDropdown = false,
    id,
    heading,
    siteKey,
    onSubmit, // Callback to close modal/form
}) {
    const [isClient, setIsClient] = useState(false);
    const [values, updateValue] = useImmer({
        first: "",
        last: "",
        phone: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        updateValue((draft) => {
            draft[name] = value;
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Close the modal/form immediately
        if (onSubmit) {
            onSubmit();
        }
        
        // Continue with reCAPTCHA and API call in background
        if (!window.grecaptcha) {
            return;
        }
        
        try {
            // Wait for reCAPTCHA to be ready
            await new Promise((resolve) => {
                if (window.grecaptcha.ready) {
                    window.grecaptcha.ready(resolve);
                } else {
                    resolve();
                }
            });
            
            // Get the reCAPTCHA token
            const token = await window.grecaptcha.execute(siteKey, { action: 'submit' });
            
            if (!token) {
                return;
            }

            // Create form data with the token
            const formData = {
                ...values,
                recaptcha_token: token,
            };

            // Send to API in background (no feedback)
            fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).catch(error => {
                console.error("Error submitting form:", error);
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const input_styles =
        "w-full sm:min-w-1/2 h-fit rounded-md p-2 border border-gray-400 placeholder:text-gray-500 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 data-[success=false]:invalid:border-red-500 peer bg-white text-gray-900";
    const error_styles =
        "hidden data-[success=false]:peer-invalid:block text-xs text-left pl-1 text-red-700 mt-1";

    return (
        <div className="flex flex-col content-center flex-wrap w-fit mx-auto p-4 rounded-lg">
            <div className="max-w-md text-center">
                <FormSubHeading heading={heading} />
                
                <form id="request-quote-form" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col p-2 gap-2 min-[370px]:flex-row ">
                        <div className="flex flex-col w-full sm:min-w-1/2">
                            <input
                                type="text"
                                placeholder="First"
                                name="first"
                                value={values.first}
                                onChange={handleFormInputChange}
                                required
                                className={input_styles}
                            ></input>
                            <p className={error_styles}>
                                Please input first name.
                            </p>
                        </div>
                        <div className="flex flex-col w-full sm:min-w-1/2">
                            <input
                                type="text"
                                placeholder="Last"
                                name="last"
                                value={values.last}
                                onChange={handleFormInputChange}
                                required
                                className={input_styles}
                            ></input>
                            <p className={error_styles}>
                                Please input last name.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col min-[370px]:flex-row px-2 pb-2 gap-2">
                        <div className="flex flex-col w-full sm:min-w-1/2">
                            <input
                                type="tel"
                                placeholder="Phone"
                                name="phone"
                                value={values.phone}
                                onChange={handleFormInputChange}
                                required
                                pattern="^\d{3}-\d{3}-\d{4}$"
                                className={input_styles}
                            ></input>
                            <p className={error_styles}>
                                Please input valid phone number.
                            </p>
                        </div>

                        <div className="flex flex-col w-full sm:min-w-1/2">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleFormInputChange}
                                required
                                className={input_styles}
                            ></input>
                            <p className={error_styles}>
                                Please input valid email address.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col px-2 pb-2 gap-2">
                        <div className="flex flex-col w-full sm:min-w-1/2">
                            <textarea
                                placeholder="Message"
                                name="message"
                                value={values.message}
                                onChange={handleFormInputChange}
                                required
                                rows={`${isInDropdown === true ? "4" : "8"}`}
                                className={input_styles}
                            ></textarea>
                            <p className={error_styles}>
                                Please provide a message.
                            </p>
                        </div>
                    </div>
                    {isClient && (
                        <SolidYellowButton
                            buttonText="Request Quote"
                            className="w-full mt-4"
                            onClick={() => {}}
                        />
                    )}
                    {!isClient && (
                        <button
                            type="submit"
                            className="w-full mt-4 bg-gray-400 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            disabled
                        >
                            Loading...
                        </button>
                    )}

                    <div className="flex flex-row justify-center gap-2 items-center px-2 mt-4">
                        <LockClosedIcon className="text-gray-600 h-[20px] w-[20px]" />
                        <p className="text-gray-700 text-xs sm:text-sm max-w-sm">
                            Your information is secure and will only be used to contact you about your request.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
