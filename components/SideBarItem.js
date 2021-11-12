import {StyledSidebarItem} from './styles/Sidebar.styled';
import Link from "next/link";

const DefSideBarItem = ({iconName, iconbg, title, subTitle, digit, fab, disabled}) => {
  return (
    <StyledSidebarItem disabled={disabled} title={disabled ? 'No documents for this month' : ''}>
      <i
        className={`${fab ? 'fab' : 'fas'} fa-${iconName}`}
        style={{background: iconbg}}
      />
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>
      <p>{digit}</p>
    </StyledSidebarItem>
  )
}

const SideBarItem = ({iconName, iconbg, title, subTitle, digit, fab, href, disabled}) => {
  return (
    disabled ?
      <DefSideBarItem iconbg={iconbg} title={title} subTitle={subTitle} fab={fab} disabled={disabled}
                      iconName={iconName} digit={digit}/>
      : (
        <Link href={href} as={href}>
          <a>
            <DefSideBarItem iconbg={iconbg} title={title} subTitle={subTitle} fab={fab} disabled={disabled}
                            iconName={iconName} digit={digit}/>
          </a>
        </Link>
      )
  );
};

export default SideBarItem;
