import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&family=Ubuntu:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap'
        rel='stylesheet'
      />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  keywords:
    'web development, problems, features, experience, coding, programming',
  description: 'Share your errors, solutions for reference.',
  title: 'SortCode | Experienced Dev Experience',
};
