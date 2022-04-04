import {
  StyledDocument,
  Markdown,
  EditDocumentHandler,
} from "../styles/Document.styled";
import DocumentMeta from "./DocumentMeta";
import { useContext, useEffect, useState } from "react";
import DocumentActions from "./DocumentActions";
import { useMarkdown } from "../../Custom hooks/useMarkdown";
import { DashboardContext } from "../../context/dashboard context/DashboardState";
import { verifyMember } from "../../utils/utils";
import ErrorHandler from "../ErrorHandler";
import CreateDocModal from "../CreateDocModal";
import { BodyOverlay } from "../styles/MicroNav.styled";

const Document = ({ document }) => {
  const [longTitle, setLongTitle] = useState(false);
  const { updateViews, error, setError, user } = useContext(DashboardContext);
  const parsedMarkdown = useMarkdown(document.document, true);
  const [likedDocument, setLikedDocument] = useState(false);
  const [editActive, setEditActive] = useState(false);

  useEffect(() => {
    if (user?.user?.hearts) {
      const likedDocument = user?.user?.hearts.find(
        (likedDocumentId) => likedDocumentId === document.id
      );
      setLikedDocument(!!likedDocument);
    }
  }, [user]);

  useEffect(() => {
    if (document.title.length >= 70) {
      setLongTitle(true);
    } else {
      setLongTitle(false);
    }
  }, [document.title]);

  useEffect(() => {
    const viewed = verifyMember(document.id, "__.e-doc-vi-ew-s"); // code for views :2nd param
    if (viewed) return;

    updateViews(document.id);
  }, []);

  return (
    <StyledDocument longTitle={longTitle}>
      <h1>{document.title}</h1>
      <DocumentMeta meta={document.meta} />
      <Markdown>
        <div
          dangerouslySetInnerHTML={{
            __html: parsedMarkdown,
          }}
        />
      </Markdown>
      {user?.user?.hearts && (
        <EditDocumentHandler onClick={() => setEditActive(!editActive)}>
          <div>
            <i className={"fas fa-pen"} />
            <p>Edit Document</p>
          </div>
        </EditDocumentHandler>
      )}
      <DocumentActions
        id={document.id}
        hearts={document.meta.hearts}
        likedByViewer={likedDocument}
      />
      {error && <ErrorHandler setActive={setError} message={error} />}
      <CreateDocModal
        active={editActive}
        setActive={setEditActive}
        editing={true}
        docToEdit={document}
      />
      <BodyOverlay active={editActive} onClick={() => setEditActive(false)} />
    </StyledDocument>
  );
};

export default Document;
