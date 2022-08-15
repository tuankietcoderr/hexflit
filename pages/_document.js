import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta
            name="viewport"
            content="width=device-width,minimum-scale=1, initial-scale=1"
        /> */}
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
            strategy="beforeInteractive"
          />
          <meta name="theme-color" content="#ffffff" />
          {/* <!--  Force chromium kernel to act on domestic dual core browsers such as 360 browser and QQ browser -- > */}
          <meta name="renderer" content="webkit" />
          {/* <!--  Force the chromium kernel to work on other dual core browsers -- > */}
          <meta name="force-rendering" content="webkit" />
          {/* <!--  If the Google chrome frame plug-in is installed, the chrome kernel is mandatory. Otherwise, the highest version of IE kernel supported by the machine is mandatory and works on IE browser -- > */}
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <meta
            name="keywords"
            content="tuankietcoder, hexamovie, hexa, movies"
          />
          {/* <!--  Web author -- > */}
          <meta
            name="author"
            content="tuankietcoder, tuankietwebdevfw@gmail.com"
          />
          <meta name="robots" content="index,follow" />
          <link rel="alternate" type="application/rss+xml" href="/rss.xml" />

          <link rel="manifest" href="/manifest.json" />
          {/* <link rel="apple-touch-icon" href="/icon-192x192.png" /> */}
          {/* <link rel="icon" href="/icon-192x192.png" /> */}
          <meta name="renderer" content="webkit" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="700" />
          <meta property="og:image:height" content="500" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
