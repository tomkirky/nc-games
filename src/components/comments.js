import { useEffect } from 'react';
import { getComments } from '../utils/api';
import formatDate from '../utils/date';

const Comments = ({ review_id, comments, setComments }) => {
  useEffect(() => {
    getComments(review_id).then((data) => {
      setComments(data);
    });
  }, [setComments, review_id]);

  return comments.length !== 0 ? (
    <ul>
      {comments.map((comment) => {
        return (
          <li
            key={comment.comment_id}
            className="text-center border border-dark justify-content-center col-md-6 offset-md-3 mt-2 mb-2"
          >
            <h3>{comment.author}</h3>
            <p>Votes: {comment.votes}</p>
            <p>Created: {formatDate(comment.created_at)}</p>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="text-center border border-dark justify-content-center col-md-6 offset-md-3 mt-2 mb-2">
      No comments
    </p>
  );
};

export default Comments;
