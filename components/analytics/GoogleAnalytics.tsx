import Script from 'next/script';

// GA4 Google tag (gtag.js). Loaded with `afterInteractive` so it never blocks
// first render. Change GA_ID if the Measurement ID changes.
const GA_ID = 'G-RCVRKGG978';

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
