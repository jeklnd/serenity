import React, { useState } from "react";
import { useImmer } from "use-immer";
import FormSubHeading from "./FormSubHeading.jsx";
import SolidYellowButton from "@/components/Buttons/SolidYellowButton.jsx";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function RequestQuoteForm({
    isInDropdown = false,
    id,
    heading,
}) {
    const [successfulSubmission, setSuccessfulSubmission] = useState(null);
    const [values, updateValue] = useImmer({
        first: "",
        last: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isVisible, setIsVisible] = useState(false);

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        updateValue((draft) => {
            draft[name] = value;
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById(`form-${id}`);
        const inputElements = Array.from(form.children).flatMap((child) =>
            Array.from(child.querySelectorAll("input, textarea"))
        );
        const allNodesAreValid = inputElements.every((el) => el.validity.valid);

        if (allNodesAreValid) {
            form.submit();
            setSuccessfulSubmission(true);
            updateValue((draft) => {
                for (let item in draft) {
                    draft[item] = "";
                }
            });
        } else {
            setSuccessfulSubmission(false);
        }
    };

    const input_styles =
        "w-full sm:min-w-1/2 h-fit rounded-md p-1 placeholder: placeholder:text-gray-400 shadow-inner data-[success=false]:invalid:border-2 data-[success=false]:invalid:border-red-500 peer";
    const error_styles =
        "hidden data-[success=false]:peer-invalid:block text-xs text-left pl-1 text-red-700";

    return (
        <div className="flex flex-col content-center flex-wrap w-fit mx-auto ">
            <div className="max-w-md text-center">
                <FormSubHeading heading={heading} />
                <form id={`form-${id}`} action="/api/send-email" method="POST">
                    <div className="flex flex-col p-2 gap-2 min-[370px]:flex-row ">
                        <div className="flex flex-col w-full sm:min-w-1/2">
                            <input
                                type="text"
                                placeholder="First"
                                name="first"
                                value={values.first}
                                onChange={handleFormInputChange}
                                data-success={successfulSubmission}
                                required
                                className={input_styles}
                            ></input>
                            <p
                                className={error_styles}
                                data-success={successfulSubmission}
                            >
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
                                data-success={successfulSubmission}
                                required
                                data-invalid={successfulSubmission}
                                className={input_styles}
                            ></input>
                            <p
                                className={error_styles}
                                data-success={successfulSubmission}
                            >
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
                                pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                                data-success={successfulSubmission}
                                className={input_styles}
                            ></input>
                            <p
                                className={error_styles}
                                data-success={successfulSubmission}
                            >
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
                                pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|&quot;(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*&quot;)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                                data-success={successfulSubmission}
                                className={input_styles}
                            ></input>
                            <p
                                className={error_styles}
                                data-success={successfulSubmission}
                            >
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
                                data-success={successfulSubmission}
                                rows={`${isInDropdown === true ? "4" : "8"}`}
                                className={input_styles}
                            ></textarea>
                            <p
                                className={error_styles}
                                data-success={successfulSubmission}
                            >
                                Please provide a message.
                            </p>
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <div
                            className="g-recaptcha"
                            data-sitekey={process.env.RECAPTCHA_SITE_KEY}
                        ></div>
                    </div> */}
                    <SolidYellowButton
                        buttonText="Submit Request"
                        className=""
                        onClick={handleFormSubmit}
                    />

                    <div className="flex flex-row justify-center gap-2 items-center px-2">
                        <LockClosedIcon className="text-gray-500 h-[20px] w-[20px]" />
                        <p className="text-gray-500 text-xs sm:text-sm max-w-sm">
                            The security and privacy of your data is our top
                            priority. We never sell your information to
                            third-party companies.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
