import HomeLayout from '../../components/layouts/HomeLayout';
import Document from '../../components/article/Document';
import SideBar from '../../components/SideBar';
import Meta from '../../components/Meta';

const index = () => {
  const meta = {
    author: 'Mary Doe',
    views: 16000,
    hearts: 5000,
    date: 'August 8, 2021',
  };

  return (
    <HomeLayout smallerDiv={true}>
      <Meta title='Reference Error something like that. Now this is a very long title | SortCode' />
      <div>
        <Document
          title='Reference Error something like that. Now this is a very long title, '
          markdown='nothing yet'
          meta={meta}
        />
        <SideBar />
      </div>
    </HomeLayout>
  );
};

export default index;
