import { UserAvatar, StatsItems } from '../styles/DocumentItem.styled';
import Link from 'next/link';
import { StyledDocumentMeta } from '../styles/Document.styled';

const DocumentMeta = ({ meta }) => {
  return (
    <StyledDocumentMeta>
      <UserAvatar>
        <i className='fas fa-user'></i>
        <Link href='/user'>
          <a>{meta.author}</a>
        </Link>
      </UserAvatar>
      <StatsItems>
        <div>
          <i className='fas fa-calendar-alt'></i>
          <p>{meta.date}</p>
        </div>
      </StatsItems>
    </StyledDocumentMeta>
  );
};

export default DocumentMeta;
