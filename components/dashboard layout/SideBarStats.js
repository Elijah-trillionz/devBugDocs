import SideBarItem from '../SideBarItem';
import {StyledSidebar} from '../styles/Sidebar.styled';
import {useContext, useEffect, useState} from "react";
import {DashboardContext} from "../../context/dashboard context/DashboardState";
import StatsItem from "./StatsItem";

const SideBarStats = () => {
  const {userDocs} = useContext(DashboardContext);
  const [totalHearts, setTotalHearts] = useState(0)
  const [totalViews, setTotalViews] = useState(0)
  const [tags, setTags] = useState({
    issues: 0,
    features: 0,
    exercises: 0,
    observations: 0,
    langs: 0
  })

  useEffect(() => {
    if (userDocs.length > 0) {
      const totalHearts = sum(userDocs, 'hearts');
      setTotalHearts(totalHearts);

      const totalViews = sum(userDocs, 'views');
      setTotalViews(totalViews);

      const issues = userDocs.filter(doc => doc.tag === 'issue');
      setTags((prevState) => {
        return {...prevState, issues: issues.length}
      });

      const features = userDocs.filter(doc => doc.tag === 'feature');
      setTags((prevState) => {
        return {...prevState, features: features.length}
      });

      const observations = userDocs.filter(doc => doc.tag === 'observation');
      setTags((prevState) => {
        return {...prevState, observations: observations.length}
      });

      const exercises = userDocs.filter(doc => doc.tag === 'exercise');
      setTags((prevState) => {
        return {...prevState, exercises: exercises.length}
      });

      const languages = userDocs.filter(doc => doc.language);
      setTags((prevState) => {
        return {...prevState, langs: languages.length}
      });
    }
  }, [userDocs])

  const sum = (array, prop) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i][prop]
    }
    return total;
  }

  return (
    <StyledSidebar>
      <h3>All Time Stats</h3>
      <StatsItem
        title='Hearts'
        iconName='heart'
        subTitle={'All Time'}
        iconbg='tomato'
        stat={totalHearts}
      />
      <StatsItem
        title='Views'
        subTitle={'All Time'}
        iconName='eye'
        iconbg='#4DC939'
        stat={totalViews}
      />
      <StatsItem
        title='Documents'
        subTitle={'All Time'}
        iconName='code'
        iconbg='#C939BA'
        stat={userDocs.length}
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
      <h3>Stats by Categories</h3>
      <StatsItem
        title='Issues'
        subTitle={`Tag`}
        iconName='bug'
        iconbg='tomato'
        stat={tags.issues}
      />
      <StatsItem
        title='Features'
        subTitle={`Tag`}
        iconName='lightbulb'
        iconbg='#3caf50'
        stat={tags.features}
      />
      <StatsItem
        title='Observations'
        subTitle={`Tag`}
        iconName='eye'
        iconbg='#fc929e'
        stat={tags.observations}
      />
      <StatsItem
        title='Exercises'
        subTitle={`Tag`}
        iconName='tasks'
        iconbg='purple'
        stat={tags.exercises}
      />
      <StatsItem
        title='Languages'
        subTitle={`Languages documented`}
        iconName='js-square'
        iconbg='#4b8bbe'
        stat={tags.langs}
        fab={true}
      />
      {/*<SideBarItem*/}
      {/*  title='Most Views'*/}
      {/*  subTitle={`Month of ${formattedMonth}`}*/}
      {/*  iconName='eye'*/}
      {/*  iconbg='tomato'*/}
      {/*  digit={currentMonthStats.mostViews?.views}*/}
      {/*  href={`/documents/${currentMonthStats.mostViews?.id}`}*/}
      {/*  disabled={currentMonthDocuments.length <= 0}*/}
      {/*/>*/}
      <SideBarItem
        title='Support Us'
        subTitle='Buy me a Coffee'
        iconName='mug-hot'
        iconbg='#f0db4f'
        digit='$$'
        href='https://buymeacoffee.com/elijahtrillionz'
      />
    </StyledSidebar>
  );
};

export default SideBarStats;
