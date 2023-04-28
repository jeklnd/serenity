import "@/styles/globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
    return (
        <React.StrictMode>
            <Component {...pageProps} />
            <Analytics />
        </React.StrictMode>
    );
}
