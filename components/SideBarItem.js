import { StyledSidebarItem } from './styles/Sidebar.styled';

const SideBarItem = ({ iconName, iconbg, title, subTitle, digit }) => {
  return (
    <StyledSidebarItem>
      <i className={`fas fa-${iconName}`} style={{ background: iconbg }}></i>
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>
      <p>{digit}</p>
    </StyledSidebarItem>
  );
};

export default SideBarItem;
