import {
  StyledDocument,
  Markdown
} from '../styles/Document.styled';
import DocumentMeta from './DocumentMeta';
import {useContext, useEffect, useState} from 'react';
import DocumentActions from './DocumentActions';
import {useMarkdown} from "../../Custom hooks/useMarkdown";
import {DashboardContext} from "../../context/dashboard context/DashboardState";
import {verifyMember} from "../../utils/utils";

const Document = ({document}) => {
  const [longTitle, setLongTitle] = useState(false);
  const {updateViews} = useContext(DashboardContext)
  const parsedMarkdown = useMarkdown(document.document, true)

  useEffect(() => {
    if (document.title.length >= 70) {
      setLongTitle(true);
    } else {
      setLongTitle(false);
    }
  }, [document.title]);

  useEffect(() => {
    const viewed = verifyMember(document.id, '__.e-doc-vi-ew-s') // code for views :2nd param
    if (viewed) return;

    updateViews(document.id);
  }, []);

  return (
    <StyledDocument longTitle={longTitle}>
      <h1>{document.title}</h1>
      <DocumentMeta meta={document.meta}/>
      <Markdown>
        <div dangerouslySetInnerHTML={{
          __html: parsedMarkdown
        }}/>
        <p>In development</p>
      </Markdown>
      <DocumentActions id={document.id} hearts={document.meta.hearts}/>
    </StyledDocument>
  );
};

export default Document;
