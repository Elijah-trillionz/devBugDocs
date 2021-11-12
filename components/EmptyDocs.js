import {StyledEmptyDocs} from "./styles/EmptyDocs.styled";

const EmptyDocs = ({msg}) => {
  // TODO: apply more styles and elements here
  return (
    <StyledEmptyDocs>
      <p>{msg}</p>
    </StyledEmptyDocs>
  )
}

export default EmptyDocs