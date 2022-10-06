import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "components/layouts/Layout";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const tagManagerArgs = { gtmId };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  const router = useRouter();
  const canonicalUrl = (
    `https://schenck-hansen.de` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/9258f6ff-daff-4b79-8a4c-365206503dd0/cd.js"
        type="text/javascript"
        async
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
