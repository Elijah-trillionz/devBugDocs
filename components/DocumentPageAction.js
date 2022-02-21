import { useContext } from "react";
import { sortDocuments } from "../utils/utils";
import {
  DropDown,
  StyledDocumentPageAction,
} from "./styles/DocumentPageAction.styled";

const DocumentPageAction = ({
  capTitle,
  setFilterType,
  setLoading,
  documentTypeName,
  documents,
  context,
  dropdownActive,
  setDropdownActive,
}) => {
  const { setDispatch } = useContext(context);

  const sortDocumentByViews = () => {
    sortDocuments(documents, "views");
    setFilterType("Most Viewed");
    // a minor delay
    setLoading(true);
    setTimeout(() => {
      setDispatch(documentTypeName, documents);
      setLoading(false);
    }, 300);
  };

  const sortDocumentByHearts = () => {
    sortDocuments(documents, "hearts");
    setFilterType("Most Loved");
    // a minor delay
    setLoading(true);
    setTimeout(() => {
      setDispatch(documentTypeName, documents);
      setLoading(false);
    }, 300);
  };

  const sortDocumentByNewlyPublished = () => {
    sortDocuments(documents, "createdAt");
    setFilterType("Newly Published");
    // a minor delay
    setLoading(true);
    setTimeout(() => {
      setDispatch(documentTypeName, documents);
      setLoading(false);
    }, 300);
  };

  return (
    <StyledDocumentPageAction>
      <h3>{capTitle}</h3>
      <div>
        <i
          className="fas fa-filter"
          onClick={() => setDropdownActive(!dropdownActive)}
        />
        <DropDown active={dropdownActive}>
          <ul>
            <li onClick={sortDocumentByViews}>Most views</li>
            <li onClick={sortDocumentByHearts}>Most hearts</li>
            <li onClick={sortDocumentByNewlyPublished}>Newly Published</li>
          </ul>
        </DropDown>
      </div>
    </StyledDocumentPageAction>
  );
};

export default DocumentPageAction;
