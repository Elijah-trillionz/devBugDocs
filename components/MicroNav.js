import {useContext, useEffect, useState} from 'react';
import {
  BackToTopModal,
  BodyOverlay,
  StyledMicroNav,
} from './styles/MicroNav.styled';
import Link from 'next/link';
import {GlobalContext} from '../context/global context/GlobalState';
import SearchModal from "./SearchModal";

const MicroNav = ({mainTitle}) => {
  const {tags} = useContext(GlobalContext);

  const [isModalActive, setIsModalActive] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [backToTopModal, setBackToTopModal] = useState(false);

  const openSearchModal = () => {
    setIsModalActive(true);
  };

  const closeSearchModal = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    const makeStickyHeader = (e) => {
      const htmlEl = e.target.querySelector('html');
      if (htmlEl.scrollTop >= 240) {
        setSticky(true);
        setBackToTopModal(true);
      } else {
        setSticky(false);
        setBackToTopModal(false);
      }
    };

    window.addEventListener('scroll', makeStickyHeader);

    return () => window.removeEventListener('scroll', makeStickyHeader);
  }, []);

  const backToTop = () => {
    document.querySelector('html').scrollTop = 0;
  };

  return (
    <StyledMicroNav sticky={sticky}>
      {sticky && <h2>{mainTitle ? mainTitle : 'SortCode'}</h2>}
      <div>
        <ul>
          {tags.map((tag) => (
            <li key={tag.tag}>
              <Link href={tag.href} as={tag.href}>
                {`#${tag.tag}`}
              </Link>
              <span style={{background: tag.bg}}/>
            </li>
          ))}
        </ul>
      </div>
      <i className='fas fa-search' onClick={openSearchModal}/>
      <SearchModal isModalActive={isModalActive}/>
      <BackToTopModal active={backToTopModal} onClick={backToTop}>
        <i className='fas fa-chevron-up'/>
      </BackToTopModal>
      <BodyOverlay active={isModalActive} onClick={closeSearchModal}/>
    </StyledMicroNav>
  );
};

export default MicroNav;
