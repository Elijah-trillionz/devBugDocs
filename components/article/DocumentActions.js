import { LikeDocument, StyledLoginModal } from "../styles/Document.styled";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../context/dashboard context/DashboardState";
import { signIn } from "../../utils/utils";
import { BodyOverlay } from "../styles/MicroNav.styled";
import { StyledButton } from "../styles/Button.Styled";
import { SET_AUTH_ERROR } from "../../context/types";

const DocumentActions = ({ id, hearts, likedByViewer }) => {
  const { likeDocument, success, authError, setDispatch, documentHearts } =
    useContext(DashboardContext);
  const [stateHearts, setStateHearts] = useState(hearts);
  const [defColor, setDefColor] = useState(false);

  const incrementLike = () => {
    likeDocument(id);
  };

  useEffect(() => {
    if (success) {
      setStateHearts(documentHearts);
      setDefColor(true);
    }
  }, [success]);

  useEffect(() => {
    setDefColor(likedByViewer ? true : defColor);
  }, [likedByViewer]);

  return (
    <div>
      <LikeDocument defColor={defColor}>
        <h3>Leave a heart</h3>
        <p>
          {stateHearts}
          <i className="fas fa-heart" onClick={incrementLike} />
        </p>
      </LikeDocument>
      {authError && <LoginModal active={authError} />}
      <BodyOverlay
        active={authError}
        onClick={() => setDispatch(SET_AUTH_ERROR, false)}
      />
    </div>
  );
};

export default DocumentActions;

const LoginModal = ({ active }) => {
  return (
    <StyledLoginModal active={active}>
      <div>
        <h3>You need to login to perform this action</h3>
        <br />
        <StyledButton bg="#000" border="#000" color="#fff" onClick={signIn}>
          Login with GitHub
        </StyledButton>
      </div>
    </StyledLoginModal>
  );
};
