import {StyledSidebarItem} from '../styles/Sidebar.styled';

const SideBarItem = ({iconName, iconbg, title, subTitle, stat, fab}) => {
  return (
    <StyledSidebarItem>
      <i
        className={`${fab ? 'fab' : 'fas'} fa-${iconName}`}
        style={{background: iconbg}}
      />
      <div>
        <p>{title}</p>
        {subTitle && (
          <span>{subTitle}</span>
        )}
      </div>
      <p>{stat}</p>
    </StyledSidebarItem>
  );
};

export default SideBarItem;
