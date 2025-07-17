import "@/styles/globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  
    
    return (
            <React.StrictMode>
                <Component {...pageProps} />
                <Analytics />
            </React.StrictMode>
    );
}
