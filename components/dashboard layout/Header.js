import {
  DashboardHeaderDropDown,
  StyledHeader,
  UserAvatar,
} from "../styles/Dashboard layout/Header.styled";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { deleteCookie, setCookie } from "../../utils/utils";
import { DashboardContext } from "../../context/dashboard context/DashboardState";
import CreateDocModal from "../CreateDocModal";
import { BodyOverlay } from "../styles/MicroNav.styled";
import { LightBodyOverlay } from "../styles/DocumentPageAction.styled";

const Header = () => {
  const { user } = useContext(DashboardContext);
  const [sticky, setSticky] = useState(false);
  const [createDocModal, setCreateDocModal] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const signOut = () => {
    deleteCookie("access_token");
    setCookie("new_user");
    window.location.reload();
  };

  useEffect(() => {
    const makeStickyHeader = (e) => {
      const htmlEl = e.target.querySelector("html");
      if (htmlEl.scrollTop >= 70) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", makeStickyHeader);

    return () => window.removeEventListener("scroll", makeStickyHeader);
  }, []);

  const toggleCreateDocModal = () => {
    setCreateDocModal(!createDocModal);
  };

  return (
    <StyledHeader sticky={sticky}>
      <h2>
        <Link href="/" as="/">
          SortCode
        </Link>
      </h2>
      <button onClick={toggleCreateDocModal}>
        <i className={"fas fa-plus"} /> Create Document
      </button>
      {user.user && (
        <UserAvatar onClick={() => setDropdownActive(!dropdownActive)}>
          <p>{user.user.name}</p>
          <img src={user.user.imgUri} alt={`${user.user.name}`} width={30} />
          <DashboardHeaderDropDown active={dropdownActive}>
            <p>{user.user?.name}</p>
            <ul>
              <Link href="/dashboard" as="/dashboard">
                <li>Documents</li>
              </Link>
              <Link href="/dashboard/drafts" as={"/dashboard/drafts"}>
                <li>Drafts</li>
              </Link>
              <li onClick={toggleCreateDocModal}>Create Document</li>
              <li onClick={signOut}>Logout</li>
            </ul>
          </DashboardHeaderDropDown>
        </UserAvatar>
      )}
      <CreateDocModal
        active={createDocModal}
        setActive={setCreateDocModal}
        editing={false}
      />
      <BodyOverlay active={createDocModal} />
      <LightBodyOverlay
        active={dropdownActive}
        onClick={() => setDropdownActive(false)}
      />
    </StyledHeader>
  );
};

export default Header;
