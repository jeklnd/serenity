import "@/styles/globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    console.log("reCAPTCHA Site Key:", recaptchaSiteKey); // Log the key to check its value.
    
    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
            <React.StrictMode>
                <Component {...pageProps} />
                <Analytics />
            </React.StrictMode>
        </GoogleReCaptchaProvider>
    );
}
