import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script
                    type="text/javascript"
                    src="https://app.termly.io/embed.min.js"
                    data-auto-block="on"
                    data-website-uuid="13388011-6506-4da0-b438-9aa79e263552"
                    defer
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
