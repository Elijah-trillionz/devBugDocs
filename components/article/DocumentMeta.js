import {UserAvatar, StatsItems} from '../styles/DocumentItem.styled';
import Link from 'next/link';
import {StyledDocumentMeta} from '../styles/Document.styled';

const DocumentMeta = ({meta}) => {
  return (
    <StyledDocumentMeta>
      <UserAvatar>
        <i className='fas fa-user'/>
        <Link href='/user'>
          <a>{meta.author.name}</a>
        </Link>
      </UserAvatar>
      <StatsItems>
        <div>
          <i className='fas fa-calendar-alt'/>
          <p>{meta.date}</p>
        </div>
      </StatsItems>
    </StyledDocumentMeta>
  );
};

export default DocumentMeta;
