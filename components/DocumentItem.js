import {useEffect, useState} from 'react';
import {
  StatsItems,
  StyledDocumentItem,
  UserAvatar,
} from './styles/DocumentItem.styled';
import Link from 'next/link';

const DocumentItem = ({document}) => {
  const [views, setViews] = useState(document.views);
  const [title, setTitle] = useState(document.title);

  const colors = {
    issue: 'tomato',
    observation: '#fc929e',
    feature: '#3caf50',
    exercise: 'purple',
  };

  useEffect(() => {
    if (views >= 1000) {
      let formatViews = views.toString();

      formatViews = formatViews.replace(/000$/, 'k');
      setViews(formatViews); // not enough
    }
  }, [views, setViews]);

  useEffect(() => {
    if (title.length >= 120) {
      let formatTitle = `${title.substr(0, 120)}...`;
      setTitle(formatTitle);
    }
  }, [views, setViews, title]);

  return (
    <StyledDocumentItem>
      <span>August 8th, 2021</span>
      <Link href={`/documents/${document.id}`}>
        {/* should change to slug */}
        <a>{title.substr(0, 1).toUpperCase() + title.substr(1)}</a>
      </Link>
      <div>
        <UserAvatar>
          <i className='fas fa-user'/>
          <Link href='/user'>
            <a>{document.author.name}</a>
          </Link>
        </UserAvatar>
        <StatsItems>
          <div>
            <i className='fas fa-heart'/>
            <p>{document.hearts}</p>
          </div>
          <div>
            <i className='fas fa-eye'/>
            <p>{views}</p>
          </div>
        </StatsItems>
        <span style={{background: colors[document.tag]}}/>
      </div>
    </StyledDocumentItem>
  );
};

export default DocumentItem;
