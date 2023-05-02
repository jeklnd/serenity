import React from "react";
import FormHeading from "./FormHeading.jsx";
import RequestQuoteBtn from "@/components/RequestForm/RequestQuoteBtn.jsx";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function RequestForm({ isInDropdown = false }) {
    return (
        <div className="flex flex-col content-center flex-wrap px-2">
            <div className="max-w-lg text-center">
                <FormHeading />
                <form action="" method="">
                    <div className="flex flex-col p-2 gap-2 sm:flex-row">
                        <input
                            type="text"
                            placeholder="First"
                            name="first"
                            required
                            className="w-full sm:w-1/2 rounded-md p-1 placeholder:pl-2 placeholder:text-gray-400"
                        ></input>

                        <input
                            type="text"
                            placeholder="Last"
                            name="last"
                            className="w-full sm:w-1/2 rounded-md p-1 placeholder:pl-2 placeholder:text-gray-400"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-col sm:flex-row px-2 pb-2 gap-2">
                        <input
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            required
                            className="w-full sm:w-1/2 rounded-md p-1 placeholder:pl-2 placeholder:text-gray-400"
                        ></input>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="w-full sm:w-1/2 rounded-md p-1 pl-2 placeholder:pl-2 placeholder:text-gray-400"
                        ></input>
                    </div>
                    <div className="flex flex-col px-2 pb-2 gap-2">
                        <textarea
                            placeholder="Message"
                            name="message"
                            required
                            rows={`${isInDropdown === true ? "4" : "10"}`}
                            className="w-full rounded-md placeholder:pl-2 placeholder:text-gray-400"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="g-recaptcha"
                            data-sitekey={process.env.RECAPTCHA_SITE_KEY}
                        ></div>
                    </div>

                    <div className="p-4 text-center">
                        <RequestQuoteBtn text="Submit Request" />
                    </div>
                    <div className="flex flex-row justify-center sm:px-2 sm:gap-2 items-center ">
                        <LockClosedIcon className="text-gray-500 h-[20px] w-[20px]" />
                        <p className="text-gray-400 text-xs sm:text-sm max-w-sm">
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
