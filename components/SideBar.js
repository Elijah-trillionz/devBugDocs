import SideBarItem from './SideBarItem';
import { StyledSidebar } from './styles/Sidebar.styled';

const SideBar = () => {
  return (
    <StyledSidebar>
      <h3>Hearts</h3>
      <SideBarItem
        title='Most Loved'
        subTitle='Month of October'
        iconName='heart'
        iconbg='tomato'
        digit={40}
      />
      <SideBarItem
        title='Most Loved'
        subTitle='Month of October'
        iconName='heart'
        iconbg='tomato'
        digit={40}
      />
      <SideBarItem
        title='Follow Us'
        subTitle='Twitter @elijahtrillionz'
        iconName='heart'
        iconbg='tomato'
        digit={40}
      />
      <h3>Views</h3>
      <SideBarItem
        title='Most Viewed'
        subTitle='Month of October'
        iconName='eye'
        iconbg='tomato'
        digit={40}
      />
      <SideBarItem
        title='Most Viewed'
        subTitle='Month of October'
        iconName='eye'
        iconbg='tomato'
        digit={40}
      />
      <SideBarItem
        title='Most Viewed'
        subTitle='Month of October'
        iconName='eye'
        iconbg='tomato'
        digit={40}
      />
    </StyledSidebar>
  );
};

export default SideBar;
