import "@/styles/globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    
    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
            <React.StrictMode>
                <Component {...pageProps} />
                <Analytics />
            </React.StrictMode>
        </GoogleReCaptchaProvider>
    );
}
