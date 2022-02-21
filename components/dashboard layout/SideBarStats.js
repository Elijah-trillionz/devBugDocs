import SideBarItem from "../SideBarItem";
import { StyledSidebar } from "../styles/Sidebar.styled";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../context/dashboard context/DashboardState";
import StatsItem from "./StatsItem";

const SideBarStats = () => {
  const { userDocs } = useContext(DashboardContext);
  const [totalHearts, setTotalHearts] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [tags, setTags] = useState({
    react: 0,
    vue: 0,
    node: 0,
    javascript: 0,
    python: 0,
    frontEnd: 0,
    backEnd: 0,
  });

  useEffect(() => {
    if (userDocs.length > 0) {
      const totalHearts = sum(userDocs, "hearts");
      setTotalHearts(totalHearts);

      const totalViews = sum(userDocs, "views");
      setTotalViews(totalViews);

      const javascript = userDocs.filter((doc) => doc.tag === "javascript");
      setTags((prevState) => ({ ...prevState, javascript: javascript.length }));

      const python = userDocs.filter((doc) => doc.tag === "python");
      setTags((prevState) => ({ ...prevState, python: python.length }));

      const react = userDocs.filter((doc) => doc.tag === "react");
      setTags((prevState) => ({ ...prevState, react: react.length }));

      const vue = userDocs.filter((doc) => doc.tag === "vue");
      setTags((prevState) => ({ ...prevState, vue: vue.length }));

      const node = userDocs.filter((doc) => doc.tag === "node");
      setTags((prevState) => ({ ...prevState, node: node.length }));

      const frontEnd = userDocs.filter((doc) => doc.category === "front-end");
      setTags((prevState) => ({ ...prevState, frontEnd: frontEnd.length }));

      const backEnd = userDocs.filter((doc) => doc.category === "back-end");
      setTags((prevState) => ({ ...prevState, backEnd: backEnd.length }));
    }
  }, [userDocs]);

  const sum = (array, prop) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i][prop];
    }
    return total;
  };

  return (
    <StyledSidebar>
      <h3>All Time Stats</h3>
      <StatsItem
        title="Hearts"
        iconName="heart"
        subTitle={"All Time"}
        iconbg="tomato"
        stat={totalHearts}
      />
      <StatsItem
        title="Views"
        subTitle={"All Time"}
        iconName="eye"
        iconbg="#4DC939"
        stat={totalViews}
      />
      <StatsItem
        title="Documents"
        subTitle={"All Time"}
        iconName="code"
        iconbg="#C939BA"
        stat={userDocs.length}
      />
      <SideBarItem
        title="Follow Us"
        subTitle="Twitter @elijahtrillionz"
        iconName="twitter"
        iconbg="#00acee"
        digit={5000}
        fab={true}
        href="https://twitter.com/elijahtrillionz"
      />
      <h3>Stats by Tags</h3>
      <StatsItem
        title="JavaScript"
        subTitle={`Tag`}
        iconName="js"
        iconbg="#f0db4f"
        stat={tags.javascript}
        fab={true}
      />
      <StatsItem
        title="React"
        subTitle={`Tag`}
        iconName="react"
        iconbg="#61dafb"
        stat={tags.react}
        fab={true}
      />
      <StatsItem
        title="VueJS"
        subTitle={`Tag`}
        iconName="vuejs"
        iconbg="#41B883"
        stat={tags.vue}
        fab={true}
      />
      <StatsItem
        title="Node"
        subTitle={`Tag`}
        iconName="node-js"
        iconbg="#3C873A"
        stat={tags.node}
        fab={true}
      />
      <StatsItem
        title="Python"
        subTitle={`Tag`}
        iconName="python"
        iconbg="#4b8bbe"
        stat={tags.node}
        fab={true}
      />
      <h3>Stats by Categories</h3>
      <StatsItem
        title="Front-end"
        subTitle={"Category"}
        iconName="bug"
        iconbg="#b48c6c"
        stat={tags.frontEnd}
      />
      <StatsItem
        title="Back-end"
        subTitle={`Category`}
        iconName="bug"
        iconbg="#303030"
        stat={tags.backEnd}
      />
      <SideBarItem
        title="Support Us"
        subTitle="Buy me a Coffee"
        iconName="mug-hot"
        iconbg="#f0db4f"
        digit="$$"
        href="https://buymeacoffee.com/elijahtrillionz"
      />
    </StyledSidebar>
  );
};

export default SideBarStats;
