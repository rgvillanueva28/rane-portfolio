import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#0ea5e9" />
          <meta
            name="description"
            content="Personal Website of Rane Villanueva."
          />
          <meta property="og:title" content="Rane Villanueva" />
          <meta
            property="og:description"
            content="Personal Website of Rane Villanueva."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ranevillanueva.com/" />
          <meta
            property="og:image"
            content="https://www.ranevillanueva.com/logo.png"
          />
          <link rel="apple-touch-icon" href="/logo.png"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
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
