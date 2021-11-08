import { LikeDocument, ShareDocument } from '../styles/Document.styled';

const DocumentActions = () => {
  return (
    <div>
      <LikeDocument>
        <h3>Leave a heart</h3>
        <i className='fas fa-heart'></i>
      </LikeDocument>
      <ShareDocument>
        <h3>Please Share</h3>
        <div>
          <i className='fab fa-facebook'></i>
          <i className='fab fa-twitter'></i>
          <i className='fab fa-linkedin'></i>
          <i className='fab fa-reddit'></i>
          <i className='fab fa-hacker-news-square'></i>
        </div>
      </ShareDocument>
    </div>
  );
};

// hacker ff6600
// facebook 3b5998
// twitter 00acee
// reddit #ff4500
// linkedin #0077b5

export default DocumentActions;
