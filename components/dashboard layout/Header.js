import {DashboardHeaderDropDown, StyledHeader, UserAvatar} from "../styles/Dashboard layout/Header.styled";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {deleteCookie, setCookie} from "../../utils/utils";
import {DashboardContext} from "../../context/dashboard context/DashboardState";
import CreateDocModal from "../CreateDocModal";
import {BodyOverlay} from "../styles/MicroNav.styled";

const Header = () => {
  const {user} = useContext(DashboardContext)
  const [sticky, setSticky] = useState(false);
  const [createDocModal, setCreateDocModal] = useState(false);

  const signOut = () => {
    deleteCookie('access_token');
    setCookie('new_user');
    window.location.reload();
  }

  useEffect(() => {
    const makeStickyHeader = (e) => {
      const htmlEl = e.target.querySelector('html');
      if (htmlEl.scrollTop >= 70) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', makeStickyHeader);

    return () => window.removeEventListener('scroll', makeStickyHeader);
  }, []);

  const toggleCreateDocModal = () => {
    setCreateDocModal(!createDocModal)
  }

  return (
    <StyledHeader sticky={sticky}>
      <Link href='/' as='/'>
        <h2>
          SortCode
        </h2>
      </Link>
      <button onClick={toggleCreateDocModal}>
        <i className={'fas fa-plus'}/>{' '}
        Create Document
      </button>
      {user.user && (
        <UserAvatar>
          <p>{user.user.name}</p>
          <img src={user.user.imgUri} alt={`${user.user.name}`} width={30}/>
          <DashboardHeaderDropDown>
            <p>{user.user?.name}</p>
            <ul>
              <Link href='/dashboard' as='/dashboard'>
                <li>Documents</li>
              </Link>
              <Link href='/dashboard/drafts' as={'/dashboard/drafts'}>
                <li>Drafts</li>
              </Link>
              <li onClick={toggleCreateDocModal}>Create Document</li>
              <li onClick={signOut}>Logout</li>
            </ul>
          </DashboardHeaderDropDown>
        </UserAvatar>
      )}
      <CreateDocModal active={createDocModal} setActive={setCreateDocModal} editing={false}/>
      <BodyOverlay active={createDocModal}/>
    </StyledHeader>
  );
};

export default Header;