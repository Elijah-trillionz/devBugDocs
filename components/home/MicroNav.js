import { useEffect, useState } from 'react';
import {
  BackToTopModal,
  BodyOverlay,
  SearchButton,
  SearchModal,
  StyledMicroNav,
} from '../styles/home/MicroNav.styled';

const MicroNav = () => {
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
      const htmlEl = e.srcElement.querySelector('html');
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
      {sticky && <h2>SortCode</h2>}
      <div>
        <ul>
          <li>
            #Issues <span style={{ background: 'tomato' }}></span>
          </li>
          <li>
            #Features <span style={{ background: '#3caf50' }}></span>
          </li>
          <li>
            #Observations <span style={{ background: '#fc929e' }}></span>
          </li>
          <li>
            #Exercises <span style={{ background: 'purple' }}></span>
          </li>
          <li>
            #JavaScript <span style={{ background: '#f0db4f' }}></span>
          </li>
          <li>
            #React <span style={{ background: '#61dafb' }}></span>
          </li>
        </ul>
      </div>
      <i className='fas fa-search' onClick={openSearchModal}></i>
      <SearchModal active={isModalActive}>
        <div>
          <h3>Search SortCode</h3>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search here'
          />
          <SearchButton bg='#46A2C9' color='#fff' border='#46A2C9'>
            Search
          </SearchButton>
        </div>
      </SearchModal>
      <BackToTopModal active={backToTopModal} onClick={backToTop}>
        <i className='fas fa-chevron-up'></i>
      </BackToTopModal>
      <BodyOverlay active={isModalActive} onClick={closeSearchModal} />
    </StyledMicroNav>
  );
};

export default MicroNav;
