import { ActionButton, StyledButton } from "../styles/Button.Styled";
import {
  StyledHeader,
  UpperHeader,
  Intro,
  DesignSvgOne,
  DesignSvgTwo,
  CircleConOne,
  CircleConTwo,
  HeaderDropDown,
  UserAvatar,
} from "../styles/home layout/Header.styled";
import Link from "next/link";
import DesignSvg from "../svgs/DesignSvg";
import CircleSvg from "../svgs/CircleSvg";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global context/GlobalState";
import { deleteCookie, setCookie, signIn } from "../../utils/utils";
import CreateDocModal from "../CreateDocModal";
import { BodyOverlay } from "../styles/MicroNav.styled";
import { LightBodyOverlay } from "../styles/DocumentPageAction.styled";

const Header = ({ title }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const { user } = useContext(GlobalContext);
  const [createDocModal, setCreateDocModal] = useState(false);

  const signOut = () => {
    deleteCookie("access_token");
    setCookie("new_user");
    window.location.reload();
  };

  const toggleCreateDocModal = () => {
    if (user.user) setCreateDocModal(!createDocModal);
  };

  // TODO: more to do on the header
  return (
    <>
      <StyledHeader>
        <DesignSvgOne>
          <DesignSvg />
        </DesignSvgOne>
        <CircleConOne>
          <CircleSvg />
        </CircleConOne>
        <UpperHeader>
          <p>
            <Link href={"/"}>SortCode</Link>
          </p>
          {user.user ? (
            <UserAvatar
              onClick={() => setDropdownActive(!dropdownActive)}
              clicked={dropdownActive}
            >
              <img
                src={user.user?.imgUri}
                alt={`${user.user?.name}`}
                width={40}
              />
              <i className={"fas fa-chevron-down"} />
              <HeaderDropDown active={dropdownActive}>
                <p>{user.user.name}</p>
                <ul>
                  <Link href="/dashboard" as="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                  <Link href="/dashboard/documents" as={"/dashboard/documents"}>
                    <li>Documents</li>
                  </Link>
                  <li onClick={toggleCreateDocModal}>Create Document</li>
                  <li onClick={signOut}>Logout</li>
                </ul>
              </HeaderDropDown>
            </UserAvatar>
          ) : (
            <StyledButton bg="#000" border="#000" color="#fff" onClick={signIn}>
              Login with GitHub
            </StyledButton>
          )}
        </UpperHeader>
        <Intro>
          <div>
            <h2>{title ? title : "Document Your Bug Experience"}</h2>
            <ActionButton
              border="#fff"
              color="#444"
              onClick={toggleCreateDocModal}
            >
              {user.user ? (
                <>
                  <i className="fas fa-plus" /> Create Document
                </>
              ) : (
                <div onClick={signIn}>Get Started</div>
              )}
            </ActionButton>
          </div>
        </Intro>
        <DesignSvgTwo>
          <DesignSvg />
        </DesignSvgTwo>
        <CircleConTwo>
          <CircleSvg />
        </CircleConTwo>
      </StyledHeader>

      <BodyOverlay active={createDocModal} />

      <LightBodyOverlay
        active={dropdownActive}
        onClick={() => setDropdownActive(false)}
      />
      <CreateDocModal
        active={createDocModal}
        setActive={setCreateDocModal}
        editing={false}
      />
    </>
  );
};

export default Header;
