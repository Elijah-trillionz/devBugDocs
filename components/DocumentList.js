import EmptyDocs from "./EmptyDocs";
import DocumentItem from "./DocumentItem";
import { sortDocuments } from "../utils/utils";
import { useContext, useState } from "react";
import NestedErrorHandler from "./NestedErrorHandler";
import DocumentPageAction from "./DocumentPageAction";
import { LightBodyOverlay } from "./styles/DocumentPageAction.styled";

const DocumentList = ({
  documents,
  setFilterType,
  capTitle,
  documentTypeName,
  _404msg,
  context,
  dashboard,
}) => {
  const [loading, setLoading] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const { initLoading, error } = useContext(context);

  return (
    <main>
      {initLoading ? (
        <p style={{ marginTop: "20px", color: "#444" }}>Loading...</p>
      ) : error ? (
        <NestedErrorHandler errorMsg={error} />
      ) : (
        <>
          <DocumentPageAction
            context={context}
            capTitle={capTitle}
            setLoading={setLoading}
            setFilterType={setFilterType}
            documents={documents}
            documentTypeName={documentTypeName}
            setDropdownActive={setDropdownActive}
            dropdownActive={dropdownActive}
          />
          {documents.length <= 0 ? (
            <EmptyDocs msg={_404msg} />
          ) : loading ? (
            <p style={{ fontSize: "0.8rem", marginTop: "20px", color: "#444" }}>
              Loading..
            </p>
          ) : (
            <>
              {documents.map((document) => (
                <DocumentItem
                  document={document}
                  key={document.id}
                  dashboard={dashboard}
                />
              ))}
            </>
          )}
        </>
      )}
      <LightBodyOverlay
        active={dropdownActive}
        onClick={() => setDropdownActive(false)}
      />
    </main>
  );
};

export default DocumentList;
