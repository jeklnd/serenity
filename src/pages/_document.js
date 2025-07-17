import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; // Import Script from next/script

export default function Document() {
  // IMPORTANT: Replace 'YOUR_RECAPTCHA_SITE_KEY' with your actual reCAPTCHA v3 site key.
  // Ideally, you'd pull this from an environment variable (e.g., process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // Make sure this env var is set!

  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts - Playful font similar to logo */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Termly script - existing */}
        <Script
          type="text/javascript"
          src="https://app.termly.io/embed.min.js"
          data-auto-block="on"
          data-website-uuid="13388011-6506-4da0-b438-9aa79e263552"
          defer
        />

        {/* Corrected Google reCAPTCHA v3 script */}
        {recaptchaSiteKey && ( // Only render if site key is available
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            strategy="lazyOnload" // Or "afterInteractive" depending on your needs
            // You can also add `defer` if not using `strategy="lazyOnload"`/`"afterInteractive"`
          />
        )}

        {/* Existing favicon and meta description */}
        <link
          rel="icon"
          type="image/x-icon" // Corrected typo: ttype -> type
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