import {ActionButton, StyledButton} from '../styles/Button.Styled';
import {
  StyledHeader,
  UpperHeader,
  Intro,
  DesignSvgOne,
  DesignSvgTwo,
  CircleConOne,
  CircleConTwo, HeaderDropDown,
} from '../styles/home layout/Header.styled';
import Link from 'next/link'
import DesignSvg from '../svgs/DesignSvg';
import CircleSvg from '../svgs/CircleSvg';
import {v4} from 'uuid'
import {useContext, useState} from "react";
import {GlobalContext} from "../../context/global context/GlobalState";
import {deleteCookie, setCookie} from "../../utils/utils";
import CreateDocModal from "../CreateDocModal";
import {BodyOverlay} from "../styles/MicroNav.styled";

const Header = ({title}) => {
  const {user} = useContext(GlobalContext);
  const [createDocModal, setCreateDocModal] = useState(false)

  const signIn = () => {
    const state = v4();
    localStorage.setItem('github-state', state);
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=2c05d57e6bffd2b25207&state=${state}`)
  }

  const signOut = () => {
    deleteCookie('access_token');
    setCookie('new_user');
    window.location.reload();
  }

  const toggleCreateDocModal = () => {
    if (user.user) setCreateDocModal(!createDocModal)
  }

  // TODO: more to do on the header
  return (
    <>
      <StyledHeader>
        <DesignSvgOne>
          <DesignSvg/>
        </DesignSvgOne>
        <CircleConOne>
          <CircleSvg/>
        </CircleConOne>
        <UpperHeader>
          <p>SortCode</p>
          {user.user ?
            (
              <div>
                <img src={user.user?.imgUri} alt={`${user.user?.name}`} width={40}/>
                <HeaderDropDown>
                  <p>{user.user.name}</p>
                  <ul>
                    <Link href='/dashboard' as='/dashboard'>
                      <li>Dashboard</li>
                    </Link>
                    <Link href='/dashboard/documents' as={'/dashboard/documents'}>
                      <li>Documents</li>
                    </Link>
                    <li onClick={toggleCreateDocModal}>Create Document</li>
                    <li onClick={signOut}>Logout</li>
                  </ul>
                </HeaderDropDown>
              </div>
            )
            : (
              <StyledButton bg='#000' border='#000' color='#fff' onClick={signIn}>
                Login with GitHub
              </StyledButton>
            )
          }
        </UpperHeader>
        <Intro>
          <div>
            <h2>{title ? title : 'Document Your Coding Experience'}</h2>
            <ActionButton border='#fff' color='#444' onClick={toggleCreateDocModal}>
              {user.user ? (
                <>
                  <i className='fas fa-plus'/> Create Document
                </>
              ) : (
                <Link href='/user' as='/user'>
                  Get Started
                </Link>
              )}
            </ActionButton>
          </div>
        </Intro>
        <DesignSvgTwo>
          <DesignSvg/>
        </DesignSvgTwo>
        <CircleConTwo>
          <CircleSvg/>
        </CircleConTwo>
      </StyledHeader>

      <BodyOverlay active={createDocModal}/>
      <CreateDocModal active={createDocModal} setActive={setCreateDocModal} editing={false}/>
    </>
  );
};

export default Header;
