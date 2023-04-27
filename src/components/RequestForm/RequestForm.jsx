import React from "react";
import RequestQuoteBtn from "@/components/shared/RequestQuoteBtn.jsx";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function RequestForm() {
    return (
        <>
            <form action="" method="">
                <div className="flex flex-col p-2 gap-2">
                    <input
                        type="text"
                        placeholder="First"
                        name="first"
                        required
                        className="w-full border-2 rounded-md p-1 placeholder:pl-2 placeholder:text-gray-400"
                    ></input>

                    <input
                        type="text"
                        placeholder="Last"
                        name="last"
                        className="w-full border-2 rounded-md p-1 placeholder:pl-2 placeholder:text-gray-400"
                        required
                    ></input>
                </div>
                <div className="flex flex-col px-2 pb-2 gap-2">
                    <input
                        type="phone"
                        placeholder="Phone"
                        name="phone"
                        required
                        className="w-full border-2 rounded-md p-1 placeholder:pl-2 placeholder:text-gray-400"
                    ></input>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="w-full border-2 rounded-md p-1 pl-2 placeholder:pl-2 placeholder:text-gray-400"
                    ></input>
                </div>
                <div className="flex flex-col px-2 pb-2 gap-2">
                    <textarea
                        type="text"
                        placeholder="Message"
                        name="message"
                        required
                        className="w-full border-2 rounded-md placeholder:pl-2 placeholder:text-gray-400"
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
                <div className="flex px-2 gap-2">
                    <LockClosedIcon className="text-gray-500 h-12 w-8" />
                    <p className="text-gray-400 text-xs">
                        The security and privacy of your data is our top
                        priority. We never sell your information to
                        third-party companies.
                    </p>
                </div>
            </form>
        </>
    );
}
