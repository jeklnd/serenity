import React from 'react';
import RequestQuoteForm from './RequestQuoteForm';

export default function QuoteFormWithRecaptcha(props) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <RequestQuoteForm {...props} siteKey={siteKey} />
  );
}
