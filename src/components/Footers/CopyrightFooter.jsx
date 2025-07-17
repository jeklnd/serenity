import React from "react";
import Link from "next/link";

export default function CopyrightFooter() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <section id="copyright-footer" className="bg-slate-900 py-12">
            <div className="container mx-auto text-center text-[#54575a] text-sm font-normal tracking-wide flex flex-col justify-center">
                <p>© {year} The Island Handyman. All rights reserved.</p>
                <br />
                <div>
                    <p>
                        {" "}
                        <Link
                            href="/privacy-policy"
                            className="hover:text-gray-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </Link>
                        <span> | </span>
                        <Link
                            href="/cookie-policy"
                            className="hover:text-gray-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cookie Policy
                        </Link>
                        <span> | </span>
                        <Link
                            href="#"
                            className="hover:text-gray-500"
                            onClick={() => {
                                window.displayPreferenceModal();
                                return false;
                            }}
                            id="termly-consent-preferences"
                        >
                            Consent Preferences
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
