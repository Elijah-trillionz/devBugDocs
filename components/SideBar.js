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
        iconName='twitter'
        iconbg='#00acee'
        digit={5000}
        fab={true}
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
        title='Support Us'
        subTitle='Buy me a Coffee'
        iconName='heart' // change to cup
        iconbg='gold'
        digit='$$'
      />
    </StyledSidebar>
  );
};

export default SideBar;
