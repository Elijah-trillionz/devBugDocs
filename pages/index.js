import { useContext, useEffect } from 'react';
import DocumentItem from '../components/DocumentItem';
import HomeLayout from '../components/layouts/HomeLayout';
import SideBar from '../components/SideBar';
import { GlobalContext } from '../context/global context/GlobalState';
import NestedErrorHandler from '../components/NestedErrorHandler';
import useLoadMore from '../Custom hooks/useLoadMore';
import { NextSeo } from 'next-seo';

const Home = () => {
  const { documents, initLoading, error, getAllDocuments } =
    useContext(GlobalContext);
  useLoadMore(getAllDocuments, false, false);

  return (
    <HomeLayout smallerDiv={false}>
      <NextSeo
        title='SortCode | Experienced Dev Experience'
        description='Share your errors, solutions for reference.'
        canonical='https://dev.to/elijahtrillionz'
        openGraph={{
          url: '/',
          title: 'SortCode | Experienced Dev Experience',
          description:
            "Share your errors, and solutions for; which you can easily refer back to when in need. It's like documenting your coding experience",
          images: [
            {
              url: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uptpbh204jysiom8nf85.jpg',
              width: 800,
              height: 600,
              alt: 'Coding image',
              type: 'image/jpeg',
            },
          ],
          site_name: 'SortCode',
        }}
        twitter={{
          handle: '@elijahtrillionz',
          site: '@magonerllc',
          cardType: 'summary_large_image',
        }}
      />
      <div>
        <main>
          {error ? (
            <NestedErrorHandler errorMsg={error} />
          ) : (
            <>
              {documents.map((document, index) => (
                <DocumentItem
                  document={document}
                  key={index}
                  index={index + 1}
                />
              ))}
              {initLoading && (
                <p
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    color: '#444',
                  }}
                >
                  Loading...
                </p>
              )}
            </>
          )}
        </main>
        <SideBar />
      </div>
    </HomeLayout>
  );
};

export default Home;
