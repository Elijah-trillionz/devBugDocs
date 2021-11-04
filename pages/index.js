import DocumentItem from '../components/DocumentItem';
import HomeLayout from '../components/layouts/HomeLayout';

const Home = () => {
  const documents = [
    {
      id: 1,
      type: 'issue',
      title:
        'Reference Error: This error is referenced Lorem ipsum opsum val...',
      body: 'bigger things',
      author: 'John Doe',
      views: 200,
      hearts: 20,
    },
    {
      id: 2,
      type: 'observation',
      title: 'Finally got things right',
      body: 'bigger things',
      author: 'Jane Doe',
      views: 200,
      hearts: 20,
    },
    {
      id: 3,
      type: 'feature',
      title: 'Made a new kind of navbar',
      body: 'bigger things',
      author: 'John Doe',
      views: 200,
      hearts: 20,
    },
    {
      id: 4,
      type: 'exercise',
      title:
        'Paste some kind of exercise here to do and to get it done, and some other stuffs like that',
      body: 'bigger things',
      author: 'Mary Doe',
      views: 1000,
      hearts: 200,
    },
    {
      id: 5,
      type: 'feature',
      title: 'Made a new kind of navbar',
      body: 'bigger things',
      author: 'John Doe',
      views: 200,
      hearts: 20,
    },
    {
      id: 6,
      type: 'exercise',
      title:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum beatae minima cupiditate incidunt, vel earum obcaecati fugiat placeat illum reprehenderit? Cum beatae minima cupiditate incidunt, vel earum obcaecati fugiat placeat illum reprehenderit',
      body: 'bigger things',
      author: 'Mary Doe',
      views: 1400,
      hearts: 200,
    },
  ];

  return (
    <HomeLayout>
      <main>
        {documents.map((document) => (
          <DocumentItem document={document} key={document.id} />
        ))}
      </main>
    </HomeLayout>
  );
};

export default Home;
