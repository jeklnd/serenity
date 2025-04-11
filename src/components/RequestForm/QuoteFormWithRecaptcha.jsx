import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import RequestQuoteForm from './RequestQuoteForm';

export default function QuoteFormWithRecaptcha(props) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true, // optional
        defer: true, // optional
        appendTo: 'head' // optional, default to "head"
      }}
    >
      <RequestQuoteForm {...props} />
    </GoogleReCaptchaProvider>
  );
}
