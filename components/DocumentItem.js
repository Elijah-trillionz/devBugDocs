import {useContext, useEffect, useState} from 'react';
import {
  StatsItems,
  StyledDocumentItem,
  UserAvatar,
} from './styles/DocumentItem.styled';
import Link from 'next/link';
import {colors} from "../utils/utils";
import {DashboardContext} from "../context/dashboard context/DashboardState";
import CreateDocModal from "./CreateDocModal";
import {BodyOverlay} from "./styles/MicroNav.styled";

const DocumentItem = ({document, dashboard}) => {
  const {user} = useContext(DashboardContext)
  const [views, setViews] = useState(document.views);
  const [title, setTitle] = useState(document.title);
  const [author, setAuthor] = useState({});
  const [editActive, setEditActive] = useState(false);

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

  useEffect(() => {
    if (dashboard) {
      setAuthor(user.user)
    } else {
      setAuthor(document.author)
    }
  }, [dashboard])

  return (
    <>
      <StyledDocumentItem>
        <span>{document.meta.date}{dashboard && <b>{document.draft ? ' | Draft' : ''}</b>}</span>
        {dashboard ? (
            <a onClick={() => setEditActive(true)}>{title.substr(0, 1).toUpperCase() + title.substr(1)} - Edit</a>
          )
          : (
            <Link href={`/documents/${document.id}${document.draft ? '?type=draft' : ''}`}>
              {/* should change to slug */}
              <a>{title.substr(0, 1).toUpperCase() + title.substr(1)}</a>
            </Link>
          )}
        <div>
          <UserAvatar>
            <div>
              <img src={author.imgUri} alt={`${author.name} avatar`} width={35}/>
            </div>
            <Link href='/user'>
              <a>{author.name}</a>
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
      {/*for editing*/}
      <CreateDocModal active={editActive} setActive={setEditActive} editing={true} docToEdit={document}/>
      <BodyOverlay active={editActive}/>
    </>
  );
};

export default DocumentItem;
