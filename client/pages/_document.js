import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <meta name="google-site-verification" content="ri2FlSc7_niEkBPwP70KBSbtpTf5dfsC3celKHn_EjM" />
        <meta name="msvalidate.01" content="D5C49AFCE7BE200268FEBA33AB9C166B" />
        {/* <! -- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6M4NVKBT4W" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6M4NVKBT4W');
          `,
          }}
        />
        {/* <-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NNLTBRC');`}
        </Script>
        {/* -- End Google Tag Manager --> */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNLTBRC"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Our Maids Franchise",
          "image": "https://www.ourmaidsfranchise.com/logo.jpg",
          "@id": "",
          "url": "https://www.ourmaidsfranchise.com/",
          "telephone": "(302) 389 5221",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 The Green, Suite 14095, Dover, DE 19901",
            "addressLocality": "Dover",
            "addressRegion": "DE",
            "postalCode": "19901",
            "addressCountry": "US"
          }  
        }
        `}} />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
