import SideBarItem from './SideBarItem';
import {StyledSidebar} from './styles/Sidebar.styled';
import {formattedMonth, previousMonth} from "../utils/dates";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../context/global context/GlobalState";
import {sortDocument} from "../utils/utils";

const SideBar = () => {
  const {prevMonthDocuments, currentMonthDocuments} = useContext(GlobalContext);
  const [currentMonthStats, setCurrentMonthStats] = useState({
    mostHearts: 0,
    mostViews: 0
  });
  const [prevMonthStats, setPrevMonthStats] = useState({
    mostHearts: 0,
    mostViews: 0
  });

  useEffect(() => {
    if (currentMonthDocuments.length <= 0) return

    const mostHearts = sortDocument(currentMonthDocuments, 'hearts')[0];
    const mostViews = sortDocument(currentMonthDocuments, 'views')[0];
    setCurrentMonthStats((prevState) => {
      return {...prevState, mostHearts, mostViews}
    });
  }, [currentMonthDocuments]);

  useEffect(() => {
    if (prevMonthDocuments.length <= 0) {
      return setPrevMonthStats((prevState) => {
        return {...prevState, mostHearts: {hearts: 0}, mostViews: {views: 0}}
      });
    }

    const mostHearts = sortDocument(prevMonthDocuments, 'hearts')[0];
    const mostViews = sortDocument(prevMonthDocuments, 'views')[0];
    setPrevMonthStats((prevState) => {
      return {...prevState, mostHearts, mostViews}
    });
  }, [prevMonthDocuments]);


  return (
    <StyledSidebar>
      <h3>Hearts</h3>
      <SideBarItem
        title='Most Hearts'
        subTitle={`Month of ${previousMonth}`}
        iconName='heart'
        iconbg='tomato'
        digit={prevMonthStats.mostHearts?.hearts}
        href={`/documents/${prevMonthStats.mostHearts?.id}`}
        disabled={prevMonthDocuments.length <= 0}
      />
      <SideBarItem
        title='Most Hearts'
        subTitle={`Month of ${formattedMonth}`}
        iconName='heart'
        iconbg='tomato'
        digit={currentMonthStats.mostHearts?.hearts}
        href={`/documents/${currentMonthStats.mostHearts?.id}`}
        disabled={currentMonthDocuments.length <= 0}
      />
      <SideBarItem
        title='Follow Us'
        subTitle='Twitter @elijahtrillionz'
        iconName='twitter'
        iconbg='#00acee'
        digit={5000}
        fab={true}
        href='https://twitter.com/elijahtrillionz'
      />
      <h3>Views</h3>
      <SideBarItem
        title='Most Views'
        subTitle={`Month of ${previousMonth}`}
        iconName='eye'
        iconbg='tomato'
        digit={prevMonthStats.mostViews?.views}
        href={`/documents/${prevMonthStats.mostViews?.id}`}
        disabled={prevMonthDocuments.length <= 0}
      />
      <SideBarItem
        title='Most Views'
        subTitle={`Month of ${formattedMonth}`}
        iconName='eye'
        iconbg='tomato'
        digit={currentMonthStats.mostViews?.views}
        href={`/documents/${currentMonthStats.mostViews?.id}`}
        disabled={currentMonthDocuments.length <= 0}
      />
      <SideBarItem
        title='Support Us'
        subTitle='Buy me a Coffee'
        iconName='mug-hot'
        iconbg='#ffdd00'
        digit='$$'
        href='https://buymeacoffee.com/elijahtrillionz'
      />
    </StyledSidebar>
  );
};

export default SideBar;
