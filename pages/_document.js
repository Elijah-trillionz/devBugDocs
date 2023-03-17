import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <link rel='manifest' href='/favicon/site.webmanifest' />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&family=Ubuntu:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap'
            rel='stylesheet'
          />
          <link
            href='/favicon/favicon.ico'
            rel='icon'
            type='image/png'
            sizes='16x16'
          />
          <meta name='theme-color' content='#317EFB' />
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
