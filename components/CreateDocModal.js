import {
  MarkTextArea,
  ModalBody,
  ModalError,
  ModalFooter,
  ModalHeader,
  ModalPreview,
  StyledSettingsView,
  StyledCreateDocModal,
  TextArea,
  WarningModal,
  PreviewTitle,
  PreviewBody,
} from "./styles/CreateDocModal.styled";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../context/dashboard context/DashboardState";
import { formattedDate } from "../utils/dates";
import SuccessHandler from "./SuccessHandler";
import { useMarkdown } from "../Custom hooks/useMarkdown";

const CreateDocModal = ({ active, setActive, editing, docToEdit }) => {
  const {
    addDocument,
    updateDocument,
    error: apiError,
    success,
    setSuccess,
    loading,
  } = useContext(DashboardContext);
  const [title, setTitle] = useState(editing ? docToEdit.title : "");
  const [document, setDocument] = useState(editing ? docToEdit.document : "");
  const [preview, setPreview] = useState(false);
  const [settingsView, setSettingsView] = useState(false);
  const [tag, setTag] = useState(editing ? docToEdit.tag : "");
  const [category, setCategory] = useState(editing ? docToEdit.category : "");
  const [error, setError] = useState(false);
  const [header, setHeader] = useState(
    editing ? "Edit document" : "Create a Document"
  );
  const parsedDoc = useMarkdown(document, preview);

  const selectCategory = (e) => {
    setCategory(e.target.value);
  };

  const selectTag = (e) => {
    setTag(e.target.value);
  };

  const submitDocument = (draft) => {
    // errors to be specific
    if (!title) {
      return setError("Your document has a missing title");
    } else if (!document && !draft) {
      return setError("Nothing to document yet, save as draft.");
    } else if (!category || !tag) {
      return setError(
        "Your document has a missing category or tag. Click settings to setup"
      );
    }

    if (editing) {
      updateDocument(
        docToEdit.id,
        title,
        document,
        category,
        docToEdit.meta.date,
        tag,
        draft
      );
    } else {
      addDocument(title, document, category, formattedDate, tag, draft);
    }
  };

  useEffect(() => {
    if (apiError) setError(apiError);
    // eslint-disable-next-line
  }, [apiError]);

  useEffect(() => {
    let t;
    if (error) {
      t = setTimeout(() => {
        setError(false);
      }, 5000);
    }

    return () => clearTimeout(t);
  }, [error]);

  useEffect(() => {
    if (success && !editing) {
      // clear input fields
      setTitle("");
      setDocument("");
      setTag("");
      setCategory("");
      setPreview(false);
      setSettingsView(false);

      // close modal
      setActive(false);
    }
  }, [success]);

  useEffect(() => {
    if (active) {
      // disable body scroll when modal is up
      window.document.querySelector("body").style.overflowY = "hidden";
    }
  }, [active]);

  const toggleHeader = (src, title) => {
    if (!src) {
      setHeader(title);
    } else {
      setHeader(editing ? "Edit Document" : "Create a Document");
    }
  };

  const toggleSettings = () => {
    setSettingsView(!settingsView);
    toggleHeader(settingsView, "Document Settings");
  };

  const togglePreview = () => {
    setPreview(!preview);
    toggleHeader(preview, "Document Preview");
  };

  return (
    <>
      <StyledCreateDocModal active={active}>
        <ModalHeader>
          <i className={"fas fa-times"} onClick={() => setActive(false)} />
          <p>{header}</p>
          <button onClick={togglePreview}>
            <i className={`fas fa-${preview ? "arrow-left" : "eye"}`} />{" "}
            <span>{preview ? "Go back" : "Preview"}</span>
          </button>
        </ModalHeader>
        <ModalBody>
          {settingsView ? (
            <SettingsView
              category={category}
              selectTag={selectTag}
              selectCategory={selectCategory}
              tag={tag}
              editing={editing}
              id={editing ? docToEdit.id : 0}
            />
          ) : preview ? (
            <ModalPreview>
              <PreviewTitle>
                <h1>{title}</h1>
              </PreviewTitle>
              <PreviewBody dangerouslySetInnerHTML={{ __html: parsedDoc }} />
            </ModalPreview>
          ) : (
            <>
              <TextArea
                placeholder={"Title"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                isTitle={true}
              />
              <div className="textarea-container">
                <MarkTextArea
                  placeholder={"Write in Markdown"}
                  value={document}
                  onChange={(e) => setDocument(e.target.value)}
                />
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <button onClick={toggleSettings}>
            <i className={`fas fa-${settingsView ? "edit" : "cog"}`} />
            <span>{settingsView ? " Editor" : " Settings"}</span>
          </button>
          {editing ? (
            <>
              {docToEdit.draft && (
                <button onClick={() => submitDocument(true)} disabled={loading}>
                  <i className={"fas fa-save"} />{" "}
                  <span>{loading ? "loading..." : "Save"}</span>
                </button>
              )}
              <button onClick={() => submitDocument(false)} disabled={loading}>
                <i className={"fas fa-paper-plane"} />{" "}
                <span>
                  {loading
                    ? "loading..."
                    : !docToEdit.draft
                    ? "Save"
                    : "Publish"}
                </span>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => submitDocument(true)} disabled={loading}>
                <i className={"fas fa-save"} />{" "}
                <span>{loading ? "loading..." : "Save"}</span>
              </button>
              <button onClick={() => submitDocument(false)} disabled={loading}>
                <i className={"fas fa-paper-plane"} />{" "}
                <span>{loading ? "loading..." : "Publish"}</span>
              </button>
            </>
          )}
        </ModalFooter>
        {error && (
          <ModalError>
            <p>
              <i className={"fas fa-exclamation-circle"} /> {error}
            </p>
          </ModalError>
        )}
      </StyledCreateDocModal>

      <SuccessHandler message={success} setActive={setSuccess} />
    </>
  );
};

export default CreateDocModal;

const SettingsView = ({
  selectTag,
  selectCategory,
  category,
  tag,
  editing,
  id,
}) => {
  const { deleteDocument } = useContext(DashboardContext);
  const [deleteDoc, setDeleteDoc] = useState(false);

  return (
    <StyledSettingsView>
      <p>Select Tag</p>
      <select onChange={selectTag} value={tag}>
        <option value={""}>Tag</option>
        <option value={"react"}>React.js</option>
        <option value={"vue"}>Vue.js</option>
        <option value={"node"}>Node.js</option>
        <option value={"javascript"}>JavaScript</option>
        <option value={"python"}>Python</option>
      </select>
      <p>Select Category</p>
      <select onChange={selectCategory} value={category}>
        <option value={""}>Category</option>
        <option value={"front-end"}>Front-end</option>
        <option value={"back-end"}>Back-end</option>
      </select>
      {editing && (
        <>
          <p>Danger Zone</p>
          <button onClick={() => setDeleteDoc(true)}>Delete Document</button>
        </>
      )}
      <WarningModal active={deleteDoc}>
        <p>This is an irreversible action. Are you sure?</p>
        <div>
          <button onClick={() => setDeleteDoc(false)}>Cancel</button>
          <button onClick={() => deleteDocument(id)}>Delete</button>
        </div>
      </WarningModal>
    </StyledSettingsView>
  );
};
