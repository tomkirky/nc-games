import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../contexts/User';
import { postComment } from '../utils/api';

const AddComment = ({ setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState(null);
  const { review_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(review_id, { username: user, body: newComment })
      .then(() => {
        setSubmitted(true);
        setComments((comments) => {
          return [newComment, ...comments];
        });
      })
      .catch(() => {
        setErr(true);
      });
  };

  if (err)
    return (
      <p className="text-center border border-dark justify-content-center col-md-6 offset-md-3 p-4 mt-2 mb-10">
        There was an error processing your comment, please make sure you are
        logged in!
      </p>
    );

  if (submitted)
    return (
      <p className="text-center border border-dark justify-content-center col-md-6 offset-md-3 p-4 mt-2 mb-10">
        Your comment has been posted!
      </p>
    );

  return (
    <Form
      className="text-center justify-content-center col-md-6 offset-md-3 mt-2 mb-2"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="commentForm.TextArea">
        <Form.Label>Please write your comment here...</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          minLength="20"
          maxLength="500"
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
      </Form.Group>
      <Button type="submit">Submit Comment</Button>
    </Form>
  );
};

export default AddComment;
