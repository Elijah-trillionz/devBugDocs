import {LikeDocument} from '../styles/Document.styled';
import {useContext, useEffect, useState} from "react";
import {DashboardContext} from "../../context/dashboard context/DashboardState";
import {verifyMember} from "../../utils/utils";

const DocumentActions = ({id, hearts}) => {
  const {likeDocument, success} = useContext(DashboardContext);
  const [stateHearts, setStateHearts] = useState(hearts);
  const [defColor, setDefColor] = useState(false);

  const incrementLike = () => {
    const likeExists = verifyMember(id, '__.e-doc-li-ke-s');
    if (likeExists) return;

    setStateHearts((prev) => prev + 1);
    likeDocument(id)
  }

  const addDefColor = () => {
    const likeExists = verifyMember(id, '__.e-doc-li-ke-s');
    if (likeExists) setDefColor(true);
    else setDefColor(false);
  }

  useEffect(() => {
    addDefColor()
  }, []);

  useEffect(() => {
    addDefColor()
  }, [success]);

  return (
    <div>
      <LikeDocument defColor={defColor}>
        <h3>Leave a heart</h3>
        <p>
          {stateHearts}
          <i className='fas fa-heart' onClick={incrementLike}/>
        </p>
      </LikeDocument>
    </div>
  );
};

export default DocumentActions;
