import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getReviews } from '../utils/api';
import formatDropdownString from '../utils/sorting';

const Reviews = ({ category, setCategory, categories }) => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [order, setOrder] = useState('desc');

  useEffect(() => {
    getReviews(category, sortBy, order).then((reviewsArr) => {
      setReviews(reviewsArr);
    });
  }, [setReviews, category, order, sortBy]);

  const sortOptions = ['created_at', 'comment_count', 'votes'];
  const orderOptions = ['desc', 'asc'];

  return (
    <main>
      <h1>{category || 'All Items'}</h1>
      <DropdownButton id="dropdown-basic-button" title="CHOOSE CATEGORY">
        {categories.map((categoryObj) => {
          return (
            <Dropdown.Item
              as={Link}
              to="/reviews"
              key={categoryObj.slug}
              onClick={() => {
                setCategory(categoryObj.slug);
              }}
            >
              {formatDropdownString(categoryObj.slug)}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title="SORT BY">
        {sortOptions.map((sortString) => {
          return (
            <Dropdown.Item
              key={sortString}
              onClick={() => {
                setSortBy(sortString);
              }}
            >
              {formatDropdownString(sortString)}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title="ORDER BY">
        {orderOptions.map((orderString) => {
          return (
            <Dropdown.Item
              key={orderString}
              onClick={() => {
                setOrder(orderString);
              }}
            >
              {formatDropdownString(orderString)}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <ul>
        {reviews.map((game) => {
          return (
            <li>
              <Link to={`/reviews/${game.review_id}`}>
                <img src={game.review_img_url} alt="game"></img>
                <h3>{game.title}</h3>
              </Link>
              <h3>{game.owner}</h3>
              <p>Votes: {game.votes}</p>
              <p>Created: {game.created_at}</p>
              <p>Number of Comments{game.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
