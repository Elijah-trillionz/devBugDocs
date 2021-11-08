import { useEffect, useState } from 'react';
import {
  StatsItems,
  StyledDocumentItem,
  UserAvatar,
} from './styles/DocumentItem.styled';
import Link from 'next/link';

const DocumentItem = ({ document }) => {
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
  }, [views, setViews]);

  return (
    <StyledDocumentItem>
      <span>August 8th, 2021</span>
      <Link href={`/${document.title}`}>
        {/* should change to slug */}
        <a>{title}</a>
      </Link>
      <div>
        <UserAvatar>
          <i className='fas fa-user'></i>
          <Link href='/user'>
            <a>{document.author}</a>
          </Link>
        </UserAvatar>
        <StatsItems>
          <div>
            <i className='fas fa-heart'></i>
            <p>{document.hearts}</p>
          </div>
          <div>
            <i className='fas fa-eye'></i>
            <p>{views}</p>
          </div>
        </StatsItems>
        <span style={{ background: colors[document.type] }}></span>
      </div>
    </StyledDocumentItem>
  );
};

export default DocumentItem;
