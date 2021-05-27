import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useParams } from 'react-router';
import { getReview, patchVotes } from '../utils/api';
import formatDate from '../utils/date';
import Comments from './comments';
import FourZeroFour from './fourzerofour';

const IndividualReview = () => {
  const [comments, setComments] = useState([]);
  const [review, setReview] = useState({});
  const [vote, setVote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { review_id } = useParams();

  /*Need to setup decrease button to decrease along with logic for if 
statement dependent on which is clicked */

  const handleIncVoteClick = () => {
    setVote((currVote) => currVote + 1);
    setHasVoted(true);
    patchVotes(review_id, { inc_votes: 1 });
  };

  const handleDecVoteClick = () => {
    setVote((currVote) => currVote - 1);
    setHasVoted(true);
    patchVotes(review_id, { inc_votes: -1 });
  };

  useEffect(() => {
    getReview(review_id)
      .then((data) => {
        setReview(data);
        setVote(data.votes);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
      });
  }, [review_id]);

  if (hasError) return <FourZeroFour />;

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <img
        src={review.review_img_url}
        alt="game"
        className="justify-content-center mt-4 col-md-6"
      ></img>
      <div>
        <h1>{review.title}</h1>
        <h2>{review.designer}</h2>
        <h3>Category: {review.category}</h3>
        <h3>Votes: {vote}</h3>
        <Button
          onClick={handleDecVoteClick}
          disabled={hasVoted}
          className="Vote-button"
          variant="danger"
        >
          Downvote
        </Button>
        <Button
          onClick={handleIncVoteClick}
          disabled={hasVoted}
          className="Vote-button"
          variant="success"
        >
          Upvote
        </Button>
      </div>
      <Tabs
        defaultActiveKey="review"
        id="uncontrolled-tab-example"
        className="justify-content-center col-md-6 offset-md-3 mt-2"
      >
        <Tab
          eventKey="review"
          title="Review"
          className="text-center border border-dark justify-content-center col-md-6 offset-md-3 mt-2 mb-2"
        >
          <h3>{review.owner}</h3>
          <h3>{formatDate(review.created_at)}</h3>
          <p>{review.review_body}</p>
        </Tab>
        <Tab eventKey="comments" title="Comments">
          <Comments
            review_id={review_id}
            comments={comments}
            setComments={setComments}
          />
        </Tab>
        <Tab eventKey="add-comment" title="Add Comment">
          <p className="text-center border border-dark justify-content-center col-md-6 offset-md-3 mt-2 mb-2">
            PLACEHOLDER FOR COMMENT SUBMIT FORM
          </p>
        </Tab>
      </Tabs>
    </main>
  );
};

export default IndividualReview;
