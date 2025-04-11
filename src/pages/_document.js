import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script
                    type="text/javascript"
                    src="https://app.termly.io/embed.min.js"
                    data-auto-block="on"
                    data-website-uuid="13388011-6506-4da0-b438-9aa79e263552"
                    defer
                />
                <Script
                    src="https://www.google.com/recaptcha/api.js"
                    strategy="beforeInteractive" // Ensure it loads before your app starts
                    async
                    defer
                />
                <link
                    rel="icon"
                    ttype="image/x-icon"
                    href="assets/favicon.ico"
                />
                <meta
                    name="description"
                    content="Your local handyman for all home repair and maintenance needs. Our experts provide exceptional customer service and high-quality workmanship in carpentry, plumbing, electrical, and exterior repairs. Contact us today to schedule a consultation!"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
